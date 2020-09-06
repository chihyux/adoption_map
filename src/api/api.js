import axios from 'axios'

const apiurl = 'http://localhost:3001'

export const pets = async () => {
  try {
    const res = await axios.get(apiurl)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
