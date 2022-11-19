<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\Category;
use App\Models\Subcategory;
use Validator;

class subCategoryController extends ApiController
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
            'data' => Subcategory::with('product')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'category_id' => 'required',
            'name' => 'required | unique:subcategories',
            'image' => 'required | image',
        ],[
            'category_id.required' => 'Category field is required'
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'category_'.uniqid().'.jpg';
                $file->move('resources/backend/images/category/', $fileName);
            }
            $subcategory = Subcategory::create([
                'category_id' => $request->category_id,
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'image' => $request->hasFile('image') ? 'resources/backend/images/category/'.$fileName : 'not Found',
            ]);
            return $this->success(200,null,$subcategory,'Sub Category added successfully');
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
        $subcategory = Subcategory::where('slug',$slug)->first();
        if($subcategory){
            return $this->success(200,null,$subcategory,'sub category found');
        }else{
            return $this->error(500,'sub category not found','sub category not found');
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
        $subcategory = Subcategory::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:subcategories,slug,'.$subcategory->id,
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
           
            $subcategory->category_id = $request->category_id;
            $subcategory->name = $request->name;
            $subcategory->slug = Str::slug($request->name);
            $subcategory->image = $request->hasFile('images') ? 'resources/backend/images/category/'.$fileName : $subcategory->image;
            $subcategory->save();
            return $this->success(200,null,$subcategory,'Sub Category Updated successfully');
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
        $subcategory = Subcategory::where('slug',$slug)->first();
        if($subcategory->delete()){
            if(File::exists($subcategory->image)){
                File::delete($subcategory->image);
            }
            return $this->success(200,null,$subcategory,'Sub Category deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
