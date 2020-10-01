import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataMemo } from '../store/reducer'
import { detectHeight } from '../store/sizeDetectionReducer'

export const useScroll = () => {
  const [deviceHeight, setDeviceHeight] = useState(0)
  const [dataCount, setDataCount] = useState(0)
  const { petData, bodyHeight, skip, top } = useSelector((state) => ({
    petData: state.dataStatus.petData,
    bodyHeight: state.device.bodyHeight,
    skip: state.dataStatus.skip,
    top: state.dataStatus.top,
  }))

  const dispatch = useDispatch()

  const handleScroll = useCallback(() => {
    if (deviceHeight + window.pageYOffset === bodyHeight) {
      dispatch(dataMemo(10))
    }
  }, [deviceHeight, bodyHeight, dispatch])

  const detectBodyHeight = useCallback(() => {
    if (petData && petData.length !== dataCount) {
      setDataCount(petData.length)
    }
    dispatch(detectHeight(document.body.scrollHeight))
  }, [dataCount, dispatch, petData])

  useEffect(() => {
    setDeviceHeight(window.innerHeight)
    detectBodyHeight()
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [detectBodyHeight, dispatch, handleScroll, skip, top])

  return { top, skip }
}
