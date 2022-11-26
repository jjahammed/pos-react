<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\Submodule;
use Validator;

class submoduleController extends ApiController
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
            'data' => Submodule::with('module')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $path = '/admin/joney';
        return preg_replace("/[\s-]+/", "-", $path);
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
            'name' => 'required | unique:submodules',
            'module' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            // return response()->json([
            //     'status' => 200,
            //     'data' => preg_replace('/[\W\s\/]+/', '-', $request->name)
            // ]);
            $string = '/'.$request->name;
            $subSubmodule = Submodule::create([
                'name' => $request->name,
                'slug' => preg_replace('/[\\/]+/', '-', $string),
                'module_id' => $request->module,
            ]);
            return $this->success(200,null,$subSubmodule,'Submodule added successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $subSubmodule = Submodule::where('slug',$slug)->first();
        if($subSubmodule){
            return $this->success(200,null,$subSubmodule,'Submodule found');
        }else{
            return $this->error(500,'Submodule not found','Submodule not found');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $subSubmodule= Submodule::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:Submodules,slug,'.$subSubmodule->id,
            'module' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $string = '/'.$request->name;
            $subSubmodule->name = $request->name;
            $subSubmodule->slug = preg_replace('/[\\/]+/', '-', $string);
            $subSubmodule->module_id = $request->module;
            $subSubmodule->save();
            return $this->success(200,null,$subSubmodule,'Submodule Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $subSubmodule= Submodule::where('slug',$slug)->first();
        if($subSubmodule->delete()){
            return $this->success(200,null,$subSubmodule,'Submodule deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
