<?php

namespace App\Http\Controllers\Backend;

use App\Models\{User,Activities};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\ApiController;
use Validator;

class adminController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin = User::where('role_id',1)->get();
        return $this->success(200,null,$admin,'admin found successfully');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $activities = Activities::with('user')->get();
        return $this->success(200,null,$activities,'data found successfully');
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
            'role' => 'required',
            'uid' => 'required|unique:users,uid',
            'name' => 'required|max:191',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|max:11|min:11|unique:users,phone',
            'password' => 'required |min:6| confirmed'
            // 'password' => 'required|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*#?&]/|confirmed'
        ],[
            'uid.required' => 'Admin id is a mandatory field'
            // 'password.regex' => 'password should contain At least One Capital letter,One small letter,One number and One character. '
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'something went wrong');
        }else{
            $user = User::create([
                'role_id' => 1,
                'role_digit' => $request->role,
                'uid' => $request->uid,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'address' => $request->address,
                'operate_by' => auth()->user()->uid,
                'role_password' => Hash::make($request->role),
                'password' => Hash::make($request->password),
            ]);
            Activities::act(User::orderBy('id','desc')->first()->id,'User','create a new admin');
            return $this->success(200,null,$user,'admin stored successfully');
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
    public function edit($id)
    {
        $user = User::where('uid',$id)->first();
        if($user){
            return $this->success(200,null,$user,'admin stored successfully');
        }else{
            return $this->error(200,'admin not found','admin not found');
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
        $user = User::where('uid',$id)->first();
        $validation = Validator::make($request->all(),[
            'role' => 'required',
            'uid' => 'required|unique:users,uid,'.$user->id,
            'name' => 'required|max:191',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'phone' => 'required|max:11|min:11|unique:users,phone,'.$user->id,
        ],[
            'uid.required' => 'Admin id is a mandatory field'
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'something went wrong');
        }else{
            $user->role_digit = $request->role;
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->address = $request->address;
            $user->operate_by = auth()->user()->uid;
            $user->role_password = Hash::make($request->role);
            $user->save();
            Activities::act($user->id,'User','Update admin Info');
            return $this->success(200,null,$user,'admin stored successfully');
        }

    }

    public function changePassword(Request $request){
        $validation = Validator::make($request->all(),[
            'old_password' => 'required | min:6',
            'password' => 'required | min:6 | confirmed',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $user = User::where('uid',auth()->user()->uid)->first();
                if (! $user || ! Hash::check($request->old_password, $user->password)) {
                    return $this->error(403,$validation->messages(),'Old password Not Correct');
                }else{
                    $user->password = Hash::make($request->password);
                    $user->operate_by = auth()->user()->uid;
                    $user->save();
                    Activities::act($user->id,'User','Update admin password');
                    return $this->success(200,null,$user,'admin Password Change successfully');
                }
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
        $user = User::where('uid',$id)->first();
            if($user->delete()){
                return $this->success(200,null,$user,'admin deleted successfully');
            }else{
                return $this->error(200,'admin not deleted','admin not deleted');
            }
    }
}
