import React from 'react'
import { useFetch } from '../hooks/useFetch'

const IndexPage = () => {
  // pets()
  // let category = 'animal_kind=狗'
  // test('category', category)
  // let city = 'animal_area_pkid=4'
  // test('city', city)
  const spec = {
    route: 'category',
    params: 'animal_kind=狗',
  }

  const { data } = useFetch(spec)
  console.log(data)
  return (
    <>
      <h1>index page</h1>
    </>
  )
}

export default IndexPage
