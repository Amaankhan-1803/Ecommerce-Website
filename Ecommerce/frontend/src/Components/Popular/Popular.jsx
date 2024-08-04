import React from 'react'
import './Popular.css'
import latest from '../Assets/latest'
import Item from '../item/item'
import star0 from '../Assets/ratings/rating-0.png'
import star5 from '../Assets/ratings/rating-05.png';
import star10 from '../Assets/ratings/rating-10.png';
import star15 from '../Assets/ratings/rating-15.png';
import star20 from '../Assets/ratings/rating-20.png';
import star25 from '../Assets/ratings/rating-25.png';
import star30 from '../Assets/ratings/rating-30.png';
import star35 from '../Assets/ratings/rating-35.png';
import star40 from '../Assets/ratings/rating-40.png';
import star45 from '../Assets/ratings/rating-45.png';
import star50 from '../Assets/ratings/rating-50.png';

const ratingImages = {
  0: star0,
  5: star5,
  10: star10,
  15: star15,
  20: star20,
  25: star25,
  30: star30,
  35: star35,
  40: star40,
  45: star45,
  50: star50,
};

const Popular = () => {
  return (
    <div className="container-fluid py-3">
        <div className='latest d-flex flex-column gap-2 align-items-center'>
         <div className="section-heading">
            <h2 className="text-center fs-2 fw-bold pb-2">Latest Products</h2>
        </div>
        <div className="latest_products d-flex gap-3 ">
            {latest.map((item, i)=>{
                const ratingIndex = Math.round(item.rating.stars * 10);
                const ratingImage = ratingImages[ratingIndex] || ratingImages[0];
                return<Item key={i} id={item.id} name={item.name} image = {item.image} rating={{ ...item.rating, image: ratingImage }} price={item.price}/>
            })}
        </div>
    </div>
    </div>
  )
}

export default Popular
