import React from 'react'

const Input2 = ({type,name,value,placeholder,handleInput,lblText,error,...rest}) => {
    return (
        <div className="mb-3">
            <label className="col-form-label pt-0">{lblText}</label>
            <input type={type} name={name} value={value} onChange={handleInput}  placeholder={placeholder} {...rest}  
                  style={ 
                    error ?  {border : '1px solid red'}  : null
                    } />
                  <small className="form-text text-danger">{error}</small>
        </div>
    )
  }

export default Input2