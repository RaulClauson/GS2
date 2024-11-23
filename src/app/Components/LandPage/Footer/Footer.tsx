"use client";

import Matter from "matter-js";
import { useEffect, useRef } from "react";
import "./Footer.css";
import { HiArrowNarrowUp } from "react-icons/hi";

const TriangleLogo = "/stickers/1.png";
const ParallelogramLogo = "/stickers/2.png";
const RhombusLogo = "/stickers/3.png";
const CircleLogo = "/stickers/4.png";
const TrapezeLogo = "/stickers/5.png";
const PentagonLogo = "/stickers/6.png";

const Footer = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create engine and world
    const engine = Matter.Engine.create();
    const { world } = engine;

    // Set initial gravity
    engine.world.gravity.y = 1;
    engine.world.gravity.x = 0;

    // Add device orientation handling
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma && event.beta) {
        // Convert degrees to gravity scale (normalize between -1 and 1)
        const gravityX = Math.min(Math.max(event.gamma / 45, -1), 1);
        const gravityY = Math.min(Math.max(event.beta / 45, -1), 1);

        engine.world.gravity.x = gravityX;
        engine.world.gravity.y = gravityY;
      }
    };

    // Request permission for device orientation (required for iOS)
    const requestPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        // @ts-ignore: Property 'requestPermission' does not exist
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          // @ts-ignore: Property 'requestPermission' does not exist
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (error) {
          console.error(
            "Error requesting device orientation permission:",
            error
          );
        }
      } else {
        // For non-iOS devices or when permission is not required
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    requestPermission();

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight * 0.7,
        wireframes: false,
        background: "transparent",
      },
    });

    // Add scroll handling to disable pointer events while scrolling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      render.canvas.style.pointerEvents = "none";
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        render.canvas.style.pointerEvents = "auto";
      }, 200);
    };

    render.canvas.addEventListener("wheel", handleScroll);

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Keep mouse in sync with rendering
    render.mouse = mouse;

    // Create container walls
    const wallThickness = 100;
    const containerHeight = window.innerHeight * 0.7;
    const walls = [
      // Bottom
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        containerHeight + wallThickness / 2,
        window.innerWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Left
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Right
      Matter.Bodies.rectangle(
        window.innerWidth + wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Top
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        -wallThickness / 2,
        window.innerWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
    ];

    // Create shapes
    const shapes = [
      // Triangle using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -80 }, // Top point
            { x: 63, y: 20 }, // Upper right
            { x: 20, y: 40 }, // Lower right
            { x: -20, y: 40 }, // Lower left
            { x: -63, y: 20 }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: TriangleLogo,
              xScale: 30 / 50,
              yScale: 30 / 50,
            },
          },
        }
      ),
      // Parallelogram
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -40, y: -30 }, // Top left
            { x: 60, y: -30 }, // Top right
            { x: 40, y: 30 }, // Bottom right
            { x: -60, y: 30 }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: ParallelogramLogo,
              xScale: 30 / 50,
              yScale: 30 / 50,
            },
          },
        }
      ),
      // Square rotated 45 degrees (diamond shape)
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -40, y: -40 }, // Top left
            { x: 25, y: -40 }, // Top right
            { x: 60, y: 60 }, // Bottom right
            { x: -40, y: 25 }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: RhombusLogo,
              xScale: 30 / 50,
              yScale: 30 / 50,
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50, // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: CircleLogo,
              xScale: 27 / 50,
              yScale: 27 / 50,
            },
          },
        }
      ),
      // Trapeze (using vertices)
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -50 }, // Top point
            { x: 40, y: -30 }, // Upper right
            { x: 65, y: 60 }, // Lower right
            { x: -65, y: 60 }, // Lower left
            { x: -40, y: -30 }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: TrapezeLogo,
              xScale: 30 / 50,
              yScale: 30 / 50,
            },
          },
        }
      ),
      // Pentagon using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -65 }, // Top point
            { x: 50, y: -20 }, // Upper right
            { x: 35, y: 48 }, // Lower right
            { x: -35, y: 48 }, // Lower left
            { x: -50, y: -20 }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: PentagonLogo,
              xScale: 30 / 50,
              yScale: 30 / 50,
            },
          },
        }
      ),
    ];

    // Add all bodies to the world
    Matter.Composite.add(world, [...walls, ...shapes, mouseConstraint]);

    // Start the engine and renderer
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      render.canvas.removeEventListener("wheel", handleScroll);
      render.canvas.remove();
      Matter.Engine.clear(engine);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div className="footer">
      <div ref={sceneRef} className="physics-container" />
      <div className="footer_content">
        <img
          src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732225851/Global%20Solution%202/Logo/hqmwveovjkttgedyruyr.png"
          alt=""
        />
        <h6>BY LERAMI</h6>
        <a href="">
          <h3>
            Voltar ao topo
            <HiArrowNarrowUp />
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Footer;
