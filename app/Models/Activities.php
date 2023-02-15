<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    use HasFactory;

    public static function act($id,$model,$message){
        $act = new Activities();
        $act->uid = auth()->user()->uid;
        $act->action_id = $id;
        $act->model_name = $model;
        $act->message = $message;
        $act->save();
      }

      public function user(){
        return $this->belongsTo(User::Class,'uid','uid');
      }
}
