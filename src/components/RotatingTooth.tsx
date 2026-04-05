// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Suspense, useRef, useState } from "react";
// import { GLTF } from "three-stdlib";
// import * as THREE from "three";

// function ToothModel() {
//     const gltf = useGLTF("/tooth_brushes_and_paste.glb") as GLTF;
//     const ref = useRef<THREE.Object3D>(null);
//     const [hovered, setHovered] = useState(false);

//     useFrame((state, delta) => {
//         if (ref.current) {
//             ref.current.rotation.y += delta * (hovered ? 2 : 0.5);
//         }
//     });

//     return (
//         <primitive
//             ref={ref}
//             object={gltf.scene}
//             scale={0.2}
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//         />
//     );
// }

// export default function RotatingTooth() {
//     return (
//         <Canvas style={{ height: 150 }} camera={{ position: [0, 0, 3], fov: 50 }}>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[0, 5, 5]} intensity={1} />
//             <Suspense fallback={null}>
//                 <ToothModel />
//             </Suspense>
//             <OrbitControls enableZoom={false} autoRotate={false} />
//         </Canvas>
//     );
// }