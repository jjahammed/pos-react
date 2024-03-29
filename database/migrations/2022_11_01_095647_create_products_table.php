<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('pid');
            $table->integer('category_id');
            $table->integer('subcategory_id')->nullable();
            $table->string('title');
            $table->string('slug');
            $table->integer('unit_id')->nullable();
            $table->integer('brand_id')->nullable();
            $table->integer('stock')->default(0);
            $table->integer('alertQty')->default(0);
            $table->double('tax')->default(0);
            $table->boolean('hot')->default(0);
            $table->boolean('featured')->default(0);
            $table->integer('location_id')->nullable();
            $table->longText('summery')->nullable();
            $table->longText('description')->nullable();
            $table->longText('note')->nullable();
            $table->double('size')->nullable();
            $table->string('color')->nullable();
            $table->string('image')->nullable();
            $table->double('buyPrice');
            $table->double('discount');
            $table->double('setPrice');
            $table->double('salePrice');
            $table->integer('status')->default(1);
            $table->string('operate_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
