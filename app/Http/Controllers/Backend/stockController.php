<?php

namespace App\Http\Controllers\Backend;

use Validator;
use App\Models\Buy;
use App\Models\Stock;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Models\Stocktranction;
use App\Models\Activities;
use App\Http\Controllers\ApiController;

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
    public function create(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'product_id' => 'required',
            'reason' => 'required',
            'qty' => 'required',
        ],[
            'product_id.required' => 'You should select a Product',
            'reason.required' => 'You should select a reason',
            'qty.required' => 'You should enter a quantiy',
        ]);


        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $stocktranction = new Stocktranction();
            $stocktranction->trxId= uniqid();
            $stocktranction->product_id=$request->product_id;
            $stocktranction->pid=$request->pid;
            $stocktranction->quantity=$request->qty;
            $stocktranction->status=$request->reason;
            $stocktranction->note=$request->note;
            $stocktranction->operate_by=auth()->user()->uid;
            $stocktranction->save();

            Activities::act(Stocktranction::orderBy('id','desc')->first()->id,'Stocktranction','Product added to stock');

            $check = Stock::where('product_id',$request->product_id)->first();
            if($check) {
              $check->quantity = $check->quantity - $request->qty;
              $check->save();
            }
            return $this->success(200,null,$request->all(),'Stock Added successfully');
        }
            
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
        if(count($products) == 0){
            return $this->error(500,null,'You did not add any product');
        }
        if($request->paid > $request->total){
            return $this->error(500,null,'Paid amount can not grater than total amount');
        }
        $validation = Validator::make($request->all(),[
            'invoice' => 'required |unique:buys',
            'supplier' => 'required',
            'paymentOption' => 'required',
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
            $buy->paymentOption = $request->paymentOption;
            $buy->operate_by = auth()->user()->uid;
            $buy->status = 'Add';
            $buy->save();

            Activities::act(Buy::orderBy('id','desc')->first()->id,'Buy','Product purcheased from supplier');

            $supplier = Supplier::where('id',$request->supplier)->first();
            $supplier->total = $supplier->total + $request->total;
            $supplier->paid = $supplier->paid + $request->paid;
            $supplier->due = $supplier->due + $request->due;
            $supplier->save();

            foreach($products as $prd){
                $stocktranction = new Stocktranction();
                $stocktranction->trxId= $request->invoice;
                $stocktranction->product_id=$prd->product_id;
                $stocktranction->pid=$prd->product_pid;
                $stocktranction->quantity=$prd->product_qty;
                $stocktranction->status='Buy';
                $stocktranction->note=$request->note;
                $stocktranction->operate_by=auth()->user()->uid;
                $stocktranction->save();

                Activities::act(Stocktranction::orderBy('id','desc')->first()->id,'Stocktranction','Product added to stock');

                $check = Stock::where('product_id',$prd->product_id)->first();
                if($check) {
                  $check->quantity = $check->quantity + $prd->product_qty;
                  $check->save();
                }

            }
            return $this->success(200,null,$request->all(),'Stock Added successfully');
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
            $stock = Stocktranction::with('product')->where('product_id',$product->id)->get();
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
        $buy = Buy::where('invoice',$id)->first();

        $validation = Validator::make($request->all(),[
            'invoice' => 'required | unique:buys,invoice,'.$buy->id,
            'supplier' => 'required',
            'paymentOption' => 'required',
            'purcheased_date' => 'required',
        ],[
            'supplier.required' => 'You should select a Supplier',
        ]);
        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            if($request->paid > $request->total){
                return $this->error(403,'Paid amount can not grater than total amount','Paid amount can not grater than total amount');
            }
            $editSupplier = Supplier::where('id',$buy->supplier_id)->first();
                    if($editSupplier) {
                        $editSupplier->total = $editSupplier->total - $buy->total;
                        $editSupplier->paid = $editSupplier->paid - $buy->paid;
                        $editSupplier->due = $editSupplier->due - $buy->due;
                        $editSupplier->save();
                    }
            $supplier = Supplier::where('id',$request->supplier)->first();
            $supplier->total = $supplier->total + $request->total;
            $supplier->paid = $supplier->paid + $request->paid;
            $supplier->due = $supplier->due + $request->due;
            $supplier->save();
            $products = json_decode($request->products);

            $buy->invoice = $request->invoice;
            $buy->supplier_id = $request->supplier;
            $buy->purcheased_date = $request->purcheased_date;
            $buy->note = $request->note;
            $buy->sub_total = $request->sub_total;
            $buy->discount = $request->discount;
            $buy->total = $request->total;
            $buy->paid = $request->paid;
            $buy->due = $request->due;
            $buy->paymentOption = $request->paymentOption;
            $buy->save();

            $stockAddeds = Stocktranction::where('trxId',$id)->get();
            foreach($stockAddeds as $add){
                $check = Stock::where('product_id',$add->product_id)->first();
                if($check) {
                  $check->quantity = $check->quantity - $add->quantity;
                  $check->save();
                }
            }
            $stockDeletes = Stocktranction::where('trxId',$id)->delete();

            foreach($products as $prd){
                $stocktranction = new Stocktranction();
                $stocktranction->trxId= $request->invoice;
                $stocktranction->product_id=$prd->product_id;
                $stocktranction->pid=$prd->product_pid;
                $stocktranction->quantity=$prd->product_qty;
                $stocktranction->status='Buy';
                $stocktranction->note=$request->note;
                $stocktranction->operate_by=auth()->user()->uid;
                $stocktranction->save();

                Activities::act(Stocktranction::orderBy('id','desc')->first()->id,'Stocktranction','Product stock modifying');

                $check = Stock::where('product_id',$prd->product_id)->first();
                if($check) {
                  $check->quantity = $check->quantity + $prd->product_qty;
                  $check->save();
                }
            }
            return $this->success(200,null,$request->all(),'Stock Updated successfully');
        }
    }


    public function stock_alert(){
        $stock = Stock::all();
        $data = $stock->filter(function($item){
            return $item->quantity < $item->product->alertQty;
        });
        return $this->success(200,null,$data,'Stock alert retrive successfully');
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
