export const urlToRequest =
  process.env.NODE_ENV === 'production'
    ? 'https://cors-anywhere.herokuapp.com/'
    : 'http://localhost:3001'
