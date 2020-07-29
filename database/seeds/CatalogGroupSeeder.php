<?php

use App\Models\CatalogGroup;
use Illuminate\Database\Seeder;

class CatalogGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(CatalogGroup::class, 5)->create();
    }
}
