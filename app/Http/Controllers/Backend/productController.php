<?php

namespace App\Http\Controllers\Backend;

use Validator;
use App\Models\Brand;
use App\Models\Stock;
use App\Models\Product;
use App\Models\Category;
use App\Models\Activities;
use App\Models\Subcategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\ApiController;

class productController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => 200,
            'data' => Product::with('stockk','category','brand')->get()
        ]);
    }

    public function saleProduct()
    {
        return response()->json([
            'status' => 200,
            'data' => Product::with('stockk','category','brand')->where('status',1)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'pid' => 'required | min:6',
            'title' => 'required | unique:products',
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'brand_id' => 'required',
            'unit_id' => 'required',
            'buyPrice' => 'required | numeric',
            'salePrice' => 'required | numeric',
            'discount' => 'required | numeric',
            // 'color' => 'required',
            // 'size' => 'required',
            'image' => 'required | image',
        ],[
            'pid.required' => 'product id is required',
            'category_id.required' => 'category is required',
            'subcategory_id.required' => 'subcategory is required',
            'brand_id.required' => 'brand is required',
            'unit_id.required' => 'unit is required',
            'buyPrice.required' => 'Purcheased price is required',
        ]);
        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'product_'.uniqid().'.jpg';
                $file->move('resources/backend/images/product/', $fileName);
            }

            $product = Product::create([
                'pid' => $request->pid,
                'title' => $request->title,
                'slug' => Str::slug($request->title),
                'category_id' => $request->category_id,
                'subcategory_id' => $request->subcategory_id,
                'brand_id' => $request->brand_id,
                'unit_id' => $request->unit_id,
                'buyPrice' => $request->buyPrice,
                'setPrice' => $request->setPrice,
                'salePrice' => $request->salePrice,
                'discount' => $request->discount,
                'color' => $request->color,
                'size' => $request->size,
                'note' => $request->note,
                'alertQty' => $request->alertQty,
                'summery' => $request->summery,
                'description' => $request->description,
                'image' => $request->hasFile('image') ? 'resources/backend/images/product/'.$fileName : 'not Found',
                'operate_by' => auth()->user()->uid,
            ]);
            Activities::act(Product::orderBy('id','desc')->first()->id,'Product','create a new product');

                  $stock = new Stock();
                  $stock->pid=$product->pid;
                  $stock->product_id=$product->id;
                  $stock->product_title=$product->title;
                  $stock->quantity = 0;
                  $stock->save();

            return $this->success(200,null,$product,'Product added successfully');
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $product = Product::where('slug',$slug)->first();
        if($product){
            return $this->success(200,null,$product,'product deleted successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        // return response()->json([
        //     'status' => 200,
        //     'data' => $request->all()
        // ]);

        $product = Product::where('slug',$slug)->first();
        
        $validation = Validator::make($request->all(),[
            'title' => 'required | unique:products,title,'.$product->id,
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'brand_id' => 'required',
            'unit_id' => 'required',
            'buyPrice' => 'required | numeric',
            'salePrice' => 'required | numeric',
            'discount' => 'required | numeric',
            // 'color' => 'required',
            // 'size' => 'required',
        ],[
            'category_id.required' => 'category is required',
            'subcategory_id.required' => 'subcategory is required',
            'brand_id.required' => 'brand is required',
            'unit_id.required' => 'unit is required',
            'buyPrice.required' => 'Purcheased price is required',
        ]);
        if($validation->fails()){
            return $this->error(500,$validation->messages(),'Something Went Wrong');
        }else{

            if($request->hasFile('image')){
                $file = $request->file('image');
                $fileName = 'product_'.uniqid().'.jpg';
                $file->move('resources/backend/images/product/', $fileName);
                if(File::exists($product->image)){
                    File::delete($product->image);
                }
            }

            $product->title = $request->title; 
            $product->slug = Str::slug($request->title); 
            $product->category_id = $request->category_id; 
            $product->subcategory_id = $request->subcategory_id; 
            $product->brand_id = $request->brand_id; 
            $product->unit_id = $request->unit_id; 
            $product->buyPrice = $request->buyPrice; 
            $product->setPrice = $request->setPrice; 
            $product->salePrice = $request->salePrice; 
            $product->discount = $request->discount; 
            $product->color = $request->color; 
            $product->size = $request->size; 
            $product->alertQty = $request->alertQty; 
            $product->summery = $request->summery; 
            $product->description = $request->description; 
            $product->note = $request->note; 
            $product->operate_by = auth()->user()->uid; 
            $product->image = $request->hasFile('image') ? 'resources/backend/images/product/'.$fileName : $product->image; 
            $product->save();
            Activities::act($product->id,'Product','Update Product Info');            
            return $this->success(200,null,$product,'Product Updated successfully');
        }
        
    

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $product = Product::where('slug',$slug)->first();
        if($product->delete()){
            if(File::exists($product->image)){
                File::delete($product->image);
            }
            Activities::act($product->id,'Product','Delete Product ');            
            return $this->success(200,null,$product,'product deleted successfully');
            
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    public function disable($slug){
        $product = Product::where('slug',$slug)->first();
        $product->status = 0;
        if($product->save()){
            Activities::act($product->id,'Product','disable Product ');
            return $this->success(200,null,$product,'Product disable successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }
    public function enable($slug){
        $product = Product::where('slug',$slug)->first();
        $product->status = 1;
        if($product->save()){
            Activities::act($product->id,'Product','enable Product ');
            return $this->success(200,null,$product,'Product enable successfully');
        }else{
            return $this->error(500,'Something Went Wrong','Something Went Wrong');
        }
    }

    public function category($slug){
        $category = Category::where('slug',$slug)->first();
        $product = Product::with('stockk','category','brand')->where('category_id',$category->id)->get();
        return $this->success(200,null,$product,'data found successfully');
    }
    public function subCategory($slug){
        $category = Subcategory::where('slug',$slug)->first();
        $product = Product::with('stockk','category','brand')->where('subcategory_id',$category->id)->get();
        return $this->success(200,null,$product,'data found successfully');
    }
    public function brand($slug){
        $brand = Brand::where('slug',$slug)->first();
        $product = Product::with('stockk','category','brand')->where('brand_id',$brand->id)->get();
        return $this->success(200,null,$product,'data found successfully');
    }


}
