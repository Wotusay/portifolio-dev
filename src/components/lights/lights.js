import { useObserver } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three/src/Three'
import Scene from '../scene/scene';


const Lights = ({project}) => {

    return ( 
        <>
            <Scene></Scene>
        </>
    )
}

export default Lights;