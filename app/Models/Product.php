<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    use HasFactory, Notifiable;

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopeSlug($query, $slug, $condition = '=')
    {
        return $query->where('slug', $condition, $slug);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
