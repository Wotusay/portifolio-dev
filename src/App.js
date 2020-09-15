import React, { useRef, useState } from 'react';
import { useObserver } from "mobx-react-lite";
import Scene from './components/scene/scene';
import {Canvas} from 'react-three-fiber';
import CameraControls from './components/cameracontrols/cameracontrols';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'
import Interface from './components/interface/interface';
import { useFrame, useThree, useUpdate} from 'react-three-fiber';
import * as THREE from 'three/src/Three'
import Lights from './components/lights/lights';


const App = () => {
    return useObserver(() => (
        <>
        <Interface />
        <Canvas
        gl={{antialias:true}}
        shadowMap
        >
        <CameraControls  />
        <Lights/>
            <EffectComposer>
            <Noise opacity={0.025} />
            <DepthOfField focusDistance={0.01}  focalLength={20} bokehScale={2} height={480} />
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.5} height={600} opacity={0.3} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </Canvas>
        </>
    ));

}

export default App;
