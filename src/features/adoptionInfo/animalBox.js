import React from 'react'
import LazyLoad from 'react-lazyload'
import { ImgWrapper, AnimalWrapper, InfoWrapper } from './style/animal'
import CatDefaltImg from '../../assets/image/noun_Cat_3393318.svg'
import DogDefaltImg from '../../assets/image/noun_Dog_912128.svg'
import { transferCity } from '../../constant/apiHelper'
import BoxLoading from '../../assets/image/Pulse.svg'
import Loading from '../../components/loading'
import { Link } from 'react-router-dom'

const AnimalBox = (props) => {
  return (
    <>
      <AnimalWrapper>
        {props.petData &&
          Object.values(props.petData).map((pet) => {
            return (
              <ImgWrapper key={pet.animal_id}>
                <Link to={{ pathname: `/detail/${pet.animal_id}`, state: pet }}>
                  <LazyLoad
                    height={150}
                    offset={[-200, 0]}
                    placeholder={<Loading icon={BoxLoading} />}
                    debounce={500}
                  >
                    <img
                      alt={pet.animal_kind}
                      src={
                        pet.album_file
                          ? pet.album_file
                          : pet.animal_kind === '貓'
                          ? CatDefaltImg
                          : DogDefaltImg
                      }
                    />
                  </LazyLoad>
                  <InfoWrapper>
                    <span>種類：{pet.animal_kind}</span>
                    <span>顏色：{pet.animal_colour}</span>
                    <span>體型：{pet.animal_bodytype}</span>
                    <span>性別：{pet.animal_sex}</span>
                    <span>
                      地區：{transferCity(pet.animal_area_pkid.toString())}
                    </span>
                  </InfoWrapper>
                </Link>
              </ImgWrapper>
            )
          })}
      </AnimalWrapper>
    </>
  )
}

export default AnimalBox
