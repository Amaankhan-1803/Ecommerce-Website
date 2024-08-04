import React from 'react'
import Popular from '../Components/Popular/Popular'
import Banner from '../Components/Hero/Hero';
import ProductCat from '../Components/Product_Category/Product_cat';
import Features from '../Components/Features/features';

const Home = () => {
  return (
    <div> 
    <Banner /> 
    <ProductCat/>
    <Popular/>
    <Features/>
    </div>
  )
}

export default Home
