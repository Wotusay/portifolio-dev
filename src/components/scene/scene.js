import React, {useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import Texture from '../texture/texture';
import { useStore } from '../../hooks/useStores';
import { useFrame} from 'react-three-fiber';
import * as THREE from 'three/src/Three'



const Scene = () => {
  const {projectStore} = useStore();
  const v = new THREE.Vector3()
  const [pos, setPos] = useState(v)
  let num = 1
    useFrame(({camera}) => camera.updateProjectionMatrix(setPos(camera.position
      
      
      
      )));
  return useObserver(() =>(
    <>
    {projectStore.projects.map(project => (
      <Texture key={project.id} position={project.title == 'Fixing your shoe!' ? [0,0,-1] : project.title == 'Plastic Catch' ? [10,0,-1] : project.title == 'Tropico' ? [20,0,-1] : project.title == 'HoneyHome' ? [30,0,-1] : project.title == 'Humo webshop and Longread' ? [40,0,-1] : project.title == 'GamingGram' ?  [50,0,-1] : [60,0,-1]} num={num++} project={project} ></Texture>
    ))}

    </>
  ))
}

export default Scene;