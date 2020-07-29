<?php

use App\Models\CatalogGroup;
use App\Models\CatalogItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCatalogItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(CatalogItem::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->foreignId('group_id');
            $table->boolean('is_active')->default(true)->index();
            $table->string('name')->default('');
            $table->string('description')->default('');
            $table->decimal('price', 8, 2, true)->default(0);
            $table->smallInteger('discount_percent',false, true)->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('group_id')
                ->references('id')->on(CatalogGroup::TABLE_NAME)
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalog_items', function (Blueprint $table) {
            Schema::drop(CatalogItem::TABLE_NAME);
        });
    }
}
