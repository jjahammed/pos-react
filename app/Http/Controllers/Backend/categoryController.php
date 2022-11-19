<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\Category;
use App\Models\Permission;
use Validator;

class categoryController extends ApiController
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
            'data' => Category::with('product')->get()
        ]);
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
            'name' => 'required | unique:categories',
            'image' => 'required | image',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'category_'.uniqid().'.jpg';
                $file->move('resources/backend/images/category/', $fileName);
            }
            $category = Category::create([
                'name' => $request->name,
                // 'image' => $request->image,
                'slug' => Str::slug($request->name),
                'image' => $request->hasFile('image') ? 'resources/backend/images/category/'.$fileName : 'not Found',
            ]);
            return $this->success(200,null,$category,'Category added successfully');
        }
    }

    public function edit($slug)
    {
        $category = Category::where('slug',$slug)->first();
        if($category){
            return $this->success(200,null,$category,'Category found');
        }else{
            return $this->error(500,'Category not found','Category not found');
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
        $permissions = Permission::all();
        foreach($permissions as $permission){
        if($permission->uniId === auth('sanctum')->user()->uid && $permission->slug === $id){
            return response()->json([
                'data' => $id
            ]);
        }
    }
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden',
                'data' => auth('sanctum')->user()->uid
            ]); 
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$slug)
    {
        $category = Category::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:categories,slug,'.$category->id,
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('images')){
                $file = $request->file('images');
                $fileName = 'category_'.uniqid().'.jpg';
                $file->move('resources/backend/images/category/', $fileName);
                if(File::exists($request->image)){
                    File::delete($request->image);
                }
            }
           
            $category->name = $request->name;
            $category->slug = Str::slug($request->name);
            $category->image = $request->hasFile('images') ? 'resources/backend/images/category/'.$fileName : $category->image;
            $category->save();
            return $this->success(200,null,$category,'Category Updated successfully');
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
        $category = Category::where('slug',$slug)->first();
        if($category->delete()){
            if(File::exists($category->image)){
                File::delete($category->image);
            }
            return $this->success(200,null,$category,'Category deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    // public function permission($slug){
    //     $permissions = Permission::all();
    //         foreach($permissions as $permission){
    //             if($permission->uniId == auth()->user()->uid && $permission->slug == $slug){

    //             }
    //         }
    // }
}
