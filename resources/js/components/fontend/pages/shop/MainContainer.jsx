import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Products from './Products'

const MainContainer = () => {

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
     axios.get('/api/category').then(res => setCategory(res.data.data));
     setLoading(false)
    }, [])
    

    if(loading){
        return 'loading...'
    }
    
  return (
    <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 category-sidebar">
                    <div className="filter-group">
                        <h3 className="title">Categories</h3> 
                        <div className="filter-content">
                        <ul className="list-menu">
                            {category.map((item) => {
                                return <li key={item.id}><a href="#" data-abc="true">{item.name} <span>3</span></a></li>
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="filter-group">
                        <h3 className="title">Filter By Price </h3> 
                        <div className="filter-content">
                        <fieldset className="filter-price">
                            <div id="slider-range" />
                            <div className="slider-labels">
                            <div className="caption">
                                <div className="price-wrap">
                                <button type="button" className="btn price-btn">Filter</button>
                                </div>
                                Price:-  <span id="slider-range-value1"> </span>
                                -  <span id="slider-range-value2"> </span>
                            </div>
                            </div>
                            <form>
                            <input type="hidden" name="min-value" defaultValue />
                            <input type="hidden" name="max-value" defaultValue />
                            </form>
                        </fieldset> 
                        </div>
                    </div>
                    <div className="filter-group">
                        <h3 className="title">Most Seller </h3> 
                        <div className="filter-content">
                        <div className="media">
                            <a href="product-detail.html">
                            <div className="img-product">
                                <img src="/resources/fontend/assets/img/cat-detail/seller1.png" alt="Product Image" />
                            </div>
                            </a>
                            <div className="media-body">
                            <h6>Cow Milk</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                            <span>$10.00- $20.00</span>
                            </div>
                        </div>
                        <div className="media">
                            <a href="product-detail.html">
                            <div className="img-product">
                                <img src="/resources/fontend/assets/img/cat-detail/seller2.png" alt="Product Image" />
                            </div>
                            </a>
                            <div className="media-body">
                            <h6>Pasta Shells</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                            <span>$10.00- $20.00</span>
                            </div>
                        </div>
                        <div className="media">
                            <a href="product-detail.html">
                            <div className="img-product">
                                <img src="/resources/fontend/assets/img/cat-detail/seller3.png" alt="Product Image" />
                            </div>
                            </a>
                            <div className="media-body">
                            <h6>Healthy Diet</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                            <span>$10.00- $20.00</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="filter-group">
                        <h3 className="title">Tags </h3> 
                        <div className="filter-content">
                        <ul className="list-inline tags">
                            <li className="list-inline-item"><a href="#">Fruit</a></li>
                            <li className="list-inline-item"><a href="#">Cheese Pasta</a></li>
                            <li className="list-inline-item"><a href="#">Pasta</a></li>
                            <li className="list-inline-item"><a href="#">Grapes</a></li>
                            <li className="list-inline-item"><a href="#">Apple</a></li>
                            <li className="list-inline-item"><a href="#">Chicken</a></li>
                        </ul>
                        </div>
                    </div>
                    <img src="/resources/fontend/assets/img/cat-detail/banner.png" alt="Banner" className="w-100" />
                    </div>
                    <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
                    
                        <Products/>
                    
                    
                    </div>
                    
                </div>
  )
}

export default MainContainer