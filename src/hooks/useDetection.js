import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detectSize } from '../store/sizeDetectionReducer'

export const useDetection = (width = 768) => {
  const { isSmallSize } = useSelector((state) => state.device)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('is resize')
    console.log(window.innerWidth)
    const handleResize = () => {
      if (window.innerWidth < width) {
        dispatch(detectSize(true))
      } else {
        dispatch(detectSize(false))
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch, width])

  return { isSmallSize }
}
