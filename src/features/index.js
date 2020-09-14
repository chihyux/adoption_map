import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { cityNo } from '../apiHelper'
import SelectBox from './selectBox'
import AnimalBox from './animalBox'
import Loading from '../components/loading'
import LoadingIcon from '../assets/image/loading_icon.svg'
import { LoadingWrapper } from '../components/style/loading'
import ErrorBox from '../components/error'

const IndexPage = () => {
  const [category, setCategory] = useState('')
  const [area, setArea] = useState('')
  const [route, setRoute] = useState(null)
  const [params, setParams] = useState(null)
  const { searchData, isFetching, isFetchingError } = useFetch({
    route: route,
    params: params,
  })

  const handleCategoryChange = (e) => {
    let toUtf8 = encodeURI(e.target.value)
    setCategory(`animal_kind=${toUtf8}`)
  }

  const handleAreaChange = (e) => {
    let num = transferAreaNo(e.target.value)
    setArea(`animal_area_pkid=${num}`)
  }

  const transferAreaNo = (value) => {
    const findVal = Object.values(cityNo).indexOf(value)
    return Object.keys(cityNo)[findVal]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRoute('search')
    setParams(category || area)
    if (category && area) {
      const searchVal = category.concat('&').concat(area)
      setParams(searchVal)
    }
  }

  return (
    <>
      <h1>認養寵物</h1>
      <SelectBox
        category={category}
        area={area}
        route={route}
        params={params}
        handleAreaChange={handleAreaChange}
        handleCategoryChange={handleCategoryChange}
        handleSubmit={handleSubmit}
      />
      {isFetching ? (
        <LoadingWrapper>
          <Loading icon={LoadingIcon} />
        </LoadingWrapper>
      ) : isFetchingError ? (
        <ErrorBox />
      ) : (
        <AnimalBox searchData={searchData} />
      )}
    </>
  )
}

export default IndexPage
