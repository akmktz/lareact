<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CatalogGroup extends Model
{
    const TABLE_NAME = 'catalog_groups';

    protected $table = self::TABLE_NAME;

    protected $casts = [
        'is_active' => 'boolean',
    ];

    protected $dates = ['created_at', 'updated_at'];

    protected $hidden = ['deleted_at'];
}
