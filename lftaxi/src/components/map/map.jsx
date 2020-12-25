import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl'
import './map.css';

const Map = () => {
    let map = null;
    let mapContainer = React.createRef();

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1Ijoia2lyaWxsYnkiLCJhIjoiY2tqNGdjZjQ2NW9mczJ5bGJ5aTc2YW9scSJ9.guhMigdyD6t_-REv71-4jQ"

        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [27.4756504, 53.9429126], // LED
            zoom: 12,
        })

        return () => {
            map.remove();
          }
    }, []);

    return (
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={mapContainer}/>
        </div>
    )
};

export default Map;