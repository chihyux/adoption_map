const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const apiurl =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_status=OPEN'

export const urlToRequest =
  process.env.NODE_ENV === 'production'
    ? 'https://jolly-shockley-e9aec7.netlify.app'
    : 'http://localhost:3001'
