"use client";

import React from "react";
import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 50, pointerEvents: 'none' }}>
            <Snowfall
                snowflakeCount={100}
                radius={[0.5, 3.0]}
                speed={[0.5, 3.0]}
                wind={[-0.5, 2.0]}
            />
        </div>
    );
}
