import React from 'react'

const Variation = ({rowsData, deleteTableRows, handleChange}) => {
    return(
        
        rowsData.map((data, index)=>{
            const {product_id,product_pid,product_title,product_price,product_image,product_qty,total_price}= data;
            return(
                
                <tr className='text-center' key={index}>
                    <td scope="col" hidden> <input type="text" value={product_id} onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control"/></td>
                    <td scope="col"> {product_id}
                    <input type="hidden" value={product_id} onChange={(evnt)=>(handleChange(index, evnt))} name="product_id" className="form-control"/>
                    </td>
                    <td scope="col"> {product_pid}
                    <input type="hidden" value={product_pid} onChange={(evnt)=>(handleChange(index, evnt))} name="product_pid" className="form-control"/>
                    </td>
                    <td scope="col"> {product_title}
                    <input type="hidden" value={product_title} onChange={(evnt)=>(handleChange(index, evnt))} name="product_title" className="form-control"/>
                    </td>
                    <td scope="col"> 
                    <img src={'/' + product_image} style={{ width: '50px',height:'50px',borderRadius:'50%'}}/>
                    <input type="hidden" value={product_image} onChange={(evnt)=>(handleChange(index, evnt))} name="product_image" className="form-control"/>
                    </td>
                    <td scope="col"> {product_price}
                    <input type="hidden" value={product_price} onChange={(evnt)=>(handleChange(index, evnt))} name="product_price" className="form-control"/>
                    </td>
                    <td scope="col" width={'10%'}> 
                    <input type="number" value={product_qty} onChange={(evnt)=>(handleChange(index, evnt))} name="product_qty" className="form-control text-center"/>
                    </td>
                    <td scope="col"> {total_price}
                    <input type="hidden" value={total_price} onChange={(evnt)=>(handleChange(index, evnt))} name="total_price" className="form-control"/>
                    </td>
                    <td scope="col"><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                
            </tr>
            )
        })
   
    )
}

export default Variation