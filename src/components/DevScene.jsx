import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";

function Scene() {
    const ref = useRef();

    useFrame(() => {
        if (!ref.current) return;

        const scrollY = window.scrollY;

        // 🔥 ONLY scroll rotation
        ref.current.rotation.y = scrollY * 0.002;
        ref.current.rotation.x = scrollY * 0.001;
    });

    return (
        <group ref={ref}>
            <Grid
                args={[10, 10]}
                cellSize={0.6}
                sectionSize={3}
                infiniteGrid
                fadeDistance={12}
                fadeStrength={2}
                followCamera={false}
            />
        </group>
    );
}

export default function DevScene() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full bg-[#05070a]">
            <Canvas camera={{ position: [0, 2.2, 6] }} gl={{ antialias: true }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <Scene />
            </Canvas>
        </div>
    );
}