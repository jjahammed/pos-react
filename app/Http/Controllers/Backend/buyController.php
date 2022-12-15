<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Stock;
use App\Models\Stocktranction;
use App\Models\Saleproduct;
use App\Models\Buy;
use App\Models\User;
use Validator;

class buyController extends ApiController
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
            'data' => Buy::with('supplier')->where('status','Add')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json([
            'status' => 200,
            'data' => Buy::with('supplier')->where('status','Return')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        

        if($request->paid > $request->total){
            return response()->json([
            'status' => 500,
            'data' => $request->all(),
            'message' => 'Paid amount can not grater than total amount'
        ]);
        }

        $products = json_decode($request->products);
        
        $validation = Validator::make($request->all(),[
            'invoice' => 'required |unique:buys',
            'supplier' => 'required',
            'purcheased_date' => 'required',
        ],[
            'supplier.required' => 'You should select a Supplier',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            $buy = new Buy();
            $buy->invoice = $request->invoice;
            $buy->supplier_id = $request->supplier;
            $buy->purcheased_date = $request->purcheased_date;
            $buy->note = $request->note;
            $buy->sub_total = $request->sub_total;
            $buy->discount = $request->discount;
            $buy->total = $request->total;
            $buy->paid = $request->paid;
            $buy->due = $request->due;
            $buy->status = 'Return';
            $buy->save();

            foreach($products as $prd){
                $stocktranction = new Stocktranction();
                $stocktranction->trxId= $request->invoice;
                $stocktranction->product_id=$prd->product_id;
                $stocktranction->pid=$prd->product_pid;
                $stocktranction->quantity=$prd->product_qty;
                $stocktranction->status='Return';
                $stocktranction->note=$request->note;
                $stocktranction->save();

                $check = Stock::where('product_id',$prd->product_id)->first();
                if($check) {
                  $check->quantity = $check->quantity - $prd->product_qty;
                  $check->save();
                }

            }
          
            return $this->success(200,null,$request->all(),'Return Product successfully');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($invoice)
    {
        // return response()->json([
        //     'status' => 200,
        //     'data' => $invoice,
        // ]);
        $purcheased = Buy::with('supplier')->where('invoice',$invoice)->first();
        if($purcheased){
            $products = Stocktranction::with('product')->where('trxId',$invoice)->get();
            return response()->json([
                'status' => 200,
                'purcheased' => $purcheased,
                'products' => $products,
                'message' => 'Invoice found',
            ]);
        }else{
            return $this->error(404,'Purcheased Not found','Purcheased Not found');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($invoice)
    {
        $sell = Buy::with('supplier')->where('invoice',$invoice)->first();
        if($sell){
            $products = Stocktranction::with('product')->where('trxId',$invoice)->get();
            return response()->json([
                'status' => 200,
                'sell' => $sell,
                'product' => $products,
                'message' => 'Selleing product found'
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Selleing product Not found'
            ]);
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