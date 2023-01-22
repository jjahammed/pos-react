import React from 'react'
import Loading from '../../pages/extra/Loading'

const Products = ({product,addTableRows,calculation}) => {
  return (
    <div className="row">
    {product.length == 0 ? <Loading /> :
    product.map(item => {
      return (
      item.stockk.quantity > 0 ? 
        <div className="col-sm-2 col-6" key={item.id} style={{cursor:'pointer'}}>
          <div className="card height-equal equal-height-lg">
            <div className="blog-box blog-grid text-center">
              <img src={"/"+ item.image} className="img-fluid top-radius-blog"  onClick={() => { addTableRows(item); calculation(); }}/>
              <div className="blog-details-main">
                <small className="text-blod">{item.title}</small>
                <small className="text-blod">{item.stockk.quantity}</small>
                <ul className="blog-social">
                  <li className="digits">BDT : {item.salePrice}tk</li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        : null
      )
      // return (
      //   <div className="col-sm-2 col-6" key={item.id} style={{cursor:'pointer'}}>
      //     <div className="card height-equal equal-height-lg">
      //       <div className="blog-box blog-grid text-center">
      //         <img src={"/"+ item.image} className="img-fluid top-radius-blog"  onClick={() => { addTableRows(item); calculation(); }}/>
      //         <div className="blog-details-main">
      //           <small className="text-blod">{item.title}</small>
      //           <small className="text-blod">{item.stockk.quantity}</small>
      //           <ul className="blog-social">
      //             <li className="digits">BDT : {item.salePrice}tk</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // )

    }
    )
    }
  </div>
  )
}

export default Products
