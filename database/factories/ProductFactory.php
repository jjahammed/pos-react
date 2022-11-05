<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Unit;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
      $brandId = Brand::all()->random()->id;
      $unitId = Unit::all()->random()->id;
      $pid = rand(10000000,99999999);
      $catagoryId = Category::all()->random()->id;
      $subCatagoryId = Subcategory::where('category_id',$catagoryId)->get()->random()->id;
      $tmp_name = $this->faker->name;
      $imageName = 'product_'. rand(100000,999999);
      $contents = file_get_contents('https://source.unsplash.com/random/960x960?sig=1');
      $file = resource_path('/js/components/backend/images/product/') . $imageName .'.webp';
      file_put_contents($file, $contents);
      $buyPrice = rand(500,1000);
      $sellPrice = $buyPrice + rand(300,500);
      $discountPrice = $sellPrice - rand(50,100);
      $discountAmount = $sellPrice - $discountPrice;
      $discount = $discountAmount * 100/$sellPrice;
        return [
          'title' => $tmp_name,
          'pid' => $pid,
          'slug' => str::slug($tmp_name),
          'image' => 'resources/backend/images/product/'. $imageName .'.webp',
          'buyPrice' => $buyPrice,
          'setPrice' => $sellPrice,
          'salePrice' => $discountPrice,
          'discount' => number_format($discount,2),
          'summery' => $this->faker->text($maxNbChars = 200),
          'note' => $this->faker->text($maxNbChars = 200),
          'description' => $this->faker->paragraph($nbSentences = 20, $variableNbSentences = true),
          'category_id' => $catagoryId,
          'subcategory_id' => $subCatagoryId,
          'brand_id' => $brandId,
          'unit_id' => $unitId,
          'stock' => 100,
        ];
    }
}
