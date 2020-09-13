import { useEffect } from 'react'
// import axios from 'axios'
import { fetchData } from '../store/reducer'
import { useSelector, useDispatch } from 'react-redux'

export const useFetch = ({ route, params }) => {
  const dispatch = useDispatch()
  const { searchData, isFetching, isFetchingError } = useSelector((state) => ({
    searchData: state.dataStatus.searchData,
    isFetching: state.dataStatus.isFetching,
    isError: state.dataStatus.isFetchingError,
  }))

  useEffect(() => {
    const fetching = async () => {
      dispatch(fetchData(route, params))
    }
    fetching()
  }, [dispatch, route, params])

  return { searchData, isFetching, isFetchingError }
}
