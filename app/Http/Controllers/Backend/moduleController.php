<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\Module;
use Validator;

class moduleController extends ApiController
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
            'data' => Module::with('submodule')->get()
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
            'name' => 'required | unique:modules',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $module = Module::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
            ]);
            return $this->success(200,null,$module,'Module added successfully');
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
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $module = Module::where('slug',$slug)->first();
        if($module){
            return $this->success(200,null,$module,'Module found');
        }else{
            return $this->error(500,'Module not found','Module not found');
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
        $module= Module::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:modules,slug,'.$module->id,
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $module->name = $request->name;
            $module->slug = Str::slug($request->name);
            $module->save();
            return $this->success(200,null,$module,'Module Updated successfully');
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
        $module= Module::where('slug',$slug)->first();
        if($module->delete()){
            return $this->success(200,null,$module,'Module deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
