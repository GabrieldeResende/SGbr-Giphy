<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md">
      <q-select
        filled
        v-model="selectedCategory"
        :options="categoryOptions"
        label="Filtrar por categoria"
        option-label="label"
        option-value="value"
        emit-value
        map-options
        @update:model-value="loadCategoryGifs"
      />
    </div>

    <q-spinner color="primary" v-if="loading" class="q-mt-md" />

    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="gif in gifs" :key="gif.id">
        <q-card flat bordered>
          <q-img :src="gif.images.fixed_height.url" :alt="gif.title" style="height: 200px" />

          <q-card-actions align="right">
            <q-btn
              flat
              round
              :icon="isFavorite(gif.id) ? 'favorite' : 'favorite_border'"
              :color="isFavorite(gif.id) ? 'red' : 'grey'"
              @click="toggleFavorite(gif)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGifCategories, getGifsByCategory } from 'src/services/giphyService'
import { useFavoriteStore } from 'src/stores/favoriteStore'

const gifs = ref([])
const categoryOptions = ref([])
const selectedCategory = ref(null)
const loading = ref(false)

const favoriteStore = useFavoriteStore()

const isFavorite = (id) => favoriteStore.isFavorite(id)
const toggleFavorite = (gif) => favoriteStore.toggleFavorite(gif)

const loadCategories = async () => {
  const data = await getGifCategories()
  categoryOptions.value = data.map((cat) => ({
    label: cat.name,
    value: cat.name,
  }))
}

const loadCategoryGifs = async () => {
  if (!selectedCategory.value) return
  loading.value = true
  gifs.value = await getGifsByCategory(selectedCategory.value)
  loading.value = false
}

onMounted(() => {
  loadCategories()
})
</script>
