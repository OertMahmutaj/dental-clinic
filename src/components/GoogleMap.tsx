'use client';

import { useEffect, useRef } from 'react';
import { useGoogleMaps } from '@/lib/googleMapsLoader';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 41.3258039,
  lng: 19.8269137
};

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null); // Add this
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null); // Add this
  const { isLoaded } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const initMap = async () => {
      // Import the marker library
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      // Create map
      const map = new Map(mapRef.current!, {
        center: center,
        zoom: 15,
        mapId: 'YOUR_MAP_ID',
      });

      markerRef.current = new AdvancedMarkerElement({
        map: map,
        position: center,
        title: 'Klinika Dentare Adi Dent',
      });
    };

    initMap();
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading map...</div>;

  return <div ref={mapRef} style={mapContainerStyle} />;
}