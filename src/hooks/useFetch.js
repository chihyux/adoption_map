import { useEffect } from 'react'
import { fetchData } from '../store/dataReducer'
import { useSelector, useDispatch } from 'react-redux'

export const useFetch = ({ route, params }, skip) => {
  const dispatch = useDispatch()
  const { petData, resourceData, isFetching, isFetchingError } = useSelector(
    (state) => ({
      petData: state.dataStatus.petData,
      resourceData: state.dataStatus.resourceData,
      isFetching: state.dataStatus.isFetching,
      isFetchingError: state.dataStatus.isFetchingError,
    })
  )

  useEffect(() => {
    const fetching = () => {
      dispatch(fetchData({ route, params }))
    }

    if (skip === petData.length - 10) return

    fetching()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, route, params, skip])

  return { petData, resourceData, isFetching, isFetchingError }
}
