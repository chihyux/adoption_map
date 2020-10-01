import { useEffect, useState } from 'react'
import { fetchData, reset } from '../store/reducer'
import { useSelector, useDispatch } from 'react-redux'

export const useFetch = ({ route, params, top, skip }) => {
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()
  const { petData, searchData, isFetching, isFetchingError } = useSelector(
    (state) => ({
      petData: state.dataStatus.petData,
      searchData: state.dataStatus.searchData,
      isFetching: state.dataStatus.isFetching,
      isFetchingError: state.dataStatus.isFetchingError,
    })
  )

  useEffect(() => {
    const fetching = async () => {
      dispatch(fetchData(route, params, top, skip))
    }
    const landingFetching = async () => {
      dispatch(reset())
      dispatch(fetchData(route, params, top, skip))
    }

    if (status) {
      fetching()
    } else {
      setStatus(true)
      landingFetching()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params, route, skip])

  return { petData, isFetching, isFetchingError, searchData }
}
