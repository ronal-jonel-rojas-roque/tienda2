import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/users/home/Home';
import './styles/index.css';
import ErrorPage from './components/errorpage/ErrorPage';
import Login from './pages/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import PrivateRoute from './controller/PrivateRoute';
import Customers from './pages/admin/customers/Customers';
import Order from './pages/admin/orders/Order';
import Tienda from './pages/users/tienda/Tienda';
import { DataProvider } from './context/DataContext';
import Blog from './pages/users/blog/Blog';
import Contact from './pages/users/contact/Contact';


function App() {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <DataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute component={Home} requiredRole="user" />} />
            <Route path="/tienda" element={<PrivateRoute component={Tienda} requiredRole="user" />} />
            <Route path="/blog" element={<PrivateRoute component={Blog} requiredRole="user" />} />
            <Route path="/contact" element={<PrivateRoute component={Contact} requiredRole="user" />} />

            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} requiredRole="admin" />} />
            <Route path='/customers' element={<PrivateRoute component={Customers} requiredRole="admin" />} />
            <Route path='/orders' element={<PrivateRoute component={Order} requiredRole="admin" />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to="/error" />} />
          </Routes>
        </div>
    </DataProvider>
  );
}

export default App;
