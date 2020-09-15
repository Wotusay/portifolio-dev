import { animated, useSpring } from 'react-spring-three'
import * as THREE from 'three/src/Three'
import React, { useRef, useMemo, useContext, useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import {Html} from 'drei';
import styles from "./texture.module.css"
import { useFrame, useThree, useUpdate } from 'react-three-fiber';

const Texture = ({project, position,name, point}) => {
    const mesh = useRef();
    
    const img = project.image;
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    console.log(point, name)
    const texture = useMemo(() => new THREE.TextureLoader().load(img), [img])
    return useObserver(() => (
      <>
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
        <Html 
        center
        scaleFactor={30} 
        className={styles.container}
        >
          <h1 className={styles.title}>{project.title}</h1>
          
        </Html>
      </animated.mesh>
      </>
    ))
}

export default Texture;