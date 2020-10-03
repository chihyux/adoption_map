import axios from 'axios'

export const urlToRequest =
  process.env.NODE_ENV === 'production'
    ? 'https://jolly-shockley-e9aec7.netlify.app'
    : 'http://localhost:3001'

export const instance = axios.create({
  baseURL: urlToRequest,
})
