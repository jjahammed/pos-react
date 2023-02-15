<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Models\Extra;

class extraController extends ApiController
{
    public function show($info){
        if($info == 'about'){$type = 1;} elseif($info == 'contact'){ $type = 2;}elseif($info == 'terms-condition'){$type = 3;} elseif($info == 'faq'){$type = 4;}elseif($info == 'privacy'){$type = 5;}else{$type=0;}

        $information = Extra::where('type',$type)->first();
        return $this->success(200,null,$information,'data found successfully');
    }

    public function edit($info){
        if($info == 'about'){$type = 1;} elseif($info == 'contact'){ $type = 2;}elseif($info == 'terms-condition'){$type = 3;} elseif($info == 'faq'){$type = 4;}elseif($info == 'privacy'){$type = 5;}else{$type=0;}

        $information = Extra::where('type',$type)->first();
        return $this->success(200,null,$information,'data found successfully');
    }

    public function update(request $request,$info){

        if($info == 'about'){$type = 1;} elseif($info == 'contact'){ $type = 2;}elseif($info == 'terms-condition'){$type = 3;} elseif($info == 'faq'){$type = 4;}elseif($info == 'privacy'){$type = 5;}else{$type=0;}

        $information = Extra::where('type',$type)->first();
        $information->detail = $request->name;
        $information->save();
        return $this->success(200,null,$information,'data found successfully');
    }
}
