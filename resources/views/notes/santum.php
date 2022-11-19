<?php

1. install composer require laravel/sanctum
2. php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
3. php artisan migrate
4. go to 
        -> app/Http/Kernel.php 
        -> api[] 
        -> and comment out \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
5. go to api.php
                ->for admin
                Route::middleware('auth:sanctum','admin')->group(function () {
                        Route::resource('product',productController::Class);
                        ........
                        ........
                    });
            -> For Logout
                Route::middleware('auth:sanctum')->group(function () {
                    Route::post('logout',[authController::Class,'logout']);
                });