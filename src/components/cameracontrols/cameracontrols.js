import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useRef } from 'react'
import * as THREE from 'three/src/Three'

import { useObserver } from 'mobx-react-lite'
import { useThree, useFrame, extend } from "react-three-fiber";

extend({ OrbitControls });

const CameraControls = () => {
    const {
        camera,
        gl: {domElement} 
    } = useThree()

    const controls = useRef();
    useFrame(state => controls.current.update())

    return(
        <orbitControls
            ref={controls}
            args={[camera,domElement]}
            enableZoom={false}
            enableRotate= {false}
            mouseButtons= {
              {  LEFT: THREE.MOUSE.PAN,
                MIDDLE: THREE.MOUSE.PAN,
                RIGHT: THREE.MOUSE.PAN}
            } 
            touches = { 
                {ONE: THREE.TOUCH.PAN}
            }
            panSpeed={5}
            keyPanSpeed = {1250}
            minDistance  ={0}
            maxDistance  = {10}
            screenSpacePanning = {true}
            enableDamping = {true} 
        />
    )
}

export default CameraControls;