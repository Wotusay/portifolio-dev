import React from 'react';
import { useObserver } from "mobx-react-lite";
import Scene from './components/scene/scene';
import {Canvas, extend} from 'react-three-fiber';
import CameraControls from './components/cameracontrols/cameracontrols';


function App() {

    return useObserver(() => (
        <>
        <Canvas
        gl={{antialias:true}}
        shadowMap
        >
        <CameraControls  />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 1.7, 3]}
          intensity={2}
          shadow-mapSize-width={100}
          shadow-mapSize-height={100}
        />

        <directionalLight
          castShadow
          position={[0, -1.7, 3]}
          intensity={2}
          shadow-mapSize-width={100}
          shadow-mapSize-height={100}
        />



        

            <Scene></Scene>
        </Canvas>
        </>
    ));

}

export default App;
