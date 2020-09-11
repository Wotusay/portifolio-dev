import React from 'react';
import { useObserver } from "mobx-react-lite";
import Scene from './components/scene/scene';
import {Canvas} from 'react-three-fiber';



function App() {

    return useObserver(() => (
        <>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Scene></Scene>
        </Canvas>
        </>
    ));

}

export default App;
