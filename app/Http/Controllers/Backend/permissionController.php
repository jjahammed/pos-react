<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Permission;
use Validator;

class permissionController extends ApiController
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
            'data' => Permission::with('submodule')->get()
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
            'uid' => 'required | unique:permissions,uniId',
        ],[
            'uid.required' => 'you have to choose One of User',
            'uid.unique' => 'permission already been added for This User. You have to go Edit Option to update',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $permission = new Permission();
            $permission->uniId = $request->uid;
            $permission->route = $request->permission;
            $permission->value = $request->permission;
            $permission->save();
            return $this->success(200,null,$permission,'permission added successfully');
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
        $permission = Permission::where('uniId',auth('sanctum')->user()->uid)->first();
        if($permission){
            return $this->success(200,null,$permission,'permission found successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return response()->json([
        //     'status' => 200,
        //     'data' => $id,
        // ]);
        $permission = Permission::where('uniId',$id)->first();
        if($permission){
            return $this->success(200,null,$permission,'permission found successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
