<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Stock;
use App\Models\Stocktranction;
use App\Models\Saleproduct;
use App\Models\Sell;
use App\Models\User;
use Validator;

class sellController extends ApiController
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
            'data' => Sell::with('user','sellproduct')->get()
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
        
        $products = json_decode($request->products);
        
        $validation = Validator::make($request->all(),[
            'invoice' => 'required | unique:sells',
            'uid' => 'required',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'purcheased_date' => 'required',
        ],[
            'uid.required' => 'The User Id field is required.',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            $user = User::where('uid',$request->uid)->where('phone',$request->phone)->first();
            if(!$user){
                $userNew = new User();
                $userNew->uid = $request->uid;
                $userNew->role_id = 3;
                $userNew->name = $request->name;
                $userNew->phone = $request->phone;
                $userNew->address = $request->address;
                $userNew->email = $request->email;
                $userNew->password = bcrypt($request->phone);
                $userNew->total = $request->total;
                $userNew->paid = $request->paid;
                $userNew->due = $request->due;
                $userNew->save();
            }else{
                $user->total = $user->total + $request->total;
                $user->paid = $user->paid + $request->paid;
                $user->due = $user->due + $request->due;
                $user->save();
            }

            $sell = new Sell();
            $sell->invoice = $request->invoice;
            $sell->user_id = $request->user_id ? $request->user_id : User::orderBy('id','desc')->first()->id;
            $sell->purcheased_date = $request->purcheased_date;
            $sell->note = $request->note;
            $sell->sub_total = $request->sub_total;
            $sell->discount = $request->discount;
            $sell->total = $request->total;
            $sell->paid = $request->paid;
            $sell->due = $request->due;
            $sell->save();

            foreach($products as $prd){
                $product = new Saleproduct();
                $product->sell_id= Sell::orderBy('id','desc')->first()->id;
                $product->invoice= $request->invoice;
                $product->product_id=$prd->product_id;
                $product->pid=$prd->product_pid;
                $product->quantity=$prd->product_qty;
                $product->save();

                $stock = Stock::where('product_id',$prd->product_id)->first();
                if($stock){
                    $stock->quantity = $stock->quantity - $prd->product_qty;
                    $stock->save();

                    $stocktranction = new Stocktranction();
                    $stocktranction->trxId= $request->invoice;
                    $stocktranction->product_id=$prd->product_id;
                    $stocktranction->pid=$prd->product_pid;
                    $stocktranction->quantity=$prd->product_qty;
                    $stocktranction->status='sell';
                    $stocktranction->note=$request->note;
                    $stocktranction->save();

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
    public function show($invoice)
    {
        $sell = Sell::where('invoice',$invoice)->first();
        if($sell){
            $products = Saleproduct::with('product')->where('invoice',$invoice)->get();
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($invoice)
    {
        $sell = Sell::with('user')->where('invoice',$invoice)->first();
        if($sell){
            $products = Saleproduct::with('product')->select(['product_id','quantity'])->where('invoice',$invoice)->get();
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
    public function update(Request $request, $invoice)
    {
        // return response()->json([
        //     'status' => 200,
        //     'data' => $request->all()
        // ]);

        $products = json_decode($request->products);
        
        $validation = Validator::make($request->all(),[
            'uid' => 'required',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'purcheased_date' => 'required',
        ],[
            'uid.required' => 'The User Id field is required.',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            $user = User::where('uid',$request->uid)->where('phone',$request->phone)->first();
            if(!$user){
                $userNew = new User();
                $userNew->uid = $request->uid;
                $userNew->role_id = 3;
                $userNew->name = $request->name;
                $userNew->phone = $request->phone;
                $userNew->address = $request->address;
                $userNew->email = $request->email;
                $userNew->password = bcrypt($request->phone);
                $userNew->total = $request->total;
                $userNew->paid = $request->paid;
                $userNew->due = $request->due;
                $userNew->save();
            }else{
                $user->total = $user->total + $request->total;
                $user->paid = $user->paid + $request->paid;
                $user->due = $user->due + $request->due;
                $user->save();
            }



            $sell = Sell::where('invoice',$invoice)->first();
            $deleteSaleProduct = SaleProduct::where('invoice',$invoice)->delete();
            $stockupdates = Stocktranction::where('trxId',$invoice)->get();
            foreach($stockupdates as $prd){
                $stock = Stock::where('product_id',$prd->product_id)->first();
                if($stock){
                    $stock->quantity = $stock->quantity + $prd->product_qty;
                    $stock->save();
                }
            }
            $stockdelete = Stocktranction::where('trxId',$invoice)->delete();

            $sell->invoice = $request->invoice;
            $sell->user_id = $request->user_id ? $request->user_id : User::orderBy('id','desc')->first()->id;
            $sell->purcheased_date = $request->purcheased_date;
            $sell->note = $request->note;
            $sell->sub_total = $request->sub_total;
            $sell->discount = $request->discount;
            $sell->total = $request->total;
            $sell->paid = $request->paid;
            $sell->due = $request->due;
            $sell->save();

            foreach($products as $prd){
                $product = new Saleproduct();
                $product->sell_id= Sell::orderBy('id','desc')->first()->id;
                $product->invoice= $request->invoice;
                $product->product_id=$prd->product_id;
                $product->pid=$prd->product_pid;
                $product->quantity=$prd->product_qty;
                $product->save();

                $stock = Stock::where('product_id',$prd->product_id)->first();
                if($stock){
                    $stock->quantity = $stock->quantity - $prd->product_qty;
                    $stock->save();

                    $stocktranction = new Stocktranction();
                    $stocktranction->trxId= $request->invoice;
                    $stocktranction->product_id=$prd->product_id;
                    $stocktranction->pid=$prd->product_pid;
                    $stocktranction->quantity=$prd->product_qty;
                    $stocktranction->status='sell';
                    $stocktranction->note=$request->note;
                    $stocktranction->save();

                }
            }
            return $this->success(200,null,$request->all(),'Stock added successfully');
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
        //
    }
}
