<template>
  <div class="q-pa-md">
    <q-input v-model="searchTerm" label="Buscar GIF" outlined @keyup.enter="handleSearch">
      <template v-slot:append>
        <q-btn flat icon="search" @click="handleSearch" />
      </template>
    </q-input>

    <q-spinner color="primary" class="q-mt-md" v-if="loading && gifs.length === 0" />

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="gif in gifs" :key="gif.id">
        <q-card flat bordered class="q-pa-sm">
          <q-img :src="gif.images.fixed_height.url" :alt="gif.title" />

          <q-btn
            flat
            round
            icon="favorite"
            :color="isFavorite(gif.id) ? 'red' : 'grey'"
            @click="toggleFavorite(gif)"
            class="absolute-top-right q-ma-sm"
          />
        </q-card>
      </div>
    </div>

    <div class="q-mt-md" v-if="!loading && gifs.length">
      <q-btn color="primary" label="Carregar mais" @click="loadMore" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { searchGifs, getTrendingGifs } from 'src/services/giphyService'
import { useFavoriteStore } from 'src/stores/favoriteStore'

const searchTerm = ref('')
const gifs = ref([])
const loading = ref(false)
const offset = ref(0)
const limit = 12

const favorites = ref([])

const favoriteStore = useFavoriteStore()
const isFavorite = (id) => favoriteStore.isFavorite(id)
const toggleFavorite = (gif) => favoriteStore.toggleFavorite(gif)

// Favoritos no localStorage
onMounted(() => {
  const saved = localStorage.getItem('favoriteGifs')
  if (saved) favorites.value = JSON.parse(saved)
})

//observar mudanças na pagina
watch(
  favorites,
  (val) => {
    localStorage.setItem('favoriteGifs', JSON.stringify(val))
  },
  { deep: true },
)


const handleSearch = async () => {
  if (!searchTerm.value.trim()) return
  loading.value = true
  offset.value = 0
  gifs.value = await searchGifs(searchTerm.value, limit, offset.value)
  loading.value = false
}

const loadTrending = async () => {
  loading.value = true
  gifs.value = await getTrendingGifs(limit, offset.value)
  loading.value = false
}

//carregamento de itens por paginação
const loadMore = async () => {
  loading.value = true
  offset.value += limit
  const moreGifs = searchTerm.value
    ? await searchGifs(searchTerm.value, limit, offset.value)
    : await getTrendingGifs(limit, offset.value)

  gifs.value = [...gifs.value, ...moreGifs]
  loading.value = false
}

onMounted(async () => {
  await loadTrending()
})
</script>
