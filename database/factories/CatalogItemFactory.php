<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Models\CatalogGroup;
use App\Models\CatalogItem;
use Faker\Generator as Faker;

$factory->define(CatalogItem::class, function (Faker $faker) {
    $catalogGroupIdsList = CatalogGroup::where('is_active', true)->limit(100)->get(['id'])->pluck('id')->all();

    return [
        'group_id' => $faker->randomElement($catalogGroupIdsList),
        'is_active' => $faker->boolean(90),
        'name' => ucfirst($faker->words(3, true)),
        'description' => $faker->text,
        'price' => $faker->randomFloat(2, 100, 10000),
        'discount_percent' => $faker->boolean(40) ? $faker->numberBetween(2, 10) : 0,
    ];
});
