'use client';

import React, { useEffect, useRef } from 'react';
import { useGoogleMaps } from '@/lib/googleMapsLoader';

const center = {
  lat: 41.3258039,
  lng: 19.8269137
};

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const initMap = async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const map = new Map(mapRef.current!, {
        center: center,
        zoom: 16,
        mapId: '65d9f4f99d6a668ec378d708', // Using your specific Map ID
        disableDefaultUI: false,
        zoomControl: true,
      });

      new AdvancedMarkerElement({
        map: map,
        position: center,
        title: 'Klinika Dentare Adi Dent',
      });
    };

    initMap();
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
        <p style={{ fontWeight: 600 }}>Duke ngarkuar hartën...</p>
      </div>
    );
  }

  return <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }} />;
}