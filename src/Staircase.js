import React from 'react';

const Staircase = ({ x, y }) => {
  const width = 10; // Width of the layout
  const height = 20; // Height of the layout

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="gray"
      stroke="black"
    />
  );
};

export default Staircase;
