import React, { useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { PointType } from '../types';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks';
import { URL_MARKER_CURRENT, URL_MARKER_STANDART } from '../config';

type MapProps = {
  points: PointType[];
}

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [32, 32],
  iconAnchor: [20, 40]
});

const standartIcon = new Icon({
  iconUrl: URL_MARKER_STANDART,
  iconSize: [32, 32],
  iconAnchor: [20, 40]
});


export default function Map(props: MapProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const highlightedMarker = useAppSelector((state) => state.highlightedMarker);
  const {points} = props;
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
        let icon;
        if (point === highlightedMarker) {
          icon = currentIcon;
        } else {
          icon = standartIcon;
        }
        marker
          .addTo(markerLayer);
      });

      map.setView([city.lat, city.lng], 11);
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, highlightedMarker, city]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
