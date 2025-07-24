import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function BoxWithLid({ isOpen, onClick, texture }) {
  const lidRef = useRef();
  // Animate the lid's rotation
  useFrame(() => {
    if (lidRef.current) {
      lidRef.current.rotation.x += ((isOpen ? -Math.PI / 2 : 0) - lidRef.current.rotation.x) * 0.15;
    }
  });
  return (
    <group onClick={onClick} style={{ cursor: 'pointer' }}>
      {/* Main box */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 2, 2]} />
        <meshStandardMaterial map={texture} color="#e0a96d" />
        {/* Label */}
        <Html position={[2.05, 0.5, 0]} rotation={[0, Math.PI / 2, 0]} center style={{ pointerEvents: 'none' }}>
          <div style={{
            background: '#fff',
            padding: '2px 16px',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#b06d00',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            border: '1px solid #e0a96d',
            opacity: 0.92
          }}>
            MAHARSHI
          </div>
        </Html>
      </mesh>
      {/* Lid */}
      <mesh ref={lidRef} position={[0, 2.01, -1]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial map={texture} color="#b06d00" />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <shadowMaterial opacity={0.25} />
    </mesh>
  );
}

export default function Packaging3D() {
  const [isOpen, setIsOpen] = useState(false);
  // Load the texture ONCE here
  const texture = useLoader(THREE.TextureLoader, '/cardboard.jpg');
  return (
    <div style={{ width: 400, height: 320, cursor: 'pointer' }}>
      <Canvas camera={{ position: [6, 4, 10], fov: 40 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <BoxWithLid isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} texture={texture} />
        <Ground />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div style={{textAlign:'center',marginTop:8,fontWeight:'bold',color:'#b06d00'}}>Click the box to open/close</div>
    </div>
  );
} 