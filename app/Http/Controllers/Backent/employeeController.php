<?php

namespace App\Http\Controllers\Backent;

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Employee;
use Validator;


class employeeController extends ApiController
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
            'data' => Employee::all()
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
            'uid' => 'required | unique:employees',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required | max:11 | min:11 | unique:employees',        
            'contact_persion_phone' => 'max:11 | min:11',        
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'employee_'.uniqid().'.jpg';
                $file->move('resources/backend/images/employee/', $fileName);
            }
            $employee = Employee::create([
                'uid' => $request->uid,
                'joining_date' => $request->joining_date,
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'address' => $request->address,
                'note' => $request->note,
                'phone' => $request->phone,
                'email' => $request->email,
                'nid' => $request->nid,
                'contact_person' => $request->contact_person,
                'contact_person_phone' => $request->contact_person_phone,
                'image' => $request->hasFile('image') ? 'resources/backend/images/employee/'.$fileName : 'resources/backend/images/employee/profile.png',
            ]);
            return $this->success(200,null,$employee,'Employee added successfully');
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
    public function edit($uid)
    {
        $employee = Employee::where('uid',$uid)->first();
        if($employee){
            return $this->success(200,null,$employee,'employee found');
        }else{
            return $this->error(500,'employee not found','employee not found');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uid)
    {
        $employee = employee::where('uid',$uid)->first();

        $validation = Validator::make($request->all(),[
            'uid' => 'required | unique:employees,uid,'.$employee->id,
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required | max:11 | min:11 | unique:employees,uid,'.$employee->id,     
            'contact_persion_phone' => 'max:11 | min:11',        
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'employee_'.uniqid().'.jpg';
                $file->move('resources/backend/images/employee/', $fileName);
                if(File::exists($employee->image)){
                    File::delete($employee->image);
                }
            }
            $employee->name = $request->name;
            $employee->slug = Str::slug($request->name);
            $employee->phone = $request->phone;
            $employee->joining_date = $request->joining_date;
            $employee->email = $request->email;
            $employee->nid = $request->nid;
            $employee->address = $request->address;
            $employee->note = $request->note;
            $employee->contact_person = $request->contact_person;
            $employee->contact_person_phone = $request->contact_person_phone;
            $employee->image = $request->hasFile('image') ? 'resources/backend/images/employee/'.$fileName : $employee->image;
            $employee->save();
            return $this->success(200,null,$employee,'employee Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($uid)
    {
        $employee = employee::where('uid',$uid)->first();
        if($employee->delete()){
            if(File::exists($employee->image)){
                File::delete($employee->image);
            }
            return $this->success(200,null,$employee,'employee deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
