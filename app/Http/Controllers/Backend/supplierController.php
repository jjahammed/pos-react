<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Supplier;
use Validator;

class supplierController extends ApiController
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
            'data' => Supplier::all()
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

            'sid' => 'required | unique:suppliers',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required | max:11 | min:11',        
            'contact_persion_phone' => 'max:11 | min:11',        
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'supplier_'.uniqid().'.jpg';
                $file->move('resources/backend/images/supplier/', $fileName);
            }
            $supplier = Supplier::create([
                'sid' => $request->sid,
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'address' => $request->address,
                'note' => $request->note,
                'phone' => $request->phone,
                'contact_person' => $request->contact_person,
                'contact_person_phone' => $request->contact_person_phone,
                'image' => $request->hasFile('image') ? 'resources/backend/images/supplier/'.$fileName : 'not Found',
            ]);
            return $this->success(200,null,$supplier,'Supplier added successfully');
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
    public function edit($sid)
    {
        $supplier = Supplier::where('sid',$sid)->first();
        if($supplier){
            return $this->success(200,null,$supplier,'Supplier found');
        }else{
            return $this->error(500,'Supplier not found','Supplier not found');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $sid)
    {
        $supplier = Supplier::where('sid',$sid)->first();
        $validation = Validator::make($request->all(),[
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required | max:11 | min:11',        
            'contact_persion_phone' => 'max:11 | min:11',   
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('images')){
                $file = $request->file('images');
                $fileName = 'supplier_'.uniqid().'.jpg';
                $file->move('resources/backend/images/supplier/', $fileName);
                if(File::exists($request->image)){
                    File::delete($request->image);
                }
            }
           
            $supplier->name = $request->name;
            $supplier->slug = Str::slug($request->name);
            $supplier->phone = $request->phone;
            $supplier->address = $request->address;
            $supplier->note = $request->note;
            $supplier->contact_person = $request->contact_person;
            $supplier->contact_person_phone = $request->contact_person_phone;
            $supplier->image = $request->hasFile('images') ? 'resources/backend/images/supplier/'.$fileName : $supplier->image;
            $supplier->save();
            return $this->success(200,null,$supplier,'Supplier Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($sid)
    {
        
        $supplier = Supplier::where('sid',$sid)->first();
        if($supplier->delete()){
            if(File::exists($supplier->image)){
                File::delete($supplier->image);
            }
            return $this->success(200,null,$supplier,'Supplier deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
