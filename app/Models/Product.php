<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['category','subcategory','brand','unit','location'];

    public function category(){
        return $this->belongsTo(Category::Class);
    }
    public function subcategory(){
        return $this->belongsTo(Subcategory::Class);
    }
    public function brand(){
        return $this->belongsTo(Brand::Class);
    }
    public function unit(){
        return $this->belongsTo(Unit::Class);
    }
    public function location(){
        return $this->belongsTo(Location::Class);
    }
    public function stockk(){
        return $this->hasOne(Stock::Class);
    }
}
