import React from 'react'
import './Product_cat.css'
import { Link } from 'react-router-dom';
import cat1 from '../Assets/cat-1.png'
import cat2 from '../Assets/cat-2.png'
import cat3 from '../Assets/cat-3.png'
import cat4 from '../Assets/cat-4.png'

const ProductCat = () => {
  return (
    <div className='product_cat container-fluid pt-5 pb-2'>
        <div className="section-heading">
            <h2 className="text-center fs-2 fw-bold pb-2">Shop By Category</h2>
        </div>
            <div className="row">
                <div className="col-md-3 col-12">
                    <Link to = '/fashion'>
                        <div class="card">
                            <img src={cat1} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <p class="card-text w-100 text-uppercase">Fashion</p>
                                <Link to= '/fashion'><button className="btn w-40">Shop</button></Link>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-12">
                    <Link to = '/fashion'>
                        <div class="card">
                            <img src={cat2} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <p class="card-text w-100 text-uppercase">Decor</p>
                                <Link to= '/fashion'><button className="btn w-40">Shop</button></Link>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-12">
                    <Link to = '/fashion'>
                        <div class="card">
                            <img src={cat3} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <p class="card-text w-100 text-uppercase">Kitchen Appliances</p>
                                <Link to= '/fashion'><button className="btn w-40">Shop</button></Link>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-12">
                    <Link to = '/fashion'>
                        <div class="card">
                            <img src={cat4} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <p class="card-text w-100 text-uppercase">Sports</p>
                                <Link to= '/fashion'><button className="btn w-40">Shop</button></Link>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>
       
    </div>
  )
}

export default ProductCat
