<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $guarded = ['id'];
    public function submodule(){
        return $this->belongsTo(Submodule::Class);
    }

    public function user(){
        return $this->hasOne(User::Class,'uid','uniId');
    }
    use HasFactory;
}
