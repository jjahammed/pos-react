<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\categoryController;
use App\Http\Controllers\Backend\subCategoryController;
use App\Http\Controllers\Backend\brandController;
use App\Http\Controllers\Backend\unitController;
use App\Http\Controllers\Backend\locationController;
use App\Http\Controllers\Backend\productController;
use App\Http\Controllers\Backend\informationController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('category',categoryController::Class);
Route::resource('sub-category',subCategoryController::Class);
Route::resource('brand',brandController::Class);
Route::resource('unit',unitController::Class);
Route::resource('location',locationController::Class);
Route::resource('product',productController::Class);

// extra 
Route::get('subCategory/{id}',[informationController::Class,'getSubCategory']);

