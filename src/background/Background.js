import React from 'react';
import '../styles/background.css';

// [x, baseY, height] for each pine, in hill viewBox coordinates
const pines = [
  [90, 212, 46],
  [118, 208, 34],
  [150, 206, 52],
  [1050, 196, 44],
  [1084, 190, 60],
  [1120, 188, 40],
  [1300, 206, 50],
];

const pinePath = ([x, y, h]) =>
  `M${x},${y - h} L${x + h * 0.3},${y} L${x - h * 0.3},${y} Z`;

const leaves = [
  { left: '8%', delay: '0s', duration: '18s' },
  { left: '24%', delay: '6s', duration: '22s' },
  { left: '47%', delay: '11s', duration: '20s' },
  { left: '66%', delay: '3s', duration: '24s' },
  { left: '82%', delay: '9s', duration: '19s' },
  { left: '93%', delay: '14s', duration: '23s' },
];

const Background = () => {
  return (
    <div className="scenery" aria-hidden="true">
      <div className="sun" />

      {leaves.map((leaf, index) => (
        <svg
          key={index}
          className="leaf"
          viewBox="0 0 24 24"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        >
          <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Z" />
          <path d="M4 20 14 10" className="leaf-vein" />
        </svg>
      ))}

      <svg
        className="hills"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          className="hill hill-back"
          d="M0,160 C240,90 420,120 620,150 C820,180 1000,80 1200,100 C1320,112 1400,140 1440,150 L1440,320 L0,320 Z"
        />
        <g className="pines">
          {pines.map((pine, index) => (
            <path key={index} d={pinePath(pine)} />
          ))}
        </g>
        <path
          className="hill hill-mid"
          d="M0,220 C180,195 360,205 540,222 C760,245 920,185 1120,195 C1280,203 1380,225 1440,230 L1440,320 L0,320 Z"
        />
        <path
          className="hill hill-front"
          d="M0,272 C200,248 420,262 640,280 C860,298 1060,252 1260,258 C1360,262 1420,275 1440,280 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default Background;
