import React from 'react';
import './item.css'

function Item({ name, image, rating, price }) {
 
    return (
    <div className= 'item py-3' >
        <div className="card">
            <div className="product-image">
                <img className='card-img-top' src={image} alt="" />
                <span className='lat-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>New</span>
            </div>
            <div className="rating">
                <img src={rating.image} alt={`Rating: ${rating.stars}`} className="rating-image me-2" />
                 <div className="rating-count">({rating.count})</div>
            </div>
            <div className="card-info px-1">
                <p className="card-text">{name}</p>
                <p className="card-price">₹{price}/-</p>
            </div>
        </div>
    </div>
  );
}

export default Item;
