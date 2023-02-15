import React from 'react'
import ImageUploading from 'react-images-uploading';
import Classes from './form.module.css'

const Image = ({images,image,onChange,lblText,error}) => {
  return (
    <div>
        <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">{lblText}</label>
            <div className="col-sm-9">
            <ImageUploading
            // multiple
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
        >
            {({
            imageList,
            onImageUpload,
            isDragging,
            dragProps,
            }) => (
            // write your building UI
            <div className="upload__image-wrapper">
                <button className={Classes.imageStyle} type='button'
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                > 
                {imageList.length == 1 ? '' : <img className={Classes.imgUpload} src={'/'+ image} alt="Click or Drop Image" />}

                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img className={Classes.imgUpload} src={image['data_url']} alt="" />
                    <div className="image-item__btn-wrapper">
                    </div>
                </div>
                ))} 
                
                </button>
                &nbsp;
            </div>
            )}
        </ImageUploading>
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>
  )
}

export default Image