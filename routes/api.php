<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth\authController;

use App\Http\Controllers\Backend\buyController;
use App\Http\Controllers\Backend\sellController;
use App\Http\Controllers\Backend\unitController;
use App\Http\Controllers\Backend\userController;
use App\Http\Controllers\Backend\brandController;
use App\Http\Controllers\Backend\stockController;
use App\Http\Controllers\Backend\moduleController;
use App\Http\Controllers\Backend\systemController;
use App\Http\Controllers\Backend\productController;
use App\Http\Controllers\Backend\categoryController;
use App\Http\Controllers\Backend\locationController;
use App\Http\Controllers\Backend\supplierController;
use App\Http\Controllers\Backend\dashboardController;
use App\Http\Controllers\Backend\subModuleController;
use App\Http\Controllers\Backend\permissionController;
use App\Http\Controllers\Backend\informationController;
use App\Http\Controllers\Backend\subCategoryController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register',[authController::Class, 'register']);
Route::post('login',[authController::Class,'login']);
Route::resource('system',systemController::Class);
Route::get('/headingPart',[dashboardController::Class,'headingPart']);


Route::middleware('auth:sanctum','admin')->group(function () {
    Route::get('checkingAuthenticate',[authController::Class,'checkingAuthenticate']);
    Route::resource('category',categoryController::Class);
    Route::resource('sub-category',subCategoryController::Class);
    Route::resource('module',moduleController::Class);
    Route::resource('sub-module',subModuleController::Class);
    Route::resource('permission',permissionController::Class);
    Route::resource('brand',brandController::Class);
    Route::resource('unit',unitController::Class);
    Route::resource('location',locationController::Class);
    Route::resource('product',productController::Class);
    Route::get('saleProduct',[productController::Class,'saleProduct']);
    Route::resource('stock',stockController::Class);
    Route::resource('supplier',supplierController::Class);
    Route::resource('user',userController::Class);
    Route::resource('sell-product',sellController::Class);
    Route::resource('purcheased-product',buyController::Class);

    //dashboard route 

    // extra 
    Route::get('subCategory/{id}',[informationController::Class,'getSubCategory']);
    Route::get('sell-product-return/{invoice}',[sellController::Class,'return']);
    Route::post('sell-product-return',[sellController::Class,'returnStore']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout',[authController::Class,'logout']);
});



