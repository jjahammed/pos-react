import React from 'react'
import Select from 'react-select';

const Select2 = ({name,value,lblText,error,option,userChoice,placeholder,...rest}) => {

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: error ? '1px solid red' : null,
      // error ?  border : '1px solid red'  : null
    }),
  };

  return (
    <div>
         <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">{lblText}</label>
            <div className="col-sm-8">
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={value}
                    // isDisabled={isDisabled}
                    // isLoading={isLoading}
                    // isRtl={isRtl}
                    // value = {value}
                    onChange={userChoice}
                    // isClearable={true}
                    isSearchable={true}
                    name={name}
                    options={option}
                    styles={customStyles}
                    placeholder={placeholder}
                    // {...rest}
                />
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default Select2