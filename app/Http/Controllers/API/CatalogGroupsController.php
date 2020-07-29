<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CatalogGroup;

class CatalogGroupsController extends Controller
{
    public function index()
    {
        return CatalogGroup::paginate();
    }
}
