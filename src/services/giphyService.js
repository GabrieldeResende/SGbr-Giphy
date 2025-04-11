import axios from 'axios'

const API_KEY = 'olCEb5qSGGezATVAgKZxZRX9DSqPGrbu'
const BASE_URL = 'https://api.giphy.com/v1/gifs'

export async function searchGifs(query, limit = 12, offset = 0) {
  try {
    const res = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit,
        offset,
      },
    })
    return res.data.data
  } catch (err) {
    console.error('Erro ao buscar GIFs:', err)
    return []
  }
}

export async function getTrendingGifs(limit = 12, offset = 0) {
  try {
    const res = await axios.get(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit,
        offset,
      },
    })
    return res.data.data
  } catch (err) {
    console.error('Erro ao buscar trending GIFs:', err)
    return []
  }
}

export async function getGifCategories() {
  try {
    const res = await axios.get(`${BASE_URL}/categories`, {
      params: { api_key: API_KEY },
    })
    return res.data.data
  } catch (err) {
    console.error('Erro ao carregar categorias:', err)
    return []
  }
}

export async function getGifsByCategory(term, limit = 12) {
  try {
    const res = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: term,
        limit,
      },
    })
    return res.data.data
  } catch (err) {
    console.error('Erro ao buscar por categoria:', err)
    return []
  }
}
