import React from 'react'
import './featurehome.css'

import shipping from "../../../../images/products/shipping.png";
import retur from "../../../../images/products/return.png";
import gift from "../../../../images/products/gift.png";
import contact from "../../../../images/products/contact.png";
import air from "../../../../images/products/air.png";
import visa from "../../../../images/products/visa.png";
import master from "../../../../images/products/master.png";

export default function FeatueHome() {
    return (
        <div>
            <div className="features">
                <div className="feature">
                    <img src={shipping} alt="" className="featureIcon" />
                    <span className="featureTitle">FREE SHIPPING</span>
                    <span className="featureDesc">Free worldwide shipping on all orders.</span>
                </div>
                <div className="feature">
                    <img className="featureIcon" src={retur} alt="" />
                    <span className="featureTitle">30 DAYS RETURN</span>
                    <span className="featureDesc">No question return and easy refund in 14 days.</span>
                </div>
                <div className="feature">
                    <img className="featureIcon" src={gift} alt="" />
                    <span className="featureTitle">GIFT CARDS</span>
                    <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
                </div>
                <div className="feature">
                    <img className="featureIcon" src={contact} alt="" />
                    <span className="featureTitle">CONTACT US!</span>
                    <span className="featureDesc">Keep in touch via email and support system.</span>
                </div>
            </div>


            <div className="productos-home-section" id="product">
                <img src={air} alt="" className="productImg" />
                <div className="productDetails">
                    <h1 className="productTitle">AIR FORCE</h1>
                    <h2 className="productPrice">$199</h2>
                    <p className="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                        dolorum
                        doloremque sapiente aliquid aperiam.</p>
                    <div className="colors">
                        <div className="color"></div>
                        <div className="color"></div>
                    </div>
                    <div className="sizes">
                        <div className="size">42</div>
                        <div className="size">43</div>
                        <div className="size">44</div>
                    </div>
                    <button className="productButton">BUY NOW!</button>
                </div>
                <div className="payment">
                    <h1 className="payTitle">Personal Information</h1>
                    <label>Name and Surname</label>
                    <input type="text" placeholder="John Doe" className="payInput" />
                    <label>Phone Number</label>
                    <input type="text" placeholder="+1 234 5678" className="payInput" />
                    <label>Address</label>
                    <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
                    <h1 className="payTitle">Card Information</h1>
                    <div className="cardIcons">
                        <img src={visa} width="40" alt="" className="cardIcon" />
                        <img src={master} alt="" width="40" className="cardIcon" />
                    </div>
                    <input type="password" className="payInput" placeholder="Card Number" />
                    <div className="cardInfo">
                        <input type="text" placeholder="mm" className="payInput sm" />
                        <input type="text" placeholder="yyyy" className="payInput sm" />
                        <input type="text" placeholder="cvv" className="payInput sm" />
                    </div>
                    <button className="payButton">Checkout!</button>
                    <span className="close">X</span>
                </div>
            </div>

            <div className="gallery">
                <div className="galleryItem">
                    <h1 className="galleryTitle">Be Yourself!</h1>
                    <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className="galleryImg" />
                </div>
                <div className="galleryItem">
                    <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className="galleryImg" />
                    <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
                </div>
                <div className="galleryItem">
                    <h1 className="galleryTitle">Just Do it!</h1>
                    <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className="galleryImg" />
                </div>
            </div>

        </div>
    )
}
