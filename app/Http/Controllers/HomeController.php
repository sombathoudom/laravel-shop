<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $data = Category::has("products")->with('products')->groupBy('id')->get();
        return inertia('Home', [
            'data' => $data
        ]);
    }

    public function show(Product $product)
    {
        // Get the product with its category
        $product->load('category');

        // Get related products from the same category, excluding current product
        $relatedProducts = Product::where('category_id', $product->category_id)
            ->slug($product->slug, '!=')
            ->take(5)
            ->get();

        return inertia('ProductDetail', [
            'product' => $product,
            'relatedProducts' => $relatedProducts
        ]);
    }
}
