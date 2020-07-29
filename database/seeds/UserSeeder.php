<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::where('email', 'test@mail.com')->exists()) {
            factory(User::class)->create([
                'name' => 'test',
                'email' => 'test@mail.com',
                'email_verified_at' => Carbon::now(),
                'password' => bcrypt('123456'),
            ]);
        }

        factory(User::class, 4)->create();
    }
}
