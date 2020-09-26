import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../store/reducer'
import { detectHeight } from '../store/sizeDetectionReducer'

export const useScroll = () => {
  const [deviceHeight, setDeviceHeight] = useState(0)
  const [dataCount, setDataCount] = useState(0)
  const [top, setTop] = useState(15)
  const [skip, setSkip] = useState(0)
  const { searchData, bodyHeight } = useSelector((state) => ({
    searchData: state.dataStatus.searchData,
    bodyHeight: state.device.bodyHeight,
  }))

  const dispatch = useDispatch()

  const handleScroll = useCallback(() => {
    console.log('is scroll')
    if (deviceHeight + window.pageYOffset === bodyHeight) {
      console.log('is bottom')
      setSkip((prevSkip) => prevSkip + 15)
    }
  }, [deviceHeight, bodyHeight])

  const detectBodyHeight = useCallback(() => {
    if (searchData.length !== dataCount) {
      setDataCount(searchData.length)
    }
    dispatch(detectHeight(document.body.scrollHeight))
  }, [searchData.length, dataCount, dispatch])

  useEffect(() => {
    setDeviceHeight(window.innerHeight)
    detectBodyHeight()
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [detectBodyHeight, dispatch, handleScroll, skip, top])

  useEffect(() => {
    if (skip === 0) return
    dispatch(addData(top, skip))
  }, [dispatch, skip, top])

  return { top, skip }
}
