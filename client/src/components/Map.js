import React, {useState, useEffect,useContext} from 'react'
import GoogleMapReact from 'google-map-react';
import ForestIcon from '@mui/icons-material/Forest';
import { Typography } from '@mui/material';

const LocationPin = ({ text, onClick }) => (
    <div className="pin" onClick={onClick}>
        <ForestIcon color='error' className='pin-icon'/>
        <p className="pin-text">{text}</p>
    </div>
)

const Map = ({campsites}) => {
    const [key,setKey]=useState(null)
    const [selected, setSelected] = useState({
        center: {
          lat: 45.512230,
          lng: -122.658722
        },
        zoom: 8
    });

    useEffect(() => {
      let cancel = false;
        fetch("/mapskey").then((r) => {
          if (cancel) return
          if (r.ok) {
            r.json().then((key) => setKey(key.private_key));
          }
        });
        return () => { 
          cancel = true;
        }
      }, []);

    const defaultProps = {
        center: {
          lat: 45.512230,
          lng: -122.658722
        },
        zoom: 8
    };

    if (!key) return <Typography variant='h2'> Loading</Typography>

  return (
    <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: `${key}`, language: "en" }}
            defaultCenter={defaultProps.center}
            center={selected.center}
            defaultZoom={defaultProps.zoom}
            zoom={selected.zoom}
        >
            {campsites.map((campsite)=>(
                <LocationPin
                    key={campsite.id}
                    lat={Number(campsite.latitude)}
                    lng={Number(campsite.longitude)}
                    text={campsite.name}
                    
                    onClick={() => {
                        setSelected({
                            center:
                                {lat:Number(campsite.latitude),
                                lng: Number(campsite.longitude)},
                            zoom: 10
                        });
                      }}
                />      
            ))}
        </GoogleMapReact>
    </div>
  )
}

export default Map

// Rails.application.credentials.dig(:maps, :private_key)