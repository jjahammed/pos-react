<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Saleproduct,Buy,Stock,Product};
use Carbon\Carbon;

class dashboardController extends Controller
{
    public function headingPart(){

      $today = Carbon::now();

      $start_today = Carbon::parse($today->startOfDay());
      $end_today = Carbon::parse($today->endOfDay());

      $start_yesterday = Carbon::parse($today->subDay()->startOfDay());
      $end_yesterday = Carbon::parse($today->subDay()->endOfDay());

      $start_this_month = Carbon::now()->startOfMonth();
      $end_this_month = Carbon::now()->endOfMonth();

      $start_last_month = Carbon::now()->subMonth()->startOfMonth();
      $end_last_month = Carbon::now()->subMonth()->endOfMonth();

      $start_this_year = Carbon::now()->startOfYear();
      $end_this_year = Carbon::now()->endOfYear();

      $start_last_year = Carbon::now()->subYear()->startOfYear();
      $end_last_year = Carbon::now()->subYear()->endOfYear();

    
    $buyData = Buy::all();
    $sellData = Saleproduct::all();
    $stocks = Stock::with('product')->get();
    $product = Product::with('saleProduct')->get();


    // bar chart

    $barChartThisYear = [];
    $barChartLastYear = [];

    for ($i=0; $i <12 ; $i++) { 

       $startOfMonth = Carbon::parse(Carbon::now()->startOfYear())->startOfMonth()->addMonthsNoOverflow($i);
       
       $endOfMonth = Carbon::parse(Carbon::now()->startOfYear())->endOfMonth()->addMonthsNoOverflow($i);

       $lastYearStartOfMonth = Carbon::parse(Carbon::now()->subYear(1)->startOfYear())->startOfMonth()->addMonthsNoOverflow($i);

       $lastYearEndOfMonth = Carbon::parse(Carbon::now()->subYear(1)->startOfYear())->endOfMonth()->addMonthsNoOverflow($i);

       
        array_push($barChartThisYear,$sellData->whereBetween('created_at',[$startOfMonth,$endOfMonth])->sum('total_price_after_discount'));

        array_push($barChartLastYear,$sellData->whereBetween('created_at',[$lastYearStartOfMonth,$lastYearEndOfMonth])->sum('total_price_after_discount'));
    }

    $data['thisYearBarChart'] = $barChartThisYear;
    $data['lastYearBarChart'] = $barChartLastYear;

    // Line chart (this year)
    $lineChartThisYear = [];
    $daysInMonth = $start_this_month->daysInMonth;
     
    for ($i=0; $i < $daysInMonth; $i++) { 
            $firstValue = Carbon::parse(Carbon::now()->startOfMonth())->addDays($i)->startOfDay();
            $secondValue = Carbon::parse(Carbon::now()->startOfMonth())->addDays($i)->endOfDay();
            array_push($lineChartThisYear,$sellData->whereBetween('created_at',[$firstValue,$secondValue])->sum('total_price_after_discount'));
        }
    $data['thisMonthLineChart'] = $lineChartThisYear;

    // Line chart (last year)
    $lineChartLastYear = [];
    $daysInLastMonth = $start_last_month->daysInMonth;
     
    for ($i=0; $i < $daysInLastMonth; $i++) { 
            $firstValue = Carbon::parse(Carbon::now()->subMonth(1)->startOfMonth())->addDays($i)->startOfDay();
            $secondValue = Carbon::parse(Carbon::now()->subMonth(1)->startOfMonth())->addDays($i)->endOfDay();
            array_push($lineChartLastYear,$sellData->whereBetween('created_at',[$firstValue,$secondValue])->sum('total_price_after_discount'));
        }
    $data['lastMonthLineChart'] = $lineChartLastYear;
    
    // top ten product

    $topProduct = $product->map(function($item){
        return [
            'product' => $item->title,
            'quantity' => $item->saleProduct->sum('quantity'),
            'amount' => $item->saleProduct->sum('total_price_after_discount'),
        ];
    });
    $data['topTenProductByPrice'] = $topProduct->sortByDesc('amount')->values()->take(10);

    $data['topTenProductByQuantity'] = $topProduct->sortByDesc('quantity')->values()->take(10);

    // return $data['topTenProductByQuantity'];

        // purcheased 
        $data['buy'] = $buyData->where('status','Add')->sum('sub_total') - $buyData->where('status','Return')->sum('sub_total');

        $data['buyToday'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_today,$end_today])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_today,$end_today])->sum('sub_total');

        $data['buyYesterday'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_yesterday,$end_yesterday])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_yesterday,$end_yesterday])->sum('sub_total');

        $data['buyTthismonth'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_this_month,$end_this_month])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_this_month,$end_this_month])->sum('sub_total');

        $data['buyLastmonth'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_last_month,$end_last_month])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_last_month,$end_last_month])->sum('sub_total');

        $data['buyTthisyear'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_this_year,$end_this_year])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_this_year,$end_this_year])->sum('sub_total');

        $data['buyLastyear'] = $buyData->where('status','Add')->whereBetween('created_at',[$start_last_year,$end_last_year])->sum('sub_total') - $buyData->where('status','Return')->whereBetween('created_at',[$start_last_year,$end_last_year])->sum('sub_total');

        

        $data['sale'] = $sellData->sum('total_price_after_discount');
        $data['saleToday'] = $sellData->whereBetween('created_at',[$start_today,$end_today])->sum('total_price_after_discount');
        $data['saleYesterday'] = $sellData->whereBetween('created_at',[$start_yesterday,$end_yesterday])->sum('total_price_after_discount');
        $data['saleThismonth'] = $sellData->whereBetween('created_at',[$start_this_month,$end_this_month])->sum('total_price_after_discount');
        $data['saleLastmonth'] = $sellData->whereBetween('created_at',[$start_last_month,$end_last_month])->sum('total_price_after_discount');
        $data['saleThisyear'] = $sellData->whereBetween('created_at',[$start_this_year,$end_this_year])->sum('total_price_after_discount');
        $data['saleLastyear'] = $sellData->whereBetween('created_at',[$start_last_year,$end_last_year])->sum('total_price_after_discount');




        $result = $stocks->map(function ($item){
            return $item->product->buyPrice * $item->quantity;
        });
        

        $data['stockPrice'] = $result->sum();

        $data['profit'] = $sellData->sum('profit');

        $data['profitToday'] = $sellData->whereBetween('created_at',[$start_today,$end_today])->sum('profit');
        $data['profitYesterday'] = $sellData->whereBetween('created_at',[$start_yesterday,$end_yesterday])->sum('profit');
        $data['profitThismonth'] = $sellData->whereBetween('created_at',[$start_this_month,$end_this_month])->sum('profit');
        $data['profitLastmonth'] = $sellData->whereBetween('created_at',[$start_last_month,$end_last_month])->sum('profit');
        $data['profitThisyear'] = $sellData->whereBetween('created_at',[$start_this_year,$end_this_year])->sum('profit');
        $data['profitLastyear'] = $sellData->whereBetween('created_at',[$start_last_year,$end_last_year])->sum('profit');


        return response()->json([
            'status' => 200,
            'data' => $data
        ]);
    }
}
