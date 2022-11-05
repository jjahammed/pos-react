<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\informationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('test',[informationController::Class,'test']);
Route::view('{path}', 'welcome')->where('path', '([A-z\d\-\/_.]+)?');
