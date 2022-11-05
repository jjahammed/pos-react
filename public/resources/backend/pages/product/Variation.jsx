import React from 'react'

const Variation = ({rowsData, deleteTableRows, handleChange}) => {
    return(
        
        rowsData.map((data, index)=>{
            const {color,size,img,pprice,sprice,dis}= data;
            return(
                
                <tr className='text-center' key={index}>
                    <td scope="col"> <input type="color" value={color} onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control"/></td>
                    <td scope="col"> <input type="text" value={size} onChange={(evnt)=>(handleChange(index, evnt))} name="size" className="form-control"/></td>
                    <td scope="col"> <input type="text" value={pprice} onChange={(evnt)=>(handleChange(index, evnt))} name="pprice" className="form-control"/></td>
                    <td scope="col"> <input type="text" value={sprice} onChange={(evnt)=>(handleChange(index, evnt))} name="sprice" className="form-control"/></td>
                    <td scope="col"> <input type="text" value={dis} onChange={(evnt)=>(handleChange(index, evnt))} name="dis" className="form-control"/></td>
                    <td scope="col"> <input type="file" value={img} onChange={(evnt)=>(handleChange(index, evnt))} name="img" className="form-control"/></td>
                    <td scope="col"><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                
            </tr>
            )
        })
   
    )
}

export default Variation