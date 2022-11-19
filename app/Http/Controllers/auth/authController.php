<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Permission;

class authController extends ApiController
// 'password' => bcrypt($request->password),
{
    public function register(Request $request){

        $validation = Validator::make($request->all(),[
            'name' => 'required|max:191',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|max:11|min:11|unique:users,phone',
            // 'password' => 'required |min:6| confirmed'
            'password' => 'required|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*#?&]/|confirmed'
        ],[
            'password.regex' => 'password should contain At least One Capital letter,One small letter,One number and One character. '
        ]);

        if($validation->fails()){
            return response()->json([
                'status' => 500,
                'error_log' => $validation->messages()
            ]);
        }else{
            $user = User::create([
                'uid' => $request->uid,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
            ]);
            $token =  $user->createToken($user->email.'_token')->plainTextToken;

            return response()->json([
                'status' =>200,
                'user' => $user,
                'token' => $token,
                'message' => 'User Registration was successfully'
            ]);
        }
        
    }


    public function login(Request $request){
        $validation = Validator::make($request->all(),[
            'name' => 'required',
            'password' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
           
            $user = User::where(function($result) use ($request){
                $result->where('email',$request->name)
                        ->orWhere('phone',$request->name);
            })->first();

                if (! $user || ! Hash::check($request->password, $user->password)) {
                    return response()->json([
                        'status' => 401,
                        'message' => 'Credential not found'
                    ]);
                }else{
                    if($user->role_id == 1){
                        $role = 1;
                        $token =  $user->createToken($user->uid.'_token',['server:admin'])->plainTextToken;
                    }else{
                        $role = 2;
                        $token =  $user->createToken($user->uid.'_token',['server:user'])->plainTextToken;
                    }
                    return response()->json([
                        'status' =>200,
                        'data' => $user,
                        'token' => $token,
                        'message' => 'User Login successfully',
                        'role' => $role
                    ]);
                }
        }
    }
    public function login2(Request $request){

        $validation = Validator::make($request->all(),[
            'name' => 'required',
            'password' => 'required',
        ]);


        if($validation->fails()){
            return response()->json([
                'error_log' => $validation->messages(),
            ]);
        }else{

            // $user = User::where('email', $request->email)->first();

            $user = User::where(function($result) use ($request){
                $result->where('email',$request->name)
                        ->orWhere('phone',$request->name);
            })->first();

                if (! $user || ! Hash::check($request->password, $user->password)) {
                    return response()->json([
                        'status' => 401,
                        'message' => 'Credential not found'
                    ]);
                }else{
                    if($user->role_id == 1){
                        $role = 1;
                        $token =  $user->createToken($user->uid.'_token',['server:admin'])->plainTextToken;
                    }else{
                        $role = 2;
                        $token =  $user->createToken($user->uid.'_token',['server:user'])->plainTextToken;
                    }
                    return response()->json([
                        'status' =>200,
                        'user' => $user,
                        'token' => $token,
                        'message' => 'User Login successfully',
                        'role' => $role
                    ]);
                }

            
        }
        
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logout successfully'
        ]);
    }

    public function checkingAuthenticate(){
    //     $permissions = Permission::all();
    //     foreach($permissions as $permission){
    //     if($permission->uniId == auth()->user()->uid && $permission->slug == '$path'){
              
    //     }
    // }
    //         return response()->json([
    //             'status' => 403,
    //             'message' => 'Forbidden',
    //             'data' => auth()->user()->uid
    //         ]); 
   
    return response()->json([
        'status' => 200,
        'message' => 'Authenticate successfully',
        'data' => auth()->user()->uid
    ]);  
    }

    public function checkingUserAuthenticate(){
        return response()->json([
            'status' => 200,
            'message' => 'Authenticate successfully'
        ]);
    }
}
