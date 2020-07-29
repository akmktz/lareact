<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Models\CatalogGroup;
use Faker\Generator as Faker;

$factory->define(CatalogGroup::class, function (Faker $faker) {
    return [
        'is_active' => $faker->boolean(90),
        'name' => ucfirst($faker->words(2, true)),
        'description' => $faker->text,
    ];
});
