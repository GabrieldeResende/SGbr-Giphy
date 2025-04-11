import { defineStore } from 'pinia'

//store de salvamento dos gifs favoritos
export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favoriteGifs') || '[]'),
  }),

  // ações
  actions: {
    //funçao para salvar como favorito
    addFavorite(gif) {
      if (!this.isFavorite(gif.id)) {
        this.favorites.push(gif)
        this.saveToStorage()
      }
    },
    //funçao para remover o favorito
    removeFavorite(id) {
      this.favorites = this.favorites.filter((gif) => gif.id !== id)
      this.saveToStorage()
    },

    toggleFavorite(gif) {
      this.isFavorite(gif.id) ? this.removeFavorite(gif.id) : this.addFavorite(gif)
    },

    isFavorite(id) {
      return this.favorites.some((gif) => gif.id === id)
    },

    saveToStorage() {
      localStorage.setItem('favoriteGifs', JSON.stringify(this.favorites))
    },
  },
})
