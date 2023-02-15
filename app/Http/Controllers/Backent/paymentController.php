<?php

namespace App\Http\Controllers\Backent;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Payment;
use App\Models\User;
use App\Models\Supplier;
use App\Models\Employee;
use Validator;

class paymentController extends ApiController
{
    
    public function index()
    {
        //
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
        // return $this->success(200,null,$request->all(),'joney');

        $validation = Validator::make($request->all(),[
            'invoice' => 'required | unique:payments',
            'uid' => 'required',
            'payment_date' => 'required',
            'amount' => 'required',
            'payment_type' => 'required',        
            'note' => 'required',      
            'bank_name' => 'required_if:payment_type,2',  
            'acc_name' => 'required_if:payment_type,2',  
            'acc_number' => 'required_if:payment_type,2',  
            'mob_type' => 'required_if:payment_type,3',  
            'mob_number' => 'required_if:payment_type,3',  
            'mob_trxId' => 'required_if:payment_type,3',  
            'cheque_number' => 'required_if:payment_type,4',  
            'cheque_date' => 'required_if:payment_type,4',  
            'month' => 'required_if:type,employee-salary',  
            'year' => 'required_if:type,employee-salary',  
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->type == 'customer-payment'){ $type = 1;}elseif($request->type == 'supplier-payment'){$type = 2;}elseif($request->type == 'employee-salary'){$type = 3;}elseif($request->type = 'investment-withdraw'){$type = 4;}else{$type = 0;}

            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'payment_'.uniqid().'.jpg';
                $file->move('resources/backend/images/payment/', $fileName);
            }
            $payment = new Payment();
            $payment->type = $type;
            $payment->slug = $request->type;
            $payment->invoice = $request->invoice;
            $payment->uid = $request->uid;
            $payment->payment_date = $request->payment_date;
            $payment->amount = $request->amount;
            $payment->payment_type = $request->payment_type;
            $payment->month = $request->month;
            $payment->year = $request->year;
            if($request->payment_type == 2){
            $payment->bank_name = $request->bank_name;
            $payment->acc_name = $request->acc_name;
            $payment->acc_number = $request->acc_number;
            }
            if($request->payment_type == 3){
            $payment->mob_type = $request->mob_type;
            $payment->mob_number = $request->mob_number;
            $payment->mob_trxId = $request->mob_trxId;
            }
            if($request->payment_type == 4){
            $payment->cheque_number = $request->cheque_number;
            $payment->cheque_date = $request->cheque_date;
            }
            $payment->note = $request->note;
            $payment->image = $request->hasFile('image') ? 'resources/backend/images/payment/'.$fileName : 'resources/backend/images/payment/invoice.png';
            $payment->save();
        }

        if($request->type == 'customer-payment'){
            $customer = User::where('uid',$request->uid)->first();
            $customer->paid = $customer->paid + $request->amount;
            $customer->due = $customer->due - $request->amount;
            $customer->save();
        }
        if($request->type == 'supplier-payment'){
            $supplier = Supplier::where('sid',$request->uid)->first();
            $supplier->paid = $supplier->paid + $request->amount;
            $supplier->due = $supplier->due - $request->amount;
            $supplier->save();
        }

        return $this->success(200,null,$payment,'payment added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($id == 'customer-payment'){ $type = 1;}elseif($id == 'supplier-payment'){$type = 2;}elseif($id == 'employee-salary'){$type = 3;}elseif($id = 'investment-withdraw'){$type = 4;}else{$type = 0;}
        $payment = Payment::with('customer','supplier','employee')->where('type',$type)->get();
        return $this->success(200,null,$payment,'data found successfully');
    }

    public function userPayment($id)
    {
        if($id == 'customer-payment'){ 
            $user = User::where('role_id',3)->get();
        }elseif($id == 'supplier-payment'){
            $user = Supplier::all();
        }elseif($id == 'employee-salary'){
            $user = Employee::where('status',1)->get();
        }elseif($id = 'investment-withdraw'){
            $user = User::where('role_id',1)->get();
        }else{$user = [];}
        return $this->success(200,null,$user,'data found successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editPayment($trxId,$invoice)
    {
        $payment = Payment::with('customer','supplier','employee')->where('invoice',$invoice)->where('slug',$trxId)->first();
        if($payment){
            return $this->success(200,null,$payment,'data found successfully');
        }else{
            return $this->error(500,null,'payment data not found');
        }
    }
    public function edit($id)
    {
        //
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

        $validation = Validator::make($request->all(),[
            'uid' => 'required',
            'payment_date' => 'required',
            'amount' => 'required',
            'payment_type' => 'required',        
            'note' => 'required',      
            'bank_name' => 'required_if:payment_type,2',  
            'acc_name' => 'required_if:payment_type,2',  
            'acc_number' => 'required_if:payment_type,2',  
            'mob_type' => 'required_if:payment_type,3',  
            'mob_number' => 'required_if:payment_type,3',  
            'mob_trxId' => 'required_if:payment_type,3',  
            'cheque_number' => 'required_if:payment_type,4',  
            'cheque_date' => 'required_if:payment_type,4',  
            'month' => 'required_if:type,employee-salary',  
            'year' => 'required_if:type,employee-salary',  
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            // return $this->success(200,null,$request->all(),'joney');

            if($request->type == 'customer-payment'){ $type = 1;}elseif($request->type == 'supplier-payment'){$type = 2;}elseif($request->type == 'employee-salary'){$type = 3;}elseif($request->type = 'investment-withdraw'){$type = 4;}else{$type = 0;}

            $payment = Payment::where('invoice',$request->invoice)->where('slug',$trxId)->first();

            $fileName = 'payment_'.uniqid().'.jpg';
            if($request->hasFile('image')){
                $file = $request->file('image');
                $file->move('resources/backend/images/payment/', $fileName);
                if(File::exists($payment->image)){
                    File::delete($payment->image);
                }
            }
            
            $payment->uid = $request->uid;
            $payment->payment_date = $request->payment_date;
            $payment->amount = $request->amount;
            $payment->payment_type = $request->payment_type;
            $payment->month = $request->month;
            $payment->year = $request->year;
            if($request->payment_type == 2){
            $payment->bank_name = $request->bank_name;
            $payment->acc_name = $request->acc_name;
            $payment->acc_number = $request->acc_number;
            }
            if($request->payment_type == 3){
            $payment->mob_type = $request->mob_type;
            $payment->mob_number = $request->mob_number;
            $payment->mob_trxId = $request->mob_trxId;
            }
            if($request->payment_type == 4){
            $payment->cheque_number = $request->cheque_number;
            $payment->cheque_date = $request->cheque_date;
            }
            $payment->note = $request->note;
            $payment->image = $request->hasFile('image') ? 'resources/backend/images/payment/'.$fileName : $payment->image;
            $payment->save();
        }

        return $this->success(200,null,$payment,'payment added successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($invoice)
    {
        $payment = Payment::where('invoice',$invoice)->first();
        if($payment->delete()){
            if(File::exists($payment->image)){
                File::delete($payment->image);
            }
            return $this->success(200,null,$payment,'payment deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
}
