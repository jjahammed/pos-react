<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

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
        $url = '/admin/product/:slug/add';
        return $message = preg_replace('/[\\/]+/', '-', $url);

        
    }
}
