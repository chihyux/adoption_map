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
          Object.values(searchData).map((pet) => {
            return (
              <ImgWrapper key={pet.animal_id}>
                <LazyLoad
                  height={150}
                  offset={[-200, 0]}
                  placeholder={<Loading icon={BoxLoading} />}
                  debounce={500}
                >
                  <img
                    alt={pet.animal_kind}
                    src={
                      pet.album_file === ''
                        ? pet.animal_kind === '貓'
                          ? CatDefaltImg
                          : DogDefaltImg
                        : pet.album_file
                    }
                  />
                </LazyLoad>
                <InfoWrapper>
                  <span>種類：{pet.animal_kind}</span>
                  <span>顏色：{pet.animal_colour}</span>
                  <span>體型：{pet.animal_bodytype}</span>
                  <span>性別：{pet.animal_sex}</span>
                  {/* <span>
                    地區：{transferCity(pet.animal_area_pkid.toString())}
                  </span> */}
                </InfoWrapper>
              </ImgWrapper>
            )
          })}
      </AnimalWrapper>
    </>
  )
}

export default AnimalBox
