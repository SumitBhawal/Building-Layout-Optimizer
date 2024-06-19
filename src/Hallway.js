import React from 'react';

const Hallway = ({ x, y, width, height }) => {
  return (
    <rect x={x} y={y} width={width} height={height} fill="lightgray" stroke="black" strokeWidth="1" />
  );
};

export default Hallway;
