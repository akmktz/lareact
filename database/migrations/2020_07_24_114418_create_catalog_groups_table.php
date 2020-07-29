<?php

use App\Models\CatalogGroup;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCatalogGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(CatalogGroup::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->boolean('is_active')->default(true)->index();
            $table->string('name')->default('');
            $table->string('description')->default('');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop(CatalogGroup::TABLE_NAME);
    }
}
