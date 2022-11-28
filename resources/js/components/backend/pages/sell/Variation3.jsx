import React from 'react'

const Variation = ({rowsData, deleteTableRows, handleChange}) => {
    return(
        
        rowsData.map((data, index)=>{
            return(
                
                <tr className='text-center' key={data.id}>
                    <td scope="col" hidden> <input type="text" value={data?.product?.id} onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control"/></td>
                    <td scope="col"> {index+1}
                    <input type="hidden" value={index+1} onChange={(evnt)=>(handleChange(index, evnt))} name="product_id" className="form-control"/>
                    </td>
                    <td scope="col"> {data?.product?.title}
                    <input type="hidden" value={data?.product?.title} onChange={(evnt)=>(handleChange(index, evnt))} name="product_title" className="form-control"/>
                    </td>
                    <td scope="col" width={'10%'}> 
                    <input type="number" value={data.quantity} onChange={(evnt)=>(handleChange(index, evnt))} name="product_qty" className="form-control text-center"/>
                    </td>
                    <td scope="col"> {data?.product?.salePrice * data.quantity}
                    <br/>
                    (<small>{data?.product?.salePrice +'x'+ data.quantity }</small>)
                    <input type="hidden" value={data?.product?.salePrice * data.quantity} onChange={(evnt)=>(handleChange(index, evnt))} name="total_price" className="form-control"/>
                    </td>
                    <td scope="col"><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                
            </tr>
            )
        })
   
    )
}

export default Variation