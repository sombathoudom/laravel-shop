<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', [HomeController::class, 'index']);

Route::get('/product/{product:slug}', [HomeController::class, 'show']);

Route::get('/checkout', function () {
    return inertia('Checkout');
});
