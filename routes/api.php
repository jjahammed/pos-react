<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth\authController;

use App\Http\Controllers\Backend\buyController;
use App\Http\Controllers\Backend\sellController;
use App\Http\Controllers\Backend\unitController;
use App\Http\Controllers\Backend\userController;
use App\Http\Controllers\Backend\adminController;
use App\Http\Controllers\Backend\brandController;
use App\Http\Controllers\Backend\extraController;
use App\Http\Controllers\Backend\stockController;
use App\Http\Controllers\Backend\moduleController;
use App\Http\Controllers\Backend\systemController;
use App\Http\Controllers\Backend\expenceController;
use App\Http\Controllers\Backend\productController;
use App\Http\Controllers\Backent\paymentController;
use App\Http\Controllers\Backend\categoryController;
use App\Http\Controllers\Backend\customerController;
use App\Http\Controllers\Backend\locationController;
use App\Http\Controllers\Backend\supplierController;
use App\Http\Controllers\Backent\employeeController;
use App\Http\Controllers\Backend\dashboardController;
use App\Http\Controllers\Backend\subModuleController;
use App\Http\Controllers\Backend\investmentController;
use App\Http\Controllers\Backend\permissionController;
use App\Http\Controllers\Backend\informationController;
use App\Http\Controllers\Backend\subCategoryController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register',[authController::Class, 'register']);
Route::post('login',[authController::Class,'login']);
Route::resource('system',systemController::Class);




Route::middleware('auth:sanctum','admin')->group(function () {
    Route::resource('category',categoryController::Class);
    Route::get('checkingAuthenticate',[authController::Class,'checkingAuthenticate']);
    Route::resource('admin',adminController::Class);
    Route::resource('sub-category',subCategoryController::Class);
    Route::resource('module',moduleController::Class);
    Route::resource('sub-module',subModuleController::Class);
    Route::resource('permission',permissionController::Class);
    Route::resource('brand',brandController::Class);
    Route::resource('unit',unitController::Class);
    Route::resource('location',locationController::Class);
    Route::resource('product',productController::Class);
    Route::resource('payment',paymentController::Class);
    Route::put('change-password',[adminController::Class,'changePassword']);
    Route::get('user-payment/{trxId}',[paymentController::Class,'userPayment']);
    Route::get('payment/{trxId}/{invoice}/edit',[paymentController::Class,'editPayment']);


    Route::get('saleProduct',[productController::Class,'saleProduct']);
    Route::get('product/category/{slug}',[productController::Class,'category']);
    Route::get('product/sub-category/{slug}',[productController::Class,'subCategory']);
    Route::get('product/brand/{slug}',[productController::Class,'brand']);
    Route::get('saleProduct',[productController::Class,'saleProduct']);
    Route::get('disable-product/{slug}',[productController::Class,'disable']);
    Route::get('enable-product/{slug}',[productController::Class,'enable']);
    Route::resource('stock',stockController::Class);
    Route::resource('supplier',supplierController::Class);
    Route::resource('user',userController::Class);
    Route::resource('sell-product',sellController::Class);
    Route::resource('purcheased-product',buyController::Class);
    Route::resource('investment',investmentController::Class);
    Route::resource('employee',employeeController::Class);
    Route::resource('expence',expenceController::Class);
    Route::get('information/{info}',[extraController::Class,'show']);
    Route::get('information/{info}/edit',[extraController::Class,'edit']);
    Route::put('information/{info}',[extraController::Class,'update']);
    
    //dashboard route 
    Route::get('/headingPart',[dashboardController::Class,'headingPart']);

    //Reports 
    Route::get('customer-list',[customerController::Class,'customer_list']);
    Route::get('due-customer-list',[customerController::Class,'due_customer_list']);
    

    // extra 
    Route::get('subCategory/{id}',[informationController::Class,'getSubCategory']);
    Route::get('sell-product-return/{invoice}',[sellController::Class,'return']);
    Route::post('sell-product-return',[sellController::Class,'returnStore']);
});

Route::get('customer-order/{uid}',[customerController::Class,'customer_order']);

Route::get('stock-alert',[stockController::Class,'stock_alert']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout',[authController::Class,'logout']);
});



