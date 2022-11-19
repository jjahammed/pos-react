<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Stock;
use App\Models\Stocktranction;
use App\Models\Product;
use App\Models\Buy;
use Validator;

class stockController extends ApiController
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
            'data' => Stock::all()
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
        

        $products = json_decode($request->products);
        
        $validation = Validator::make($request->all(),[
            'invoice' => 'required',
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
            $buy->save();

            foreach($products as $prd){
                $stocktranction = new Stocktranction();
                $stocktranction->trxId= $request->invoice;
                $stocktranction->product_id=$prd->product_id;
                $stocktranction->pid=$prd->product_pid;
                $stocktranction->quantity=$prd->product_qty;
                $stocktranction->status='Addition';
                $stocktranction->note=$request->note;
                $stocktranction->save();

                $check = Stock::where('product_id',$prd->product_id)->first();
                if($check) {
                  $check->quantity = $check->quantity + $prd->product_qty;
                  $check->save();
                }

            }
          
            return $this->success(200,null,$request->all(),'Stock added successfully');
        }

        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug',$slug)->first();
        if($product){
            $stock = Stocktranction::where('product_id',$product->id)->get();
            return $this->success(200,null,$stock,'Product found successfully');
        }else{
            return $this->error(404,'Product not found','Something Went Wrong');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
