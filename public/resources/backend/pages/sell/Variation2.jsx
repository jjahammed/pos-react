import React from 'react'

const Variation = ({rowsData, deleteTableRows, handleChange}) => {
    return(
        
        rowsData.map((data, index)=>{
            const {product_id,product_pid,product_title,product_price,product_image,product_qty,total_price}= data;
            return(
                
                <tr className='text-center' key={product_id}>
                    <td scope="col" hidden> <input type="text" value={product_id} onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control"/></td>
                    <td scope="col"> {index+1}
                    <input type="hidden" value={index+1} onChange={(evnt)=>(handleChange(index, evnt))} name="product_id" className="form-control"/>
                    </td>
                    <td scope="col"> {product_title}
                    <input type="hidden" value={product_title} onChange={(evnt)=>(handleChange(index, evnt))} name="product_title" className="form-control"/>
                    </td>
                    <td scope="col" width={'10%'}> 
                    <input type="number" value={product_qty} onChange={(evnt)=>(handleChange(index, evnt))} name="product_qty" className="form-control text-center"/>
                    </td>
                    <td scope="col"> {total_price}
                    <br/>
                    (<small>{product_price +'x'+ product_qty }</small>)
                    <input type="hidden" value={total_price} onChange={(evnt)=>(handleChange(index, evnt))} name="total_price" className="form-control"/>
                    </td>
                    <td scope="col"><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                
            </tr>
            )
        })
   
    )
}

export default Variation