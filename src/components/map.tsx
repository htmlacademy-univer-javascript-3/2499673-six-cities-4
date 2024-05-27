import React, { useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { CityType } from '../types';
import { PointType } from '../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
  points: PointType[];
  selectedPoint?: PointType;
}

export default function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });
        marker
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
