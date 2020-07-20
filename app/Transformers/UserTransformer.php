<?php

namespace App\Transformers;

use App\User;
use Carbon\Carbon;

class UserTransformer
{
    public static function transform(User $user)
    {
        return [
            'id' => (int)$user->id,
            'name' => (string)$user->name,
            'email' => (string)$user->email,
            'created_at' => Carbon::parse($user->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($user->updated_at)->toDateTimeString(),
        ];
    }
}
