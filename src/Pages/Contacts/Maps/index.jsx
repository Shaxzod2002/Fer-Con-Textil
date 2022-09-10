import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
    return (
        <div>
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=fer%20kon%20tekstil&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    )
}

export default React.memo(MyComponent)