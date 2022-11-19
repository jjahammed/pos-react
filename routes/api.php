<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth\authController;

use App\Http\Controllers\Backend\categoryController;
use App\Http\Controllers\Backend\subCategoryController;
use App\Http\Controllers\Backend\brandController;
use App\Http\Controllers\Backend\unitController;
use App\Http\Controllers\Backend\locationController;
use App\Http\Controllers\Backend\productController;
use App\Http\Controllers\Backend\stockController;
use App\Http\Controllers\Backend\supplierController;
use App\Http\Controllers\Backend\informationController;
use App\Http\Controllers\Backend\sellController;
use App\Http\Controllers\Backend\userController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register',[authController::Class, 'register']);
Route::post('login',[authController::Class,'login']);
Route::resource('category',categoryController::Class);

Route::middleware('auth:sanctum','admin')->group(function () {
    Route::get('checkingAuthenticate',[authController::Class,'checkingAuthenticate']);
    Route::resource('sub-category',subCategoryController::Class);
    Route::resource('brand',brandController::Class);
    Route::resource('unit',unitController::Class);
    Route::resource('location',locationController::Class);
    Route::resource('product',productController::Class);
    Route::resource('stock',stockController::Class);
    Route::resource('supplier',supplierController::Class);
    Route::resource('sell-product',sellController::Class);
    Route::resource('user',userController::Class);

    // extra 
    Route::get('subCategory/{id}',[informationController::Class,'getSubCategory']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout',[authController::Class,'logout']);
});



