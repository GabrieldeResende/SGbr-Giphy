import axios from 'axios'

//chave da API
const API_KEY = process.env.API_KEY
//url da API
const BASE_URL = process.env.API_URL

//função de busca de gifs
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

//função de busca por gifs especificos
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

//função de coleta das categorias
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

// função de busca dos gifs por categorias
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
