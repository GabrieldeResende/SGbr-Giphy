<template>
  <q-page class="q-pa-md">
    <h4 class="q-mb-md">Meus GIFs Favoritos ❤️</h4>

    <div v-if="!favorites.length" class="text-black text-center q-my-xl">
      Nenhum GIF favorito ainda. 😢
    </div>

    <div class="row q-col-gutter-md" v-else>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="gif in favorites" :key="gif.id">
        <q-card flat bordered class="q-pa-sm">
          <q-img :src="gif.images.fixed_height.url" :alt="gif.title" />

          <q-btn
            flat
            round
            icon="delete"
            color="negative"
            @click="removeFavorite(gif.id)"
            class="absolute-top-right q-ma-sm"
          />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useFavoriteStore } from 'src/stores/favoriteStore'

const favoriteStore = useFavoriteStore()
const favorites = favoriteStore.favorites
const removeFavorite = favoriteStore.removeFavorite
</script>
