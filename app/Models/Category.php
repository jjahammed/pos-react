<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    // protected $with = ['subcategory','product'];
    public function product(){
        return $this->hasMany(Product::class);
    }
    public function subcategory(){
        return $this->hasMany(Subcategory::class);
    }
}
