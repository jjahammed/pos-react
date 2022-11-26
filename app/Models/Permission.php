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
    use HasFactory;
}
