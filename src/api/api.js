import axios from 'axios'

export const urlToRequest =
  process.env.NODE_ENV === 'production'
    ? 'https://pets-backend-for-cors.herokuapp.com/'
    : 'http://localhost:3001'

export const instance = axios.create({
  baseURL: urlToRequest,
})
