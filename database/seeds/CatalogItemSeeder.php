<?php

use App\Models\CatalogItem;
use Illuminate\Database\Seeder;

class CatalogItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(CatalogItem::class, 5)->create();
    }
}
