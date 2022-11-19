<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Subcategory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['category'];
    public function category(){
        return $this->belongsTo(Category::Class,'category_id','id');
    }

    public function product(){
        return $this->hasMany(Product::class);
    }
}
