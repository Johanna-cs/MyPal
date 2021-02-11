import React, {useState, useMapEvents} from 'react'
import './map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Menu from '../Menu'
import ReturnButton from '../Common/ReturnButton'

const BookStores = () => {
    const position = [43.3, 5.4]
    // const [position, setPosition] = useState(null)
    // const map = useMapEvents({
    //     click() {
    //       map.locate()
    //     },
    //     locationfound(e) {
    //       setPosition(e.latlng)
    //       map.flyTo(e.latlng, map.getZoom())
    //     },
    //   }) 

    return(
        <>
        <div className='page_map'> 
            <div className='map_header'>
                <ReturnButton />
                <h3>Trouver une librairie</h3>
            </div>
           <div className='leaflet-container'>
           <MapContainer
                    center={position}
                    zoom={14}
                    scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={position}>
                    <Popup>
                        <b>Les mots dans l'eau</b>  <br /> Les Cinq Avenues.
                    </Popup>
                </Marker>
            </MapContainer>,
           </div>

        
        </div>
        <Menu />
        </>
    )


}
export default BookStores