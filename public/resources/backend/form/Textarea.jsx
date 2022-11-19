import React from 'react'

const Textarea = ({name,value,placeholder,lblText,handleInput,error,...rest}) => {
  return (
    <div>
         <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">{lblText}</label>
            <div className="col-sm-8">
            <textarea name={name} placeholder={placeholder} value={value}  onChange={handleInput} {...rest}
            style={ 
                error ?  {border : '1px solid red'}  : null
                }
                />
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default Textarea