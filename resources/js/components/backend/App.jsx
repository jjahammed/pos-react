import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'

import Auth from '../auth/Master'
import ForgetPassword from '../auth/ForgetPassword'
import Login from '../auth/Login'
import Register from '../auth/Register'

// import Fontend from '../fontend/layout/Master'
import Backend from './layout/Master'

import ProductList from './pages/product/List'
import ProductNew from './pages/product/New'
import ProductEdit from './pages/product/Edit'

import StockList from './pages/stock/List'
import StockNew from './pages/stock/New'
import StockEdit from './pages/stock/Edit'
import StockShow from './pages/stock/Show'
import StockAlert from './pages/stock/Alert'

import SupplierList from './pages/supplier/List'
import SupplierNew from './pages/supplier/New'
import SupplierEdit from './pages/supplier/Edit'

import Sell from './pages/sell/Sell'
import SellList from './pages/sell/List'
import SellEdit from './pages/sell/Edit'
import SellShow from './pages/sell/Show'
import SellReturn from './pages/sell/Return'
import SellReturnProduct from './pages/sell/ReturnProduct'

import CategoryList from './pages/category/List'
import CategoryNew from './pages/category/New'
import CategoryEdit from './pages/category/Edit'

import ModuleList from './pages/module/List'
import ModuleNew from './pages/module/New'
import ModuleEdit from './pages/module/Edit'

import SubmoduleList from './pages/subModule/List'
import SubmoduleNew from './pages/subModule/New'
import SubmoduleEdit from './pages/subModule/Edit'

import PermissionList from './pages/permission/List'
import PermissionNew from './pages/permission/New'
import PermissionEdit from './pages/permission/Edit'

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

// import Home from '../fontend/pages/home/Home'
// import Contact from '../fontend/pages/contact/contact'
// import Shop from '../fontend/pages/shop/Shop'
import List1 from './pages/product/List1'

import BuyList from './pages/buy/List'
import BuyShow from './pages/buy/Show'
import BuyNew from './pages/stock/New2'
import BuyEdit from './pages/stock/Edit'
import BuyReturnList from './pages/buy/Return'
import BuyReturnNew from './pages/stock/ReturnNew'

import SystemList from './pages/system/List'
import SystemNew from './pages/system/New'
import SystemEdit from './pages/system/Edit'


// Reports 
import CustomerList from './reports/customer/List'
import CustomerDueList from './reports/customer/Due'
import CustomerOrder from './reports/customer/Order'

import Test from './pages/Sample/Test'
import Loading from './pages/extra/Loading'
import Dashboard from './pages/dashboard/Dashboard'
import Dashboard2 from './pages/dashboard/Dashboard2'

import InvestmentList from './pages/investment/List'
import InvestmentNew from './pages/investment/New'
import InvestmentEdit from './pages/investment/Edit'

import ExpenceList from './pages/expence/List'
import ExpenceNew from './pages/expence/New'
import ExpenceEdit from './pages/expence/Edit'


// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.authorization = token ? `Bearer ${token}` : ''
    return config
})

export const systemContext = React.createContext();


const App = () => {
  const [system, setSystem] = useState([])
  const [loading, setLoading] = useState(true)

  // const doesPasswordMatch = bcrypt.compareSync(yourPasswordFromLoginForm, yourHashedPassword)
  const roleId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).role_password : '$2a$12$.oH/mw3amRLHjRNCkHm8vuIUOwf4opWE7y5zM..FrJstS8KABZc1q';
  // const doesPasswordMatch = bcrypt.compareSync(1, roleId)
  // console.log(bcrypt.compareSync('1219',roleId))
  useEffect(() => {
    axios.get('/api/system').then( res => {
      setSystem(res.data.data)
      setLoading(false)
    })
  }, [])
  
 if(loading) {
   return <Loading />
 }
  return (
    <div>
        <Router>
            <Routes>

                {/* <Route path='/' element={<Login />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/forget-password' element={<ForgetPassword />}/> */}
        

                <Route path='/' element= {localStorage.getItem('auth_token') ? <Navigate to='/admin/dashboard' /> : <Auth />}>
                <Route path='/' element= {localStorage.getItem('auth_token') ? <Navigate to='/admin/dashboard' /> : <Login />} />
                  <Route path='/register'  element= {localStorage.getItem('auth_token') ? <Navigate to='/admin/dashboard' /> : <Register />}   />
                  <Route path='/login' element= {localStorage.getItem('auth_token') ? <Navigate to='/admin/dashboard' /> : <Login />} />
                  <Route path='/forget-password' element={<ForgetPassword/>} />
                </Route> 

                {/* <Route path='/' element={<Fontend/>}>
                  <Route path='/' element={<Home/>} />
                  <Route path='/shop' element={<Shop/>} />
                  <Route path='contact' element={<Contact/>} />
                </Route>  */}



                <Route path='admin/*' element={
                  localStorage.getItem('auth_token') ? 
                    <systemContext.Provider value={{system : system}}>
                    <Backend />
                    </systemContext.Provider>
                  : 
                  <Navigate to='/login' />
                }>
                  <Route path='*' element={<Error/>} />
                  <Route path='sample' element={<Sample/>} />
                  <Route path='dashboard' element={
                    bcrypt.compareSync('1219',roleId) ? <Dashboard/> : <Dashboard2/>
                  } />
                  <Route path='product' element={<ProductList/>} />
                  <Route path='product/new' element={<ProductNew/>} />
                  <Route path='product/:slug/edit' element={<ProductEdit/>} />
                  <Route name='stock' path='stock' element={<StockList/>} />
                  <Route path='stock/new' element={<StockNew/>} />
                  <Route path='stock/:slug/edit' element={<StockEdit/>} />
                  <Route path='stock/:slug' element={<StockShow/>} />
                  <Route path='alert-stock' element={<StockAlert/>} />

                  <Route path='category' element={<CategoryList/>} />
                  <Route path='category/new' element={<CategoryNew/>} />
                  <Route path='category/:slug/edit' element={<CategoryEdit/>} />

                  <Route path='system' element={<SystemList/>} />
                  <Route path='system/new' element={<SystemNew/>} />
                  <Route path='system/:slug/edit' element={<SystemEdit/>} />

                  <Route path='sub-category' element={<SubCategoryList/>} />
                  <Route path='sub-category/new' element={<SubCategoryNew/>} />
                  <Route path='sub-category/:slug/edit' element={<SubCategoryEdit/>} />
                  <Route path='module' element={<ModuleList/>} />
                  <Route path='module/new' element={<ModuleNew/>} />
                  <Route path='module/:slug/edit' element={<ModuleEdit/>} />

                  <Route path='sub-module' element={<SubmoduleList/>} />
                  <Route path='sub-module/new' element={<SubmoduleNew/>} />
                  <Route path='sub-module/:slug/edit' element={<SubmoduleEdit/>} />

                  <Route path='permission' element={<PermissionList/>} />
                  <Route path='permission/new' element={<PermissionNew/>} />
                  <Route path='permission/:uniId/edit' element={<PermissionEdit/>} />

                  <Route path='brand' element={<BrandList/>} />
                  <Route path='brand/new' element={<BrandNew/>} />
                  <Route path='brand/:slug/edit' element={<BrandEdit/>} />
                  <Route path='unit' element={<UnitList/>} />
                  <Route path='unit/new' element={<UnitNew/>} />
                  <Route path='unit/:slug/edit' element={<UnitEdit/>} />
                  <Route path='location' element={<LocationList/>} />
                  <Route path='location/new' element={<LocationNew/>} />
                  <Route path='location/:slug/edit' element={<LocationEdit/>} />
                  <Route path='supplier' element={<SupplierList/>} />
                  <Route path='supplier/new' element={<SupplierNew/>} />
                  <Route path='supplier/:sid/edit' element={<SupplierEdit/>} />
                  <Route path='test' element={<Test/>} />

                  <Route path='sell-product' element={<SellList/>} />
                  <Route path='sell-product/new' element={<Sell/>} />
                  <Route path='sell-product/:invoice/edit' element={<SellEdit/>} />
                  <Route path='sell-product/:invoice' element={<SellShow/>} />
                  <Route path='sell-product/return' element={<SellReturn/>} />
                  <Route path='sell-product/return/:invoice' element={<SellReturnProduct/>} />

                  <Route path='purcheased-product' element={<BuyList/>} />
                  <Route path='purcheased-product/new' element={<BuyNew/>} />
                  <Route path='purcheased-product/:invoice/edit' element={<BuyEdit/>} />
                  <Route path='purcheased-product/:invoice' element={<BuyShow/>} />
                  <Route path='purcheased-product/return' element={<BuyReturnList/>} />
                  <Route path='purcheased-product/return/new' element={<BuyReturnNew/>} />


                   {/* Reports */}
                  <Route path='customer-list' element={<CustomerList/>} />
                  <Route path='customer-order/:uid' element={<CustomerOrder/>} />
                  <Route path='due-customer-list' element={<CustomerDueList/>} />


                  <Route path='investment' element={<InvestmentList/>} />
                  <Route path='investment/new' element={<InvestmentNew/>} />
                  <Route path='investment/:trxId/edit' element={<InvestmentEdit/>} />

                  <Route path='expence' element={<ExpenceList/>} />
                  <Route path='expence/new' element={<ExpenceNew/>} />
                  <Route path='expence/:trxId/edit' element={<ExpenceEdit/>} />

                </Route> 
            </Routes>
        </Router>
    </div>

  )
}

export default App;