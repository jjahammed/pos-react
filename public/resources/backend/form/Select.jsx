import React from 'react'

const Select = ({name,value,lblText,error,opValue,opText,children,...rest}) => {
  return (
    <div>
         <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">{lblText}</label>
            <div className="col-sm-8">
                <select name={name} value={value} {...rest}  
                        style={ 
                        error ?  {border : '1px solid red'}  : null
                        }>
                            <option value={opValue}>{opText}</option>
                      {children}
                  </select>
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default Select