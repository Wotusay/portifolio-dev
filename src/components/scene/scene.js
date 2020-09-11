import React from 'react'
import { useObserver } from 'mobx-react-lite'
import Texture from '../texture/texture';
import { useStore } from '../../hooks/useStores';


const Scene = () => {
  const {projectStore} = useStore();
  let num = 1
  return useObserver(() =>(
    <>
    {projectStore.projects.map(project => (
      <Texture key={project.id} position={project.title == 'Fixing your shoe!' ? [0,0,-1] : project.title == 'Plastic Catch' ? [10,0,-1] : project.title == 'Tropico' ? [20,0,-1] : project.title == 'HoneyHome' ? [30,0,-1] : project.title == 'Humo webshop and Longread' ? [40,0,-1] : project.title == 'GamingGram' ?  [50,0,-1] : [60,0,-1]} num={num++} project={project} ></Texture>
    ))}
    </>
  ))
}

export default Scene;