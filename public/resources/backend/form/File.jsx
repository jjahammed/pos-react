import React from 'react'

const File = ({name, error,lableText, ...rest}) => {
  return (
    <div>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">{lableText}</label>
            <div className=" col-sm-9">
            <input type='file' name={name} {...rest}  
                style={ 
                  error ?  {border : '1px solid red'}  : null
                  } />
              <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default File