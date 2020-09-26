const apiurl =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_status=OPEN'

export const urlToRequest =
  process.env.NODE_ENV === 'production'
    ? 'https://cors-anywhere.herokuapp.com/' + apiurl
    : 'http://localhost:3001'
