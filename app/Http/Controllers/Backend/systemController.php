<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;
use App\Models\System;
use Validator;

class systemController extends ApiController
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
            'data' => System::all()
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
        // return response()->json([
        //     'status' => 200,
        //     'data' => $request->all()
        // ]);
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:systems',
            // 'value' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'system_'.uniqid().'.jpg';
                $file->move('resources/backend/images/system/', $fileName);
            }
            $system = System::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'value' => $request->hasFile('image') ? 'resources/backend/images/system/'.$fileName : $request->value,
                'type' => $request->hasFile('image') ? 2 : 1,
            ]);
            return $this->success(200,null,$system,'system added successfully');
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
        $system = System::where('slug',$slug)->first();
        if($system){
            return $this->success(200,null,$system,'system found');
        }else{
            return $this->error(500,'system not found','system not found');
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
        $system = System::where('slug',$slug)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required | unique:systems,slug,'.$system->id,
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('images')){
                $file = $request->file('images');
                $fileName = 'system_'.uniqid().'.jpg';
                $file->move('resources/backend/images/system/', $fileName);
                if(File::exists($request->image)){
                    File::delete($request->image);
                }
            }
            $system->value = $request->hasFile('images') ? 'resources/backend/images/system/'.$fileName : $request->value;
            $system->save();
            return $this->success(200,null,$system,'system Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
