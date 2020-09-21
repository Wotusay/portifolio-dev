import { animated } from 'react-spring-three'
import * as THREE from 'three/src/Three'
import React, { useRef, useMemo } from 'react'
import { useObserver } from 'mobx-react-lite'
import {Html} from 'drei';
import styles from "./texture.module.css"
import { useMediaQuery } from 'react-responsive';

const Texture = ({project, position,name, point}) => {
    const mesh = useRef();
    const smallScreen = useMediaQuery({minWidth: '320px', maxWidth:'400px'})
    const normalScreen = useMediaQuery({minWidth: '600px'})
    const img = project.image;
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
        <boxBufferGeometry attach="geometry" args={smallScreen === true ? [5.5, 4, 0] : normalScreen === true ? [7.5, 4, 0] :[7.5, 4, 0]} />
        <meshBasicMaterial attach="material" transparent >
        <primitive attach="map" object={texture} castShadow />
        </meshBasicMaterial>
        <Html 
        center
        scaleFactor={30} 
        className={styles.container}
        >
          <a href={project.url} className={styles.title}>{project.title}</a>
          
        </Html>
      </animated.mesh>
      </>
    ))
}

export default Texture;