import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CENTER: [number, number] = [14.2727, 121.1252];
const ZOOM = 13;

export default function CityMapWidget() {
  return (
    <Section id="city-map" className="bg-white">
      <div className="mb-6">
        <Heading level={2}>Cabuyao City Map</Heading>
        <Text className="text-gray-500">
          Explore the 18 barangays of Cabuyao City, Laguna.
        </Text>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm isolate">
        <MapContainer
          center={CENTER}
          zoom={ZOOM}
          scrollWheelZoom={false}
          style={{ height: '420px', width: '100%' }}
          aria-label="Map of Cabuyao City, Laguna"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={CENTER}>
            <Popup>
              <strong>Cabuyao City Hall</strong>
              <br />
              Cabuyao City, Laguna
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <p className="mt-3 text-xs text-gray-400 text-right">
        Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:underline">OpenStreetMap</a> contributors
      </p>
    </Section>
  );
}
