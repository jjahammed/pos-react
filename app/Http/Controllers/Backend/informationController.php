<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;
use App\Models\Product;
use App\Models\Stock;

class informationController extends Controller
{
    public function getSubCategory($id){
        $subCategory = Subcategory::where('category_id',$id)->get();
        return response()->json([
            'status' => 200,
            'data' => $subCategory
        ]);
    }

    public function test(){
        // $url = '/admin/product/:slug/add';
        // return $message = preg_replace('/[\\/]+/', '-', $url);

        // $products = Product::all();
        // foreach($products as $product){
        //     $stock = new Stock();
        //     $stock->pid=$product->pid;
        //     $stock->product_id=$product->id;
        //     $stock->product_title=$product->title;
        //     $stock->quantity = 0;
        //     $stock->save();
        // }

        $val = -25; 
        return abs($val);
        
        
    }
}
