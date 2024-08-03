import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Pizza = () => {
  const { scene } = useGLTF("/pizza_box/scene.gltf");

  return (
    <primitive object={scene} scale={1.2} position-y={2} rotation-y={10} />
  );
};

const PizzaCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Lighting Setup */}
        <ambientLight intensity={9} />
        <directionalLight position={[0, 5, 4]} intensity={9.5} castShadow />
        <pointLight position={[0, 0, 0]} intensity={10} distance={20} />
        <spotLight
          position={[10, 10, 10]}
          angle={Math.PI / 6}
          penumbra={1}
          intensity={1.5}
          castShadow
        />

        <Pizza />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PizzaCanvas;
