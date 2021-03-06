import React from 'react';
import { useObserver } from "mobx-react-lite";
import {Canvas} from 'react-three-fiber';
import CameraControls from './components/cameracontrols/cameracontrols';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'
import Interface from './components/interface/interface';
import Lights from './components/lights/lights';
import { Stars } from 'drei';
import { useStore } from './hooks/useStores';
import { useMediaQuery } from 'react-responsive';


const App = () => {

    const {projectStore} = useStore();
    const smallScreen = useMediaQuery({minWidth: '320px', maxWidth:'800px'});
    const normalScreen = useMediaQuery({minWidth: '800px'});

    return useObserver(() => (
        <>
        {projectStore.projects.length === 0 ? <p style={{color: "white", position: "absolute", fontSize: "3rem", top: "50%", left: "50%"}}>loading ...</p> : 
        <>
        <Interface />
        <Canvas
        gl={{antialias:true}}
        shadowMap
        camera={{position: [0, 0, 5]}}
        >
        <CameraControls  />
        <Lights/>
        {smallScreen ===  true ? '' :  normalScreen === true ?  <>         <EffectComposer>
            <Noise opacity={0.025} />
            <DepthOfField focusDistance={0.01}  focalLength={15} bokehScale={2} height={480} />
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.2} height={600} opacity={0.3} />
            <Vignette eskil={false} offset={0.1} darkness={0.9} />
            </EffectComposer>

            <Stars
            count={1500}
            saturation={0.5}
            />
            </> : <> <EffectComposer>
            <Noise opacity={0.025} />
            <DepthOfField focusDistance={0.01}  focalLength={15} bokehScale={2} height={480} />
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.2} height={600} opacity={0.3} />
            <Vignette eskil={false} offset={0.1} darkness={0.9} />
            </EffectComposer>

            <Stars
            count={1500}
            saturation={0.5}
            />
            </>
            }

        </Canvas>
        </>
        }
        </>
    ));

}

export default App;
