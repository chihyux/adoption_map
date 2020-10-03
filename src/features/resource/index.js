import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const Resource = () => {
  let resourceParams = {
    route: '/resource',
    params: {
      UnitId: 'DyplMIk3U1hf',
      rpt_year: 109,
      rpt_month: 7,
    },
  }
  const { resourceData, isFetching, isFetchingError } = useFetch(resourceParams)

  return <>hello</>
}

export default Resource
