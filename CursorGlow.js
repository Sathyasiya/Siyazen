import React, { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0,
        width: 520,
        height: 520,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(201,169,110,0.045) 0%, transparent 65%)',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.12s ease, top 0.12s ease',
      }}
    />
  );
}
