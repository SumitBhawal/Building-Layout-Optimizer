export const calculatePolygonArea = (points) => {
    let area = 0;
    const n = points.length;
    
    for (let i = 0; i < n; i++) {
      const { x: x1, y: y1 } = points[i];
      const { x: x2, y: y2 } = points[(i + 1) % n];
      area += (x1 * y2 - x2 * y1);
    }
    
    return Math.abs(area) / 2;
};

export const calculateRentalIncome = (area) => {
  const term1 = -1.51 * Math.pow(area, 2);
  const term2 = 65.98 * area;
  const term3 = 17177;
  
  return term1 + term2 + term3;
};

export const calculateRoomArea = (width, height) => {
  return width * height;
};
