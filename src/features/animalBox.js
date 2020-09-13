import React from 'react'
import LazyLoad from 'react-lazyload'
import { ImgWrapper, AnimalWrapper, InfoWrapper } from './style/animal'
import CatDefaltImg from '../assets/image/noun_Cat_3393318.svg'
import DogDefaltImg from '../assets/image/noun_Dog_912128.svg'

const AnimalBox = ({ searchData }) => {
  return (
    <AnimalWrapper>
      {searchData.length > 0 &&
        Object.values(searchData)
          .slice(0, 100)
          .map((item) => {
            return (
              <ImgWrapper key={item.animal_id}>
                <LazyLoad height={200} offset={[-100, 0]}>
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
                  <span>種類:{item.animal_kind}</span>
                  <span>顏色:{item.animal_colour}</span>
                  <span>體型:{item.animal_bodytype}</span>
                  <span>性別:{item.animal_sex}</span>
                  <span>地區:{item.animal_area_pkid}</span>
                </InfoWrapper>
              </ImgWrapper>
            )
          })}
    </AnimalWrapper>
  )
}

export default AnimalBox
