import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ValorationStarProps {
    valoration: number;
}

const ValorationStar: React.FC<ValorationStarProps> = ({ valoration }) => {

    const fullStars = Math.floor(valoration);
    const halfStar = valoration - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return (
        <div className="products_star">
            {Array(fullStars).fill(null).map((_, index) => (
                <FaStar key={`full-${index}`} className="fa-solid fa-star" />
            ))}
            {halfStar === 1 && <FaStarHalfAlt key="half" className="fa-solid fa-star" />}
            {Array(emptyStars).fill(null).map((_, index) => (
                <FaRegStar key={`empty-${index}`} className="fa-solid fa-star" />
            ))}
        </div>
    );
}

export default ValorationStar;
