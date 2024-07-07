import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Data from "../data/Data";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/notification.css';

interface Product {
    id: number;
    title: string;
    titlecomercial: string;
    discont?: number;
    price: number;
    image: string;
    brand: string;
    subcategoryIds: number[];
    category: number[];
    sizes: string[];
    grupoEdad: string[];
    gender: string[];
    img1?: string;
    img2?: string;
    img3?: string;
    cantidad?: number;
    valoration?: number;
    stock?: number;
}

interface DataContextProps {
    productos: Product[];
    addCarrito: (id: number) => void;
    carrito: Product[];
    setCarrito: React.Dispatch<React.SetStateAction<Product[]>>;
    total: number;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [productos, setProductos] = useState<Product[]>([]);
    const [carrito, setCarrito] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const productos = Data.items;
        if (productos) {
            setProductos(productos);
        } else {
            setProductos([]);
        }
    }, [])

    const addCarrito = (id: number) => {
        const check = carrito.every(item => item.id !== id);
        if (check) {

            const data = productos.filter(product => {
                return product.id === id;
            })
            setCarrito([...carrito, ...data]);
            toast.success('Producto agregado al carrito', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                className: 'toast-container-success',
            });
        } else {
            toast.error('Ya tienes este producto en tu carrito', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                className: 'toast-container-error',
            });
        }
    };

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito') || '[]');
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, []);

    const calculateTotal = (items: Product[]) => {
        return items.reduce((prev, item) => prev + (item.price * (item.cantidad || 1)), 0);
    };

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
        setTotal(calculateTotal(carrito));
    }, [carrito]);

    const value: DataContextProps = {
        productos: productos,
        addCarrito: addCarrito,
        carrito: carrito,
        setCarrito: setCarrito,
        total: total
    };

    return (
        <DataContext.Provider value={value}>
            <ToastContainer />
            {children}
        </DataContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a DataProvider');
    }
    return context;
};