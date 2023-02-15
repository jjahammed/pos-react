<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    public function customer(){
        return $this->belongsTo(User::Class,'uid','uid');
    }
    public function supplier(){
        return $this->belongsTo(Supplier::Class,'uid','sid');
    }
    public function employee(){
        return $this->belongsTo(Employee::Class,'uid','uid');
    }
}
