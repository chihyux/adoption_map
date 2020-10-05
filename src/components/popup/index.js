import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
// import { key } from '../../api/mapkeys'
import { MapWrapper } from './style/popUpBox'
import Marker from './marker'

const PopUpBox = ({ mapHandler, place }) => {
  const [position, setPosition] = useState({
    lat: 25.0,
    lng: 121.46,
  })
  const [marker, setMarker] = useState(null)

  let request = {
    input: place,
    fields: ['name', 'geometry'],
  }

  const autoSearch = (map, maps) => {
    const service = new maps.places.AutocompleteService(map)
    service.getPlacePredictions(request, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        const id = results[0].place_id
        return getDetail(id, map, maps)
      }
    })
  }

  const getDetail = (id, map, maps) => {
    let place = {
      placeId: id,
      fields: [
        'name',
        'place_id',
        'rating',
        'user_ratings_total',
        'formatted_address',
        'formatted_phone_number',
        'geometry',
        'opening_hours',
      ],
    }
    const service = new maps.places.PlacesService(map)
    service.getDetails(place, (place, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        setMarker(place)
        setPosition({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        })
      }
    })
  }

  const key = process.env.REACT_APP_GOOGLE_KEY
  console.log(key)
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: key,
          libraries: ['places'],
        }}
        defaultCenter={{ lat: 23.57, lng: 120.38 }}
        defaultZoom={17}
        center={{ lat: position.lat, lng: position.lng }}
        zoom={17}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          autoSearch(map, maps)
        }}
      >
        {marker && (
          <Marker
            key={marker.place_id}
            lat={position.lat}
            lng={position.lng}
            data={marker}
          />
        )}
      </GoogleMapReact>
    </MapWrapper>
  )
}

export default PopUpBox
