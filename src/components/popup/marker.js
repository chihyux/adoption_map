import React, { useState } from 'react'
import markIcon from '../../assets/image/marker.png'
import { MarkerWrapper, MarkerInfo, MarkerIcon } from './style/popUpBox'

const Marker = ({ data }) => {
  const [toggleInfo, setToggleInfo] = useState(false)
  return (
    <MarkerWrapper>
      <MarkerIcon
        src={markIcon}
        alt="map__marker"
        onClick={() => setToggleInfo(!toggleInfo)}
      />
      {toggleInfo && (
        <MarkerInfo>
          <div>名稱：{data.name}</div>-
          <div>{data && data.opening_hours.isOpen() ? '營業中' : '休息中'}</div>
          -<div>評分：{`${data.rating}(${data.user_ratings_total})`}</div>
          <div>電話：{data.formatted_phone_number}</div>
          <div>
            營業時間：
            {data &&
              data.opening_hours.weekday_text.map((weekday, index) => {
                return <div key={index}>{weekday}</div>
              })}
          </div>
        </MarkerInfo>
      )}
    </MarkerWrapper>
  )
}

export default Marker
