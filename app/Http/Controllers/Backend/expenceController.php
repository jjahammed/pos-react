<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Expence;
use App\Models\Activities;
use Validator;

class expenceController extends ApiController
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
            'data' => Expence::all()
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
            'amount' => 'required',
            'date' => 'required',
            'purpose' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $expence = Expence::create([
                'trxId' => uniqid(),
                'amount' => $request->amount,
                'payment_date' => $request->date,
                'purpose' => $request->purpose,
                'operate_by' => auth()->user()->uid,
            ]);
            Activities::act(Expence::orderBy('id','desc')->first()->id,'Expence','create a new Expence');
            return $this->success(200,null,$expence,'expence added successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($trxId)
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
        $expence = Expence::where('trxId',$trxId)->first();
        if($expence){
            return $this->success(200,null,$expence,'expence found');
        }else{
            return $this->error(500,'expence not found','expence not found');
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
        $expence = Expence::where('trxId',$trxId)->first();
        $validation = Validator::make($request->all(),[
            'amount' => 'required',
            'date' => 'required',
            'purpose' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $expence->amount = $request->amount;
            $expence->payment_date = $request->date;
            $expence->purpose = $request->purpose;
            $expence->operate_by = auth()->user()->uid;
            $expence->save();
            Activities::act($expence->id,'Expence','Modify expences');
            return $this->success(200,null,user,'admin stored successfully');
            return $this->success(200,null,$expence,'expence added successfully');
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
        $expence = Expence::where('trxId',$trxId)->first();
        if($expence->delete()){
            Activities::act($expence->id,'Expence','delete expences');
            return $this->success(200,null,$expence,'expence deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
