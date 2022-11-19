<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Supplier;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    protected $model = Supplier::class;
    public function definition()
    {
        $name = $this->faker->name;
        $imageName = 'supplier_'.rand(100000,999999);
        // $contents = file_get_contents('https://source.unsplash.com/random/960x960?sig=1');
        // $file = resource_path('/js/components/backend/images/category/') . $imageName .'.webp';
        // file_put_contents($file, $contents);

        return [
            'sid' => uniqid(),
            'name' => $name,
            'slug' => Str::slug($name),
            'address' => $this->faker->address,
            'phone' => $this->faker->phoneNumber,
            'contact_person' => $this->faker->name,
            'contact_person_phone' => $this->faker->phoneNumber,
            'note' => $this->faker->paragraph,
            'image' => 'resources/backend/images/supplier/'. $imageName .'.webp',
        ];
    }
}


