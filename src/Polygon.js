import React from 'react';

const Polygon = ({ points }) => {
  const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      <polygon points={pointsString} fill="lightblue" stroke="blue" strokeWidth="1" />
    </svg>
  );
};

export default Polygon;
