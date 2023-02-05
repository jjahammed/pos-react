<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Sell;

class customerController extends Controller
{
    public function customer_list(){
        $customer = User::where('role_id',3)->get();
        return response()->json([
            'status' => 200,
            'data' => $customer,
            'message' => 'Customer retrive successfully'
        ]);
    }
    public function due_customer_list(){
        $customer = User::where('role_id',3)->where('due','>',0)->get();
        return response()->json([
            'status' => 200,
            'data' => $customer,
            'message' => 'Customer retrive successfully'
        ]);
    }
    public function customer_order($uid){
        $order = Sell::with('user')->where('uid',$uid)->get();
        return response()->json([
            'status' => 200,
            'data' => $order,
            'message' => 'order retrive successfully'
        ]);
    }
}
