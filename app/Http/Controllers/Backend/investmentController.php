<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Investment;
use Validator;

class investmentController extends ApiController
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
            'data' => Investment::all()
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
        // return response()->json([
        //     'status' => 200,
        //     'data' => $request->all()
        // ]);
        $validation = Validator::make($request->all(),[
            'amount' => 'required',
            'date' => 'required',
            'purpose' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $investment = Investment::create([
                'trxId' => uniqid(),
                'amount' => $request->amount,
                'payment_date' => $request->date,
                'purpose' => $request->purpose,
            ]);
            return $this->success(200,null,$investment,'investment added successfully');
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
    public function edit($trxId)
    {
        $investment = Investment::where('trxId',$trxId)->first();
        if($investment){
            return $this->success(200,null,$investment,'investment found');
        }else{
            return $this->error(500,'investment not found','investment not found');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $trxId)
    {
        // return response()->json([
        //         'status' => 200,
        //         'data' => $request->all()
        //     ]);
        $investment = Investment::where('trxId',$trxId)->first();
        $validation = Validator::make($request->all(),[
            'amount' => 'required',
            'date' => 'required',
            'purpose' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $investment->amount = $request->amount;
            $investment->payment_date = $request->date;
            $investment->purpose = $request->purpose;
            $investment->save();
            return $this->success(200,null,$investment,'investment added successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($trxId)
    {
        $investment = Investment::where('trxId',$trxId)->first();
        if($investment->delete()){
            return $this->success(200,null,$investment,'investment deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
