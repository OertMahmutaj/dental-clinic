'use client';

import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { clinicInfo } from '@/lib/config';
import styled from 'styled-components';
import { InfoWindow } from '@react-google-maps/api';

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 12px;
`;

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: clinicInfo.coordinates.lat,
    lng: clinicInfo.coordinates.lng,
};

const options = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
};

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <LoadingContainer>Duke ngarkuar hartën...</LoadingContainer>;
    }

    return (
        <MapContainer>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
            >
                <Marker position={center}>
                    <InfoWindow position={center}>
                        <div>
                            <strong>{clinicInfo.name}</strong>
                            <br />
                            {clinicInfo.address}
                        </div>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        </MapContainer>
    );
}