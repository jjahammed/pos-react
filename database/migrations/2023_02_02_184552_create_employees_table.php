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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->dateTime('joining_date');
            $table->string('name');
            $table->string('slug');
            $table->text('phone');
            $table->text('email')->nullable();
            $table->text('nid')->nullable();
            $table->string('image')->nullable();
            $table->text('address');
            $table->text('contact_person')->nullable();
            $table->text('contact_person_phone')->nullable();
            $table->longText('note')->nullable();
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
        Schema::dropIfExists('employees');
    }
};
