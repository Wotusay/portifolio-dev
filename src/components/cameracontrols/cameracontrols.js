import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three/src/Three'

import { useObserver } from 'mobx-react-lite'
import { useThree, useFrame, extend } from "react-three-fiber";

extend({ OrbitControls });

const CameraControls = () => {
    const {
        camera,
        gl: {domElement} 
    } = useThree()
    const minPan = new THREE.Vector3( - 2, - 0.5, - 1 )
    const maxPan = new THREE.Vector3(  60,  0.5, 0)
    const v = new THREE.Vector3()
    const controls = useRef();
    useEffect(() => {
        if(controls.current) {
            let cntrl = controls.current
            cntrl.addEventListener('change' , () => {
                v.copy(cntrl.target);
                cntrl.target.clamp(minPan, maxPan);
                v.sub(cntrl.target);
                camera.position.sub(v)
            });
        }
    }, [controls.current])

    useFrame(() => controls.current.update())
    return useObserver(() =>
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