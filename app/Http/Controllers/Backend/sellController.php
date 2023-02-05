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
    public function create(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'invoice' => 'required',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            $sell = Sell::where('invoice',$request->invoice)->first();
            if($sell){
                return $this->success(200,null,$request->all(),'Invoice found successfully');
            }else{
                return $this->success(404,null,$request->all(),'Invoice Not Found');
            }
        }
    }

    public function return($invoice){
        $sell = Sell::with('user')->where('invoice',$invoice)->first();
        if($sell){
            $data['products'] = Saleproduct::with('product')->where('invoice',$invoice)->where('status',1)->get();
            $data['returns'] = Saleproduct::with('product')->where('invoice',$invoice)->where('status',0)->get();
            return response()->json([
                'status' => 200,
                'sell' => $sell,
                'data' => $data,
                'message' => 'Selleing product found'
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Selleing product Not found'
            ]);
        }
    }

    public function returnStore(Request $request){
        $products = json_decode($request->products);

        // return response()->json([
        //     'status' => 200,
        //     'data' => $request->invoice
        // ]);
        // sell table
        $sell = Sell::where('invoice',$request->invoice)->first();
        // user table
        $user = User::where('uid',$sell->uid)->first();
        
        $user->total = $user->total - $request->returnTotal;
        $user->paid = $user->due < $request->returnTotal ? $user->paid - ($request->returnTotal - $user->due) : $user->paid;
        $user->due = $user->due < $request->returnTotal ? 0 : $user->due - $request->returnTotal;
        $user->save();

        $sell->sub_total = $sell->sub_total - $request->returnBuyPrice;
        $sell->total = $sell->total - $request->returnTotal;
        $sell->paid = $sell->due < $request->returnTotal ? $sell->paid - ($request->returnTotal - $sell->due) : $sell->paid;
        $sell->due = $sell->due < $request->returnTotal ? 0 : $sell->due - $request->returnTotal;
        $sell->save();


        // return response()->json([
        //     'status' => 200,
        //     'data' => $products
        // ]);

        
        foreach($products as $prd){
            $product = new Saleproduct();
            $product->sell_id= $prd->sell_id;
            $product->invoice= $request->invoice;
            $product->product_id=$prd->product_id;
            $product->pid=$prd->product_pid;
            $product->buy_price='-'.$prd->buy_price;
            $product->unit_price='-'.$prd->unit_price;
            $product->quantity='-'.$prd->returnQuantity;
            $product->total_price='-'.$prd->total_price;
            $product->total_price_after_discount='-'.$prd->total_price_after_discount;
            $product->profit = $prd->profit < 0 ? abs($prd->profit) : '-'.$prd->profit;
            $product->status=0;
            $product->save();

            $stock = Stock::where('product_id',$prd->product_id)->first();
            if($stock){
                $stock->quantity = $stock->quantity + $prd->quantity;
                $stock->save();

                $stocktranction = new Stocktranction();
                $stocktranction->trxId= $request->invoice;
                $stocktranction->product_id=$prd->product_id;
                $stocktranction->pid=$prd->product_pid;
                $stocktranction->quantity=$prd->quantity;
                $stocktranction->status='Return';
                $stocktranction->save();
            }
        }


        return $this->success(200,null,$request->all(),'Product Return successfully');
    }

    public function store(Request $request)
    {
        $products = json_decode($request->products);
        // return response()->json([
        //     'status' => 200,
        //     'data' => $products
        // ]);

        if(count($products) == 0){
            return response()->json([
            'status' => 403,
            'data' => $request->all(),
            'message' => 'You did not add any product'
        ]);
        }

        if($request->paid > $request->total){
            return response()->json([
            'status' => 403,
            'data' => $request->all(),
            'message' => 'Paid amount can not grater than total amount'
        ]);
        }

        
        $validation = Validator::make($request->all(),[
            'invoice' => 'required | unique:sells',
            'uid' => 'required',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'purcheased_date' => 'required',
            'paymentOption' => 'required',
        ],[
            'uid.required' => 'The User Id field is required.',
        ]);

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            $user = User::where('uid',$request->uid)->where('phone',$request->phone)->first();
            if($user){
                $user->total = $user->total + $request->total;
                $user->paid = $user->paid + $request->paid;
                $user->due = $user->due + $request->due;
                $user->save();
                
            }else{

                $userCheck = User::where(function($result) use ($request){
                $result->where('uid',$request->uid)
                        ->orWhere('phone',$request->phone);
                })->first();
                    if($userCheck){
                        return $this->error(405,'user id or phone number has been taken','user id or phone number has been taken');
                    }else{
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
                    }
            }

            $sell = new Sell();
            $sell->invoice = $request->invoice;
            $sell->uid = $request->uid;
            $sell->user_id = $request->user_id ? $request->user_id : User::orderBy('id','desc')->first()->id;
            $sell->purcheased_date = $request->purcheased_date;
            $sell->note = $request->note;
            $sell->sub_total = $request->sub_total;
            $sell->discount = $request->discount;
            $sell->total = $request->total;
            $sell->paid = $request->paid;
            $sell->due = $request->due;
            $sell->paymentOption = $request->paymentOption;
            $sell->save();

            foreach($products as $prd){
                $product = new Saleproduct();
                $product->sell_id= Sell::orderBy('id','desc')->first()->id;
                $product->invoice= $request->invoice;
                $product->paymentOption= $request->paymentOption;
                $product->product_id=$prd->product_id;
                $product->pid=$prd->product_pid;
                $product->modelNumber=$prd->modelNumber != '' ? $prd->modelNumber : '';
                $product->buy_price=$prd->buy_price;
                $product->unit_price=$prd->product_price;
                $product->quantity=$prd->product_qty;
                $product->total_price=$prd->total_price;
                $product->total_price_after_discount= $prd->total_price - ($prd->total_price * $request->discount/100);
                $product->profit= $prd->total_price- ($prd->total_price * $request->discount/100) -  ($prd->buy_price*$prd->product_qty);
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
                    $stocktranction->status='Sell';
                    $stocktranction->note=$request->note;
                    $stocktranction->save();

                }
            }



            
          
            return $this->success(200,null,$request->all(),'Sell added successfully');
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
        $sell = Sell::with('user')->where('invoice',$invoice)->first();
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $invoice)
    {
        $validation = Validator::make($request->all(),[
            'uid' => 'required',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'paymentOption' => 'required',
            'purcheased_date' => 'required',
        ],[
            'uid.required' => 'The User Id field is required.',
        ]);

        

        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{
            if($request->paid > $request->total){
                return $this->error(403,'Paid amount can not grater than total amount','Paid amount can not grater than total amount');
            }
            $products = json_decode($request->products);

            $sell = Sell::where('invoice',$invoice)->first();
            $editUser = User::where('uid',$sell->uid)->first();
                if($editUser) {
                    $editUser->total = $editUser->total - $sell->total;
                    $editUser->paid = $editUser->paid - $sell->paid;
                    $editUser->due = $editUser->due - $sell->due;
                    $editUser->save();
                }
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
                $userNew->paymentOption = $request->paymentOption;
                $userNew->save();
            }else{
                $user->total = $user->total + $request->total;
                $user->paid = $user->paid + $request->paid;
                $user->due = $user->due + $request->due;
                $user->save();
            }

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

            // $sell->invoice = $request->invoice;
            $sell->uid = $request->uid;
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
                $product->paymentOption=$request->paymentOption;
                $product->product_id=$prd->product_id;
                $product->pid=$prd->product_pid;
                $product->modelNumber=$prd->modelNumber != '' ? $prd->modelNumber : '';
                $product->buy_price=$prd->buy_price;
                $product->unit_price=$prd->product_price;
                $product->quantity=$prd->product_qty;
                $product->total_price=$prd->total_price;
                $product->total_price_after_discount= $prd->total_price - ($prd->total_price * $request->discount/100);
                $product->profit= $prd->total_price- ($prd->total_price * $request->discount/100) -  ($prd->buy_price*$prd->product_qty);
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
                    $stocktranction->status='Sell';
                    $stocktranction->note=$request->note;
                    $stocktranction->save();

                }
            }
            return $this->success(200,null,$request->all(),'Sell Updated successfully');
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
