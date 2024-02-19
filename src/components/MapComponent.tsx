import * as React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'
import { createCustomEqual } from 'fast-equals'
import exampleMapStyles from './constraints/mapStyles.json'

const latLngStudio = { lat: 49.84575394674439, lng: 24.02971348896511 }

const render = (status: Status) => {
  return <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>{status}</h1>
}

export const MapComponent: React.VFC = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([])
  const [zoom, setZoom] = React.useState(13) // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: latLngStudio.lat,
    lng: latLngStudio.lng
  })

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!])
  }

  const onIdle = (m: google.maps.MapComponent) => {
    setZoom(m.getZoom()!)
    setCenter(m.getCenter()!.toJSON())
  }

  return (
    <>
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        render={render}
      >
        <Map
          options={{
            styles: exampleMapStyles,
            language: 'en'
          }}
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          disableDefaultUI={true}
          style={{ flexGrow: '1', height: '100%' }}
        >
          <Marker map position={latLngStudio} />
        </Map>
      </Wrapper>
      </>
  )
}
interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      )

      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map })
        }
      })}
    </>
  )
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>()

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
    }

    return deepEqual(a, b)
  }
)

function useDeepCompareMemoize (value: any) {
  const ref = React.useRef()

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffectForMaps (
  callback: React.EffectCallback,
  dependencies: any[]
) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default MapComponent
