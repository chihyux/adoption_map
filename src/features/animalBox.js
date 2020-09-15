import React from 'react'
import LazyLoad from 'react-lazyload'
import { ImgWrapper, AnimalWrapper, InfoWrapper } from './style/animal'
import CatDefaltImg from '../assets/image/noun_Cat_3393318.svg'
import DogDefaltImg from '../assets/image/noun_Dog_912128.svg'
import { cityNo } from '../apiHelper'
import BoxLoading from '../assets/image/Pulse.svg'
import Loading from '../components/loading'

const AnimalBox = ({ searchData }) => {
  const transferCity = (item) => {
    let city = Object.keys(cityNo).indexOf(item)
    return Object.values(cityNo)[city]
  }

  return (
    <>
      <AnimalWrapper>
        {searchData.length > 0 &&
          Object.values(searchData)
            // .slice(0, 100)
            .map((item) => {
              return (
                <ImgWrapper key={item.animal_id}>
                  <LazyLoad
                    height={150}
                    offset={[-200, 0]}
                    placeholder={<Loading icon={BoxLoading} />}
                    debounce={500}
                  >
                    <img
                      alt={item.animal_kind}
                      src={
                        item.album_file === ''
                          ? item.animal_kind === '貓'
                            ? CatDefaltImg
                            : DogDefaltImg
                          : item.album_file
                      }
                    />
                  </LazyLoad>
                  <InfoWrapper>
                    <span>種類：{item.animal_kind}</span>
                    <span>顏色：{item.animal_colour}</span>
                    <span>體型：{item.animal_bodytype}</span>
                    <span>性別：{item.animal_sex}</span>
                    <span>
                      地區：{transferCity(item.animal_area_pkid.toString())}
                    </span>
                  </InfoWrapper>
                </ImgWrapper>
              )
            })}
      </AnimalWrapper>
    </>
  )
}

export default AnimalBox
