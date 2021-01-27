import React, {useEffect} from 'react';
import mapboxgl, {addLayer} from 'mapbox-gl'
import './map.css';
import OrderForm from './../order-form';
import {connect} from 'react-redux';

const Map = ({route}) => {
    let map = null;
    let mapContainer = React.createRef();

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1Ijoia2lyaWxsYnkiLCJhIjoiY2tqNGdjZjQ2NW9mczJ5bGJ5aTc2YW9scSJ9.guhMigdyD6t_-REv71-4jQ"

        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [27.5556504, 53.9029126], 
            zoom: 12,
        })

        if(route !== null){
            drawRoute(map, route)
        }

        return () => {
            map.remove();
          }
    }, [route]);

    return (
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={mapContainer}>
                <div className="order_container">
                <OrderForm/>
                </div>
            </div>
        </div>
    )
};

export const drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 15
    });
    map.on('load', function () {
      map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates
                }
              }
            },
            layout: {
              "line-join": "round",
              "line-cap": "round"
            },
            paint: {
              "line-color": "#ffc617",
              "line-width": 8
            }
        });
      })
  };


export default connect(
    (state) => ({
        route: state.addresses.route,
     })
)(Map);