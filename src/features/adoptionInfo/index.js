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
import { reset, updateQuery } from '../../store/dataReducer'
import { useDispatch, useSelector } from 'react-redux'

const IndexPage = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState(null)
  const [area, setArea] = useState(null)
  const [route, setRoute] = useState('/info')
  const { query } = useSelector((state) => ({
    query: state.dataStatus.query,
  }))

  const { skip } = useScroll()
  const { petData, isFetching, isFetchingError } = useFetch(query, skip)
  let newParams = {
    route: route,
    params: {
      UnitId: 'QcbUEzN6E6DL',
      animal_status: 'OPEN',
      $top: 10,
      $skip: 0,
      animal_kind: undefined || category,
      animal_area_pkid: undefined || area,
    },
  }

  const handleCategoryChange = (e) => {
    setRoute('/search')
    setCategory(e.target.value)
  }

  const handleAreaChange = (e) => {
    let num = transferAreaNo(e.target.value)
    setRoute('/search')
    setArea(num)
  }

  const transferAreaNo = (value) => {
    const findVal = Object.values(cityNo).indexOf(value)
    return Object.keys(cityNo)[findVal]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(reset())
    dispatch(updateQuery(newParams))
  }

  return (
    <>
      <h1>認養寵物</h1>
      <SelectBox
        category={category}
        area={area}
        handleAreaChange={handleAreaChange}
        handleCategoryChange={handleCategoryChange}
        handleSubmit={handleSubmit}
      />
      <AnimalBox petData={petData} />
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
