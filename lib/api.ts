import axios from 'axios'

const BASE_URL = 'https://suitmedia-backend.suitdev.com/api'

export const fetchIdeas = async (
  page = 1,
  size = 10,
  sort: 'published_at' | '-published_at' = '-published_at'
) => {
  const response = await axios.get(`${BASE_URL}/ideas`, {
    params: {
      'page[number]': page,
      'page[size]': size,
      'append[]': ['small_image', 'medium_image'],
      sort: sort,
    },
  })

  return response.data
}
