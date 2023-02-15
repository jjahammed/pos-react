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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->integer('type'); // 1 = customer 2 = supplier 3 = salary 4 = investment withdraw
            $table->string('slug');
            $table->string('uid');
            $table->string('invoice');
            $table->dateTime('payment_date');
            $table->double('amount');
            $table->integer('payment_type');
            $table->string('month')->nullable();
            $table->string('year')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('acc_name')->nullable();
            $table->string('acc_number')->nullable();
            $table->string('cheque_number')->nullable();
            $table->dateTime('cheque_date')->nullable();
            $table->string('mob_type')->nullable();
            $table->string('mob_number')->nullable();
            $table->string('mob_trxId')->nullable();
            $table->string('image')->nullable();
            $table->longText('note')->nullable();
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
        Schema::dropIfExists('payments');
    }
};
