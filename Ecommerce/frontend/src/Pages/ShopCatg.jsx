import React, { useContext } from 'react'
import './CSS/Shop.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown.png'
import Item from '../Components/item/item'

import star0 from '../Components/Assets/ratings/rating-0.png'
import star5 from '../Components/Assets/ratings/rating-05.png';
import star10 from '../Components/Assets/ratings/rating-10.png';
import star15 from '../Components/Assets/ratings/rating-15.png';
import star20 from '../Components/Assets/ratings/rating-20.png';
import star25 from '../Components/Assets/ratings/rating-25.png';
import star30 from '../Components/Assets/ratings/rating-30.png';
import star35 from '../Components/Assets/ratings/rating-35.png';
import star40 from '../Components/Assets/ratings/rating-40.png';
import star45 from '../Components/Assets/ratings/rating-45.png';
import star50 from '../Components/Assets/ratings/rating-50.png';

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

const ShopCatg = (props) => {
  const {products} = useContext(ShopContext)
  return (
    <div className='shop-category container-fluid'> 
      <div className="shopcategory-indexSort d-flex justify-content-between align-items-center">
        <p>
          <span className = "fw-semibold "> All Products </span> 
        </p>
        <div className="shopcategory-sort px-1 py-1 rounded-4 border border-secondary">
          Sort by <img src={dropdown} alt=''/>
        </div>
      </div>
      <div className="shopcategory-products row">
        {products.map((item, i)=>{
          if (props.category===item.category) {
            const ratingIndex = Math.round(item.rating.stars * 10);
            const ratingImage = ratingImages[ratingIndex] || ratingImages[0];
            return <div key={i} className='col-md-3'><Item  id={item.id} name={item.name} image = {item.image} rating={{ ...item.rating, image: ratingImage }} price={item.price}/></div>
          }
          else{
              return null            
          }
        })}
      </div>
      <div className="shop-loadmore d-flex justify-content-center align-items-center pt-2 pb-5">
        <button className="btn">Explore More</button>
      </div>
    </div>
  )
}

export default ShopCatg
