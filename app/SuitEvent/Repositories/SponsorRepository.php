<?php

namespace App\SuitEvent\Repositories;

use App\SuitEvent\Models\Sponsor;
use Suitcore\Repositories\SuitRepository;

class SponsorRepository extends SuitRepository
{
    public function __construct()
    {
        $this->mainModel = new Sponsor;
    }
}