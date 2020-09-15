import React, { useRef, useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import Texture from '../texture/texture';
import { useStore } from '../../hooks/useStores';
import * as THREE from 'three/src/Three'
import { useFrame, useThree } from 'react-three-fiber';
import { animated, useSpring } from 'react-spring-three'



const Scene = () => {
  const {projectStore} = useStore();
  const ref = useRef();
  const {camera} = useThree();
  let num = 1;


  const v = new THREE.Vector3();
  const [point, setPoint] = useState(v);


  const test = e => {
    setPoint(e.object.position);
  }



  return useObserver(() =>(
    <>

    {projectStore.projects.map(project => (
      <>
      <group onPointerMove={(e) => test(e)}>
      <Texture 
      name={point.x <= 0 ? 'Fixing your shoe!' : point.x <= 10 ? 'Plastic Catch' : point.x <= 20 ? 'Tropico' : point.x <= 30 ? 'HoneyHome' : point.x <= 40 ? 'Humo webshop and Longread' : point.x <= 50 ? 'GamingGram' : point.x <= 60 ? 'Work it out!' : ''}
      point={point.x}
      key={project.id} position={project.title === 'Fixing your shoe!' ? [0,0,-1] : project.title === 'Plastic Catch' ? [10,0,-1] : project.title === 'Tropico' ? [20,0,-1] : project.title === 'HoneyHome' ? [30,0,-1] : project.title === 'Humo webshop and Longread' ? [40,0,-1] : project.title === 'GamingGram' ?  [50,0,-1] : [60,0,-1]} num={num++} project={project} ></Texture>
      </group>
      </>

    ))}

    </>
  ))
}

export default Scene;