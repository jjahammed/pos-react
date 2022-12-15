import React from 'react'

const Input = ({type,name,value,placeholder,handleInput,lblText,error,...rest}) => {
  return (
    <div>
         <div className="mb-3 row">
            <label className="col-sm-4 col-form-label" hidden={type == 'hidden' ? true : false}>{lblText}</label>
            <div className="col-sm-8">
            <input type={type} name={name} value={value} onChange={handleInput}  placeholder={placeholder} {...rest}  
                style={ 
                  error ?  {border : '1px solid red'}  : null
                  } />
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default Input