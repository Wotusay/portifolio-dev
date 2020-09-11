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
      <Texture key={project.id} position={[0,0,0]} num={num++} project={project} ></Texture>
    ))}
    </>
  ))
}

export default Scene;