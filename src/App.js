import React from 'react';
import Polygon from './Polygon';
import Room from './Room';
import Hallway from './Hallway';
import Staircase from './Staircase';
import { calculateRentalIncome, calculateRoomArea } from './utils';
import './App.css';


const App = () => {
  const polygons = [
    [
      { x: 0, y: 19.35 },
      { x: 6.11, y: 20.06 },
      { x: 14.8, y: 8.74 },
      { x: 15.31, y: 0 },
      { x: 0, y: 0 }
    ],
  ];

  // Scale factor to fit SVG viewbox
  const scaleFactor = 20;

  return (
    <div className="app-container">
      {polygons.map((points, index) => {
        const scaledPoints = points.map(p => ({ x: p.x * scaleFactor, y: p.y * scaleFactor }));

        // Adjusted room and hallway dimensions within the polygon
        const room1 = { x: 1, y: 1, width: 5, height: 5 };
        const room2 = { x: 7, y: 1, width: 5, height: 5 };
        const room3 = { x: 1, y: 7, width: 5, height: 5 };
        const room4 = { x: 7, y: 7, width: 5, height: 5 };
        const hallway1 = { x: 6, y: 1, width: 1, height: 11 }; // Adjusted hallway width to fit better within the SVG
        const staircase = { x: 12, y: 1 };

        // Calculate the area and rental income for each room
        const room1Area = calculateRoomArea(room1.width, room1.height);
        const room2Area = calculateRoomArea(room2.width, room2.height);
        const room3Area = calculateRoomArea(room3.width, room3.height);
        const room4Area = calculateRoomArea(room4.width, room4.height);
        const totalRoomArea = room1Area + room2Area + room3Area + room4Area;
        const totalRentalIncome = calculateRentalIncome(totalRoomArea);

        return (
          <div key={index} className="svg-container">
            <svg width="500" height="500" viewBox="0 0 500 500">
              <Polygon points={scaledPoints} />
              <Room x={room1.x * scaleFactor} y={room1.y * scaleFactor} width={room1.width * scaleFactor} height={room1.height * scaleFactor} />
              <Room x={room2.x * scaleFactor} y={room2.y * scaleFactor} width={room2.width * scaleFactor} height={room2.height * scaleFactor} />
              <Room x={room3.x * scaleFactor} y={room3.y * scaleFactor} width={room3.width * scaleFactor} height={room3.height * scaleFactor} />
              <Room x={room4.x * scaleFactor} y={room4.y * scaleFactor} width={room4.width * scaleFactor} height={room4.height * scaleFactor} />
              <Hallway x={hallway1.x * scaleFactor} y={hallway1.y * scaleFactor} width={hallway1.width * scaleFactor} height={hallway1.height * scaleFactor} />
              <Staircase x={staircase.x * scaleFactor} y={staircase.y * scaleFactor} />
            </svg>
            <p>Total Area: {totalRoomArea} sqm</p>
            <p>Total Rental Income: {totalRentalIncome.toFixed(2)} yen</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
