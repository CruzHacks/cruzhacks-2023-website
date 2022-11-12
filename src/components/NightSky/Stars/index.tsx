import React from "react"
import Particles from "react-tsparticles"

const Stars: React.FC = () => (
  <div className='stars'>
    <Particles
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            limit: 0,
            value: 30,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  </div>
)

export default Stars