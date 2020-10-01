import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useScroll } from '../../hooks/useScroll'
import { cityNo } from '../../constant/apiHelper'
import SelectBox from './selectBox'
import AnimalBox from './animalBox'
import Loading from '../../components/loading'
import LoadingIcon from '../../assets/image/loading_icon.svg'
import { LoadingWrapper } from '../../components/style/loading'
import ErrorBox from '../../components/error'
import { reset } from '../../store/reducer'
import { useDispatch } from 'react-redux'

const IndexPage = () => {
  const [category, setCategory] = useState(null)
  const [area, setArea] = useState(null)
  const [route, setRoute] = useState(null)
  const [params, setParams] = useState(null)
  const { top, skip } = useScroll()
  const { searchData, petData, isFetching, isFetchingError } = useFetch({
    route: route,
    params: params,
    top: top,
    skip: skip,
  })
  const dispatch = useDispatch()

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
    dispatch(reset())
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
      <AnimalBox petData={petData} />
      <AnimalBox searchData={searchData} />
      {isFetching && (
        <LoadingWrapper>
          <Loading icon={LoadingIcon} />
        </LoadingWrapper>
      )}
      {isFetchingError && <ErrorBox />}
    </>
  )
}

export default IndexPage
