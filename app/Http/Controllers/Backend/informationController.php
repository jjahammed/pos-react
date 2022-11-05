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
        $url = 'https://pay.google.com/about/static/images/social/og_image.jpg';
        $info = pathinfo($url);
        $contents = file_get_contents($url);
        $file = resource_path('/js/components/backend/images/category/') . $info['basename'];
        file_put_contents($file, $contents);
        // $uploaded_file = new UploadedFile($file, $info['basename']);
        // dd($uploaded_file);
    }
}
