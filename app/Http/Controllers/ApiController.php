<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function success($status=200,$token=null,$data,$msg){
        return response()->json([
            'status' => $status,
            'token' => $token,
            'data' => $data,
            'message' => $msg
        ]);
    }

    public function error($status=404,$error,$msg){
        return response()->json([
            'status' => $status,
            'error' => $error,
            'message' => $msg
        ]);
    }
}
