import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wind, Droplets, Thermometer, Eye, RefreshCw } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

// Fix Leaflet icon paths when bundled with Vite
delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LAT = 14.2727;
const LON = 121.1252;
const CENTER: [number, number] = [LAT, LON];

const WMO_CODES: Record<number, { label: string; emoji: string }> = {
  0: { label: 'Clear sky', emoji: '☀️' },
  1: { label: 'Mainly clear', emoji: '🌤️' },
  2: { label: 'Partly cloudy', emoji: '⛅' },
  3: { label: 'Overcast', emoji: '☁️' },
  45: { label: 'Foggy', emoji: '🌫️' },
  48: { label: 'Icy fog', emoji: '🌫️' },
  51: { label: 'Light drizzle', emoji: '🌦️' },
  53: { label: 'Drizzle', emoji: '🌦️' },
  55: { label: 'Heavy drizzle', emoji: '🌧️' },
  61: { label: 'Light rain', emoji: '🌧️' },
  63: { label: 'Rain', emoji: '🌧️' },
  65: { label: 'Heavy rain', emoji: '🌧️' },
  71: { label: 'Light snow', emoji: '🌨️' },
  73: { label: 'Snow', emoji: '❄️' },
  75: { label: 'Heavy snow', emoji: '❄️' },
  80: { label: 'Light showers', emoji: '🌦️' },
  81: { label: 'Showers', emoji: '🌧️' },
  82: { label: 'Heavy showers', emoji: '⛈️' },
  95: { label: 'Thunderstorm', emoji: '⛈️' },
  96: { label: 'Thunderstorm w/ hail', emoji: '⛈️' },
  99: { label: 'Thunderstorm w/ heavy hail', emoji: '⛈️' },
};

interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  weatherCode: number;
  updatedAt: Date;
}

function getCondition(code: number) {
  return WMO_CODES[code] ?? { label: 'Unknown', emoji: '🌡️' };
}

export default function CityInfoSection() {
  const { t } = useTranslation();
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${LAT}&longitude=${LON}` +
        `&current=temperature_2m,apparent_temperature,relative_humidity_2m,` +
        `wind_speed_10m,visibility,weather_code` +
        `&wind_speed_unit=kmh&timezone=Asia%2FManila`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch weather data');
      const json = await res.json();
      const c = json.current;

      setData({
        temperature: Math.round(c.temperature_2m),
        apparentTemperature: Math.round(c.apparent_temperature),
        humidity: c.relative_humidity_2m,
        windSpeed: Math.round(c.wind_speed_10m),
        visibility: Math.round(c.visibility / 1000),
        weatherCode: c.weather_code,
        updatedAt: new Date(),
      });
    } catch {
      setError('Unable to load weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const condition = data ? getCondition(data.weatherCode) : null;

  return (
    <Section id="city-info" className="bg-gradient-to-br from-sky-50 to-white">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Heading level={2}>{t('weather.title')}</Heading>
          <Text className="text-gray-500">{t('weather.subtitle')}</Text>
        </div>
        <button
          onClick={fetchWeather}
          disabled={loading}
          aria-label="Refresh weather"
          className="rounded-full p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition disabled:opacity-40"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

        {/* Temperature card — col 1, row 1 */}
        <div className="md:col-start-1 md:row-start-1 rounded-2xl bg-primary-600 text-white p-6 flex flex-col justify-between shadow-md min-h-[180px]">
          {loading && !data ? (
            <div className="flex-1 flex items-center justify-center text-primary-200 text-sm">
              Loading…
            </div>
          ) : data && condition ? (
            <>
              <div>
                <p className="text-4xl mb-2">{condition.emoji}</p>
                <p className="text-5xl font-bold leading-none">
                  {data.temperature}°C
                </p>
                <p className="text-primary-100 mt-2">{condition.label}</p>
              </div>
              <p className="text-primary-200 text-xs mt-4">
                Cabuyao City, Laguna &middot; Updated{' '}
                {data.updatedAt.toLocaleTimeString('en-PH', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </>
          ) : null}
        </div>

        {/* Map — col 2–3, row 1–2 */}
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm isolate min-h-[360px]">
          <MapContainer
            center={CENTER}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', minHeight: '360px' }}
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

        {/* Conditions card — col 1, row 2 */}
        <div className="md:col-start-1 md:row-start-2 rounded-xl bg-white border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">
            Current Conditions
          </p>
          {data ? (
            [
              {
                icon: <Droplets className="h-4 w-4 text-sky-500" />,
                label: 'Humidity',
                value: `${data.humidity}%`,
              },
              {
                icon: <Wind className="h-4 w-4 text-teal-500" />,
                label: 'Wind Speed',
                value: `${data.windSpeed} km/h`,
              },
              {
                icon: <Thermometer className="h-4 w-4 text-orange-400" />,
                label: 'Feels Like',
                value: `${data.apparentTemperature}°C`,
              },
              {
                icon: <Eye className="h-4 w-4 text-violet-400" />,
                label: 'Visibility',
                value: `${data.visibility} km`,
              },
            ].map(row => (
              <div
                key={row.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-gray-500">
                  {row.icon}
                  <span className="text-sm">{row.label}</span>
                </div>
                <span className="font-bold text-gray-800">{row.value}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400">Loading…</p>
          )}
        </div>

        {/* PAGASA card — full width, row 3 */}
        <div className="md:col-span-3 rounded-xl bg-sky-50 border border-sky-100 p-4 flex items-center gap-3">
          <span className="text-2xl">🌤️</span>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
              Source
            </p>
            <p className="text-sm text-gray-600">
              Open-Meteo &middot; PAGASA Station Data &middot; Map ©{' '}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                OpenStreetMap
              </a>{' '}
              contributors
            </p>
            <a
              href="https://pagasa.dost.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 hover:underline"
            >
              pagasa.dost.gov.ph ↗
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
