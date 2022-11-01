import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ForgetPassword from '../auth/ForgetPassword'
import Login from '../auth/Login'
import Register from '../auth/Register'

import Fontend from '../fontend/layout/Master'
import Backend from './layout/Master'
import List from './pages/product/List'
import CategoryList from './pages/category/List'
import CategoryNew from './pages/category/New'
import CategoryEdit from './pages/category/Edit'
import SubCategoryList from './pages/subcategory/List'
import SubCategoryNew from './pages/subcategory/New'
import SubCategoryEdit from './pages/subcategory/Edit'
import BrandList from './pages/brand/List'
import BrandNew from './pages/brand/New'
import BrandEdit from './pages/brand/Edit'
import UnitList from './pages/unit/List'
import UnitNew from './pages/unit/New'
import UnitEdit from './pages/unit/Edit'
import LocationList from './pages/location/List'
import LocationNew from './pages/location/New'
import LocationEdit from './pages/location/Edit'
import Sample from './pages/Sample/Sample'
import Error from './pages/error/Error404'

import Home from '../fontend/pages/home/Home'
import Contact from '../fontend/pages/contact/contact'



const App = () => {
  return (
    <div>
        <Router>
            <Routes>

                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/forget-password' element={<ForgetPassword />}/>


                <Route path='/' element={<Fontend/>}>
                  <Route path='/' element={<Home/>} />
                  <Route path='contact' element={<Contact/>} />
                </Route> 

                <Route path='/admin/*' element={<Backend/>}>
                  <Route path='*' element={<Error/>} />
                  <Route path='sample' element={<Sample/>} />
                  <Route path='product' element={<List/>} />
                  <Route path='category' element={<CategoryList/>} />
                  <Route path='category/new' element={<CategoryNew/>} />
                  <Route path='category/:slug/edit' element={<CategoryEdit/>} />
                  <Route path='sub-category' element={<SubCategoryList/>} />
                  <Route path='sub-category/new' element={<SubCategoryNew/>} />
                  <Route path='sub-category/:slug/edit' element={<SubCategoryEdit/>} />
                  <Route path='brand' element={<BrandList/>} />
                  <Route path='brand/new' element={<BrandNew/>} />
                  <Route path='brand/:slug/edit' element={<BrandEdit/>} />
                  <Route path='unit' element={<UnitList/>} />
                  <Route path='unit/new' element={<UnitNew/>} />
                  <Route path='unit/:slug/edit' element={<UnitEdit/>} />
                  <Route path='location' element={<LocationList/>} />
                  <Route path='location/new' element={<LocationNew/>} />
                  <Route path='location/:slug/edit' element={<LocationEdit/>} />
                  <Route path='supplier' element={<List/>} />
                  <Route path='location' element={<List/>} />
                </Route> 
            </Routes>
        </Router>
    </div>

  )
}

export default App