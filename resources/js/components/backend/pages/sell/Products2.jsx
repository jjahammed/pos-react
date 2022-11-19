import React from 'react'
import Loading from '../../pages/extra/Loading'
import { FixedSizeList } from 'react-window';
 

 

const Products = ({product,addTableRows,calculation}) => {

  const Row = ({ index, style }) => (
    
        <div className="card height-equal equal-height-lg">
          <div className="blog-box blog-grid text-center">
            <img src={"/"+ product[index].image} className="img-fluid top-radius-blog"  onClick={() => { addTableRows(item); calculation(); }}/>
            <div className="blog-details-main">
              <small className="text-blod">{product[index].title}</small>
              <ul className="blog-social">
                <li className="digits">BDT : {product[index].salePrice}tk</li>
              </ul>
            </div>
          </div>
        </div>
     
);
console.log(Products.length)
  return (
    <div className="row">
      <div className="col-sm-2 col-6" style={{cursor:'pointer'}}>
          {product.length == 0 ? <Loading /> :
              <FixedSizeList 
              height={500}
              itemCount={product.length}
              itemSize={35}
              // width={300}
              >
              {Row}
            </FixedSizeList>
          }
      </div>
    </div>
    
    
  
  )
}

export default Products
