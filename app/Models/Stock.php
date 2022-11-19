<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;
    protected $with = ['product','stocktransection'];
    public function product(){
        return $this->hasOne(Product::Class,'id','product_id');
    }

    public function stocktransection(){
        return $this->hasMany(Stocktranction::Class,'product_id','product_id');
    }
}
