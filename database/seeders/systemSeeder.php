<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\models\System;

class systemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        System::create([
            'name' => 'Company URL',
            'slug' => 'company-url',
            'value' => 'http://www.dizimart.net',
            'type' => 1
          ]);

        System::create([
            'name' => 'Company Full Name',
            'slug' => 'company-full-name',
            'value' => 'Crown Group Of Limited',
            'type' => 1
          ]);

        System::create([
            'name' => 'Company Short Name',
            'slug' => 'company-short-name',
            'value' => 'Crown Group',
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Address',
            'slug' => 'company-address',
            'value' => '30/4 DIT Road,East Hajipara, Rumpura,Dhaka-1219',
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Phone Number',
            'slug' => 'company-phone-number',
            'value' => '01798596317',
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Email Address',
            'slug' => 'company-email-address',
            'value' => 'jjahammed@gmail.com',
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Slogan',
            'slug' => 'company-slogan',
            'value' => 'live well feel better',
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Copyright',
            'slug' => 'company-copyright',
            'value' => '2023 jjahammed and his authority', //&#169;
            'type' => 1
          ]);
        System::create([
            'name' => 'Company Logo(Light)',
            'slug' => 'company-logo-light',
            'value' => 'logo.png',
            'type' => 2
          ]);
        System::create([
            'name' => 'Company Logo(Dark)',
            'slug' => 'company-logo-dark',
            'value' => 'logo.png',
            'type' => 2
          ]);
        System::create([
            'name' => 'Sms gateway user id',
            'slug' => 'sms-gateway-user-id',
            'value' => 'jjahammed@gmail.com',
            'type' => 1
          ]);
        System::create([
            'name' => 'Sms gateway password',
            'slug' => 'sms-gateway-password',
            'value' => '674544f77305cdc99b3f9621c0a',
            'type' => 1
          ]);

         
    }
}
