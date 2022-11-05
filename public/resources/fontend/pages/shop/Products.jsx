import React,{useEffect,useState,useRef} from 'react'
import useLazyLoad from '../../../hooks/useLazyLoad'
import clsx from "clsx";
import { LoadingPosts } from './LoadingPosts';

const NUM_PER_PAGE = 12;
const TOTAL_PAGES = 8;

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('/api/product').then(res => setProduct(res.data.data));
    }, [])

    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const data = product.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data);
            resolve(data);
        }, 500);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });


  return (
        <>
    <div className="row filter-products">
        {
                            data.map((item) => {
                               return <div key={item.id} className="product-layout product-grid col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-holder product-thumb">
                                        <div className="image">
                                        <a href="product-detail.html"> 
                                            <div className="img-product">
                                            <img src={item.image} className="img-fluid" alt="Product Image" /> 
                                            </div>
                                        </a>
                                        </div>
                                        <div className="p-content caption">
                                        <div className="p-cate"> {item.title}</div>
                                        <div className="p-title"> <a href="product-detail.html"> {item.brand.name} </a></div>
                                        <div className="p-price">
                                            ${item.salePrice} <span className="pull-right"> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i> <i className="fa fa-star-o"> </i></span>
                                        </div>
                                        <div className="p-buttonarea">
                                            <a href="cart.html" className="btn btn-pcart"> 
                                            <img src="/resources/fontend/assets/img/home/right-arrow.png" className="arrow-left" alt="Arrow Left" /> Add To Cart 
                                            </a>
                                            <span className="pull-right">  
                                            <a href="#" className="btn-wish"><i className="uil uil-heart"> </i></a>
                                            <a href="#" className="btn-wish"> <i className="uil uil-eye"> </i></a>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            
                        }    
                        
    </div>
    <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            {/* <LoadingPosts /> */}
        </div>
        </>
  )
}

export default Products