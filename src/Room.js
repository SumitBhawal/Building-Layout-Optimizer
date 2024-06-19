import React from 'react';

const Room = ({ x, y, width, height }) => {
  return (
    <rect x={x} y={y} width={width} height={height} fill="lightgreen" stroke="black" strokeWidth="1" />
  );
};

export default Room;
