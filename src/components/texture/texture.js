import { animated, useSpring } from 'react-spring-three'
import * as THREE from 'three/src/Three'
import React, { useState, useRef, useMemo } from 'react'
import { useObserver } from 'mobx-react-lite'

const Texture = ({project, position,num}) => {
    const mesh = useRef();
    const img = project.image;
    console.log(`this is the current position of ${project.title} = [${position[0] + num}, ${position[1] + num}, ${position[2] + num}] , and the picture is ${img}`)
    const texture = useMemo(() => new THREE.TextureLoader().load(img), [img])

    return useObserver(() => (
      <group>
        <animated.mesh
        ref={mesh}
        position= {position}
        scale={[1, 1, 1]}
        castShadow
        >
        <boxBufferGeometry attach="geometry" args={[7.5, 4, 0]} />
        <meshBasicMaterial attach="material" transparent >
        <primitive attach="map" object={texture} castShadow />
        </meshBasicMaterial>
      </animated.mesh>

      <mesh
         position={[0, 0, -3]}
         receiveShadow>
         <boxBufferGeometry attach='geometry' args={[100,100]} />
         <shadowMaterial attach='material' opacity={0.4} color="#4CAEEC" />
       </mesh>
      </group>
    ))
}

export default Texture;