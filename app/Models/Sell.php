<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sell extends Model
{
    use HasFactory;

    protected $with = ['user','sellproduct'];
    // protected $with = ['category'];

    public function sellproduct(){
        return $this->hasMany(Saleproduct::Class);
    }

    public function user(){
        return $this->belongsTo(User::Class);
    }
}
