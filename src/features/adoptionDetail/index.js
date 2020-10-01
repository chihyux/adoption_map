import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CatDefaltImg from '../../assets/image/noun_Cat_3393318.svg'
import DogDefaltImg from '../../assets/image/noun_Dog_912128.svg'
import markIcon from '../../assets/image/marker.png'
import { transferCity } from '../../constant/apiHelper'
import { DetailWrapper, DetailImg, DetailInfo } from './style/detailBox'
import PopUpBox from '../../components/popup/index'
import { PopWrapper, MarkerIcon } from '../../components/popup/style/popUpBox'
const DetailBox = () => {
  const [openMap, setOpenMap] = useState(false)
  const location = useLocation()
  const detail = location.state

  const TFhandler = (value) => {
    if (value === 'F') {
      return '否'
    }
    if (value === 'T') {
      return '是'
    }
    return '待更新'
  }

  const waitingDays = (value) => {
    let today = new Date(Date.now())
    let compareDate = new Date(value)
    const days = (today - compareDate) / (1000 * 60 * 60 * 24)
    return Math.floor(days)
  }

  const mapHandler = (e) => {
    e.preventDefault()
    setOpenMap(!openMap)
  }

  return (
    <DetailWrapper key={detail.animal_id}>
      <DetailImg
        alt={detail.animal_kind}
        src={
          detail.album_file
            ? detail.album_file
            : detail.animal_kind === '貓'
            ? CatDefaltImg
            : DogDefaltImg
        }
      />
      <DetailInfo>
        <span>入所天數：{waitingDays(detail.animal_createtime)}天</span>
        <span>入所日期：{detail.animal_createtime}</span>
        <span>地區：{transferCity(detail.animal_area_pkid.toString())}</span>
        <span>種類：{detail.animal_kind}</span>
        <span>收容編號：{detail.animal_subid}</span>
        <span>顏色：{detail.animal_colour}</span>
        <span>體型：{detail.animal_bodytype}</span>
        <span>性別：{detail.animal_sex}</span>
        <span>年齡：{detail.animal_age}</span>
        <span>描述：{detail.animal_remark ? detail.animal_remark : '無'}</span>-
        <span>是否絕育：{TFhandler(detail.animal_steerilization)}</span>
        <span>是否施打狂犬病疫苗：{TFhandler(detail.animal_bacterin)}</span>-
        <span>發現地點：{detail.animal_foundplace}</span>
        <span>
          公告收容所：{detail.shelter_name}
          <MarkerIcon
            src={markIcon}
            alt="map__marker"
            onClick={(e) => mapHandler(e)}
          />
        </span>
        <span>收容所電話：{detail.shelter_tel}</span>
        <span>收容所地址：{detail.shelter_address}</span>
        <span>更新日期：{detail.cDate}</span>
      </DetailInfo>
      {openMap && (
        <PopWrapper>
          <span
            onClick={(e) => {
              mapHandler(e)
            }}
          >
            X
          </span>
          <PopUpBox mapHandler={mapHandler} place={detail.shelter_name} />
        </PopWrapper>
      )}
    </DetailWrapper>
  )
}

export default DetailBox
