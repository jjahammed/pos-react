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
        Schema::create('stocktranctions', function (Blueprint $table) {
            $table->id();
            $table->string('trxId');
            $table->unsignedBigInteger('product_id');
            $table->string('pid');
            $table->double('quantity');
            $table->string('status');
            $table->text('note')->nullable();
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
        Schema::dropIfExists('stocktranctions');
    }
};
