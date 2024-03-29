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
        Schema::create('sells', function (Blueprint $table) {
            $table->id();
            $table->string('invoice');
            $table->string('user_id');
            $table->string('uid');
            $table->dateTime('purcheased_date');
            $table->double('sub_total');
            $table->double('discount');
            $table->double('total');
            $table->double('paid');
            $table->double('due');
            $table->integer('paymentOption');
            $table->longText('note')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('sells');
    }
};
