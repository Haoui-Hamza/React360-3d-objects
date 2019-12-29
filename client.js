// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface,Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Algeria', { /* initial props */ }),
    r360.getDefaultSurface()
  );


  const images = new Surface (
    1000 ,
    200,
    Surface.SurfaceShape.Cylinder
  ) ;

  images.setAngle(
        1.4,
        0.9
  );

  r360.renderToSurface(
    r360.createRoot('image'), 
      images
  );

  // Render the model to the location
const location = new Location([0, -7, -2]);
r360.renderToLocation(
    r360.createRoot('image1', { /* initial props */ }),
    location
);

const llocation = new Location([5, -3, -7]);
r360.renderToLocation(
    r360.createRoot('image2', { /* initial props */ }),
    llocation
);

const lllocation = new Location([-5, -3 , -8]) ;
r360.renderToLocation(
  r360.createRoot('image3',{/* initial props */},),
  lllocation
)

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('6.jpg'));
}

window.React360 = {init};


