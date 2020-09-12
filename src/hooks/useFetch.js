import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = ({ route, params }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const serverUrl = 'http://localhost:3001'
  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true)
      try {
        if (route && params) {
          console.log('has route')
          const newUrl = `${serverUrl}/${route}/${encodeURI(params)}`
          const result = await axios.get(newUrl)
          setData(result.data)
        } else {
          console.log('no route')
          const result = await axios.get(serverUrl)
          setData(result.data)
        }
      } catch {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetching()
  }, [serverUrl, route, params])
  return { data, isError, isLoading }
}
