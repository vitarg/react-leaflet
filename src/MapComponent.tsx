import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

const MapComponent = () => {
    const [coordinates, setCoordinates] = useState<LatLngExpression>([51.505, -0.09])
    const [zoom, setZoom] = useState<number>(10)

    return (
        <MapContainer center={coordinates} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default MapComponent
