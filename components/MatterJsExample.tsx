'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const MatterJsExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;
    const Composite = Matter.Composite;
    const Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showVelocity: true,
        wireframes: false,
        background: 'transparent',
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    Composite.add(world, [
      // falling blocks with different air friction
      Bodies.rectangle(200, 100, 60, 60, {
        frictionAir: 0.001,
        render: { fillStyle: '#002ab3' },
      }),
      Bodies.rectangle(400, 100, 60, 60, {
        frictionAir: 0.05,
        render: { fillStyle: '#3b82f6' },
      }),
      Bodies.rectangle(600, 100, 60, 60, {
        frictionAir: 0.1,
        render: { fillStyle: '#60a5fa' },
      }),

      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: { fillStyle: '#1f2937' } }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: { fillStyle: '#1f2937' } }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: { fillStyle: '#1f2937' } }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { fillStyle: '#1f2937' } }),
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      if (render.canvas?.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
    };
  }, []);

  return (
    <div className='absolute inset-y-0 left-1/2 flex w-screen -translate-x-1/2 flex-col items-center bg-amber-300/20'>
      <div ref={containerRef} className='size-full overflow-hidden' />
    </div>
  );
};

export default MatterJsExample;
