import { usePlane } from '@react-three/cannon';
import {
	glassTexture,
	BAZALTaoTexture
} from '../images/textures'

export const Ground = () => {


    const [ref] = usePlane(() => ({ 
		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
    }));


    glassTexture.repeat.set(200,200);

    return (
		<mesh
			ref={ref}		>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={BAZALTaoTexture} />
		</mesh>
    );
}