<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use App\models\Category;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;
    public function definition()
    {
        $imageName = 'category_'.rand(100000,999999);
        $contents = file_get_contents('https://source.unsplash.com/random/960x960?sig=1');
        $file = resource_path('/js/components/backend/images/category/') . $imageName .'.webp';
        file_put_contents($file, $contents);
        $name = $this->faker->name;

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'image' => 'resources/backend/images/category/'. $imageName .'.webp',
        ];
    }
}
