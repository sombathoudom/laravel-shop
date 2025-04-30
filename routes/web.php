<?php

use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', function () {

    sleep(1);
    return inertia('Home');
});

Route::get('/product', function () {
    return inertia('ProductDetail');
});

Route::get('/checkout', function () {
    return inertia('Checkout');
});
