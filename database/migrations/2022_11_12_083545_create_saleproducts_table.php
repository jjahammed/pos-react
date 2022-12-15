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
        Schema::create('saleproducts', function (Blueprint $table) {
            $table->id();
            $table->integer('sell_id');
            $table->string('invoice');
            $table->unsignedBigInteger('product_id');
            $table->string('pid');
            $table->string('unit_price');
            $table->double('quantity');
            $table->string('total_price');
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('saleproducts');
    }
};
