<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\Brand;
use Validator;

class brandController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => 200,
            'data' => Brand::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:brands',
            'image' => 'required | image',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'brand_'.uniqid().'.jpg';
                $file->move('resources/backend/images/brand/', $fileName);
            }
            $brand = Brand::create([
                'name' => $request->name,
                // 'image' => $request->image,
                'slug' => Str::slug($request->name),
                'image' => $request->hasFile('image') ? 'resources/backend/images/brand/'.$fileName : 'not Found',
            ]);
            return $this->success(200,null,$brand,'brand added successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $brand = Brand::where('slug',$slug)->first();
        if($brand){
            return $this->success(200,null,$brand,'brand found');
        }else{
            return $this->error(500,'brand not found','brand not found');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $brand = Brand::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:brands,slug,'.$brand->id,
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('images')){
                $file = $request->file('images');
                $fileName = 'brand_'.uniqid().'.jpg';
                $file->move('resources/backend/images/brand/', $fileName);
                if(File::exists($request->image)){
                    File::delete($request->image);
                }
            }
           
            $brand->name = $request->name;
            $brand->slug = Str::slug($request->name);
            $brand->image = $request->hasFile('images') ? 'resources/backend/images/brand/'.$fileName : $brand->image;
            $brand->save();
            return $this->success(200,null,$brand,'brand Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $brand = Brand::where('slug',$slug)->first();
        if($brand->delete()){
            if(File::exists($brand->image)){
                File::delete($brand->image);
            }
            return $this->success(200,null,$brand,'brand deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
