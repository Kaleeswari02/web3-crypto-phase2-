'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function MainCoin() {
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh>
        {/* Coin base */}
        <cylinderGeometry args={[2, 2, 0.6, 64]} />
        <meshStandardMaterial color={'#111'} metalness={0.7} roughness={0.4} />

        {/* Gradient logo */}
        <mesh position={[0, 0.31, 0.01]}>
          <boxGeometry args={[1.2, 0.35, 0.1]} />
          <meshStandardMaterial
            color={'#00f0ff'}
            emissive={'#00ffcc'}
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0, -0.31, 0.01]}>
          <boxGeometry args={[1.2, 0.35, 0.1]} />
          <meshStandardMaterial
            color={'#9b4dff'}
            emissive={'#aa00ff'}
            emissiveIntensity={0.6}
          />
        </mesh>
      </mesh>
    </Float>
  );
}

function FloatingToken({ texture, position }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position}>
        <circleGeometry args={[0.6, 64]} />
        <meshStandardMaterial
          map={texture}
          transparent
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function CryptoScene() {
  // Example textures (replace with real logos if you want)
  const loader = new THREE.TextureLoader();
  const btc = loader.load('/btc.png');
  const eth = loader.load('/eth.png');
  const doge = loader.load('/doge.png');
  const tether = loader.load('/tether.png');
  const ada = loader.load('/ada.png');

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <MainCoin />

        {/* Floating tokens around */}
        <FloatingToken texture={btc} position={[3, 1, -1]} />
        <FloatingToken texture={eth} position={[-3, -1, 1]} />
        <FloatingToken texture={doge} position={[2, -2, -2]} />
        <FloatingToken texture={tether} position={[-2.5, 2, 0]} />
        <FloatingToken texture={ada} position={[1, 3, 1]} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
