<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Saleproduct,Buy,Stock,Product};

class dashboardController extends Controller
{
    public function headingPart(){

        $buyData = Buy::all();
        $sellData = Saleproduct::all();
        $data['buy'] = $buyData->where('status','Add')->sum('total') - $buyData->where('status','Return')->sum('total');
        $data['sale'] = $sellData->sum('total_price');
        $stocks = Stock::all();
        $result = $stocks->map(function ($item){
            return $item->product->buyPrice * $item->quantity;
        });
        $data['stockPrice'] = $result->sum();
        $result2 = $sellData->map(function ($item){
            return $item->product->buyPrice * $item->quantity;
        });
        $data['profit'] = $data['sale'] - $result2->sum();
        return response()->json([
            'status' => 200,
            'data' => $data
        ]);
    }
}
