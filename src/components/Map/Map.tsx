"use client";

//order of leaflet imports matter; preserve spacing to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import PizzaIcon from '@/icons/pizza.png'
import * as T from '@/libs/types'

interface MapProps {
    pizzerias: T.Pizzeria[];
}

export default function Map({pizzerias}: MapProps) {
    
    //Can extend Icon to customize further
    const pizzaIcon = new Icon({
        iconUrl: PizzaIcon.src,
    });
    
    const pizzeriaMarkers = pizzerias.map(pizzeria => {
        const {latitude, longitude} = pizzeria.location;

        return (
            <Marker
                key={pizzeria.id}
                icon={pizzaIcon}
                position={[latitude, longitude]}
                eventHandlers={{
                    mouseover: (event) => event.target.openPopup(),
                    mouseout: (event) => event.target.closePopup(),
                }}
            >
                <Popup>
                    <p>{pizzeria.name}</p>
                </Popup>
            </Marker>
        );
    });

    return (
    <MapContainer
        center={[40, -73]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "600px" }}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pizzeriaMarkers}
    </MapContainer>
    );
}