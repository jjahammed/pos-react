<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $guarded = ['id'];
    public function submodule() {
        return $this->hasMany(Submodule::Class);
    }
    use HasFactory;
}
