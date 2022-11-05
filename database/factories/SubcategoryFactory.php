<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\models\Category;
use App\models\Subcategory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subcategory>
 */
class SubcategoryFactory extends Factory
{
    protected $model = Subcategory::class;
    public function definition()
    {
        $name = $this->faker->name;
        $catagoryId = Category::all()->random()->id;
        $imageName = 'category_'.rand(100000,999999);
        $contents = file_get_contents('https://source.unsplash.com/random/960x960?sig=1');
        $file = resource_path('/js/components/backend/images/category/') . $imageName .'.webp';
        file_put_contents($file, $contents);

        return [
            'category_id' => $catagoryId,
            'name' => $name,
            'slug' => Str::slug($name),
            'image' => 'resources/backend/images/category/'. $imageName .'.webp',
        ];
    }
}
