import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model() {
	const { scene } = useGLTF('./assets/3d/tomato.gltf');
	return <primitive object={scene} scale={0.01} />;
}

const Tomato: React.FunctionComponent = () => {
	return (
		<Canvas
			dpr={[1, 2]}
			shadows
			camera={{ fov: 60 }}
			style={{ width: '100%', height: '100%' }}>
			<PresentationControls
				enabled={true}
				global={true}
				cursor={true}
				speed={0.5}
				zoom={1}
				rotation={[0.35, -0.5, 0]}
				polar={[0, 0]}
				azimuth={[-Infinity, Infinity]}>
				<Stage environment={'forest'}>
					<Model />
				</Stage>
			</PresentationControls>
		</Canvas>
	);
};

export default Tomato;
