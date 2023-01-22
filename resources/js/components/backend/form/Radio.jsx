import React from 'react'

const Radio = ({name,defaultValue,id,lbl,handleInput,...rest}) => {
  return (
    <div>
        <div className="form-check form-check-inline radio radio-primary">
            <input className="form-check-input" type="radio" name={name} id={id} defaultValue={defaultValue} onChange={handleInput} {...rest}/>
            <label htmlFor={id} className="form-check-label">{lbl}</label>
        </div>
       
    </div>
  )
}

export default Radio
