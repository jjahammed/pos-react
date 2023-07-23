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
       return view('test');
    }
}
