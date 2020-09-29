import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detectSize, detectHeight } from '../store/sizeDetectionReducer'

export const useDetection = (width = 768) => {
  const { isSmallSize } = useSelector((state) => state.device)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      dispatch(detectHeight(document.body.scrollHeight))
      if (window.innerWidth < width) {
        dispatch(detectSize(true))
      } else {
        dispatch(detectSize(false))
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch, width])

  return { isSmallSize }
}
