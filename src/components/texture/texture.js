import { animated, useSpring } from 'react-spring-three'
import * as THREE from 'three/src/Three'
import React, { useState, useRef, useMemo } from 'react'
import { useObserver } from 'mobx-react-lite'

const Texture = ({project, position, num}) => {
    const mesh = useRef();
    const img = project.image;
    console.log(`this is the current position of ${project.title} = [${position[0] + num}, ${position[1] + num}, ${position[2] + num}] , and the picture is ${img}`)
    const texture = useMemo(() => new THREE.TextureLoader().load(img), [img])

    return useObserver(() => (
        <animated.mesh
        ref={mesh}
        position= {[position[0] + num, position[1] - num, position[2] - num]}
        scale={[1, 1, 1]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" transparent >
        <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </animated.mesh>
    ))
}

export default Texture;