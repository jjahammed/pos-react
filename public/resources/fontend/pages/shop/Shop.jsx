import React from 'react'

import Titlebar from './Titlebar'
import MainContainer from './MainContainer'
import Header2 from '../../layout/Header2'

const Shop = () => {
  return (
    <div className='grocino-category-sidebar'>
        <div className="home-header home-header2">
        <Header2 />
        </div>
        <div className="category-section1"> 
            <div className="container">
                {/* category-filter start here */}
                <div id="category-filter">
                    <Titlebar/>
                    <MainContainer/>
                </div>
                {/* category-filter start here */}
            </div>
        </div>
  </div>

  )
}

export default Shop