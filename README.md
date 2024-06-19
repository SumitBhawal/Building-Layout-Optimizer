### OUTPUT 
![(OUTPUT)Building-Layout-Optimizer](https://github.com/swarup-cloud/Building-Layout-Optimizer/assets/56894217/7a739dff-e3a2-4077-9cbb-b744bc48b081)


# Building Layout Optimizer

This project is designed to visualize and optimize the layout of buildings using React. It displays an interactive layout of a building with designated areas for rooms, hallways, and a staircase, and calculates potential rental income based on the area of the rooms.

## Features

- Visual representation of building layouts with dynamic SVG elements.
- Interactive components showing rooms, hallways, and staircases.
- Calculation of total area and potential rental income based on predefined formulas.

## Technology Stack

This project is built using React and JavaScript, leveraging the following technologies:

- **React**: A JavaScript library for building user interfaces, which allows for the creation of reusable UI components.
- **JavaScript (ES6+)**: The programming language used to implement application logic and React component behaviour.
- **SVG**: Scalable Vector Graphics used to render the layout designs dynamically based on the input data.

These technologies provide the flexibility and efficiency required for developing interactive and dynamic web applications. React's component-based architecture is particularly well-suited for this project, allowing for a clear separation of concerns and easier management of the layout's state.


## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm are installed. If not, you can download them from [Node.js official website](https://nodejs.org/).

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://your-repository-link.git
   cd building-layout-optimizer

2. **Install dependencies:**
   ```bash
    - npm install

4. **Start the application:**
   ```bash
    - npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Usage

The application will display a polygon that represents the building's outer boundary. Within this boundary, rooms, a hallway, and a staircase are defined:

- Rooms are calculated and rendered based on their width and height.
- Hallways connect rooms and staircases.
- Staircases are fixed in size and positioned as defined.

## Rental Income Calculation
The potential rental income is calculated using the following formula:
- P_{unit} = -1.51  {area}^2 + 65.98  {area} + 17177

**Where:**
- 𝑃_{unit} is the rental income per unit area.
- area is the total area of the rooms.

This formula is used to determine the viability of the building layout in terms of rental income, providing a financial perspective on the layout optimization.

## Conclusion and Acknowledgments

- Developing the Building Layout Optimizer has been both challenging and rewarding. One of the primary challenges was accurately calculating and dynamically rendering the complex layout of the rooms, hallway, and staircase within the defined polygon. Managing state and props across multiple components to ensure that the UI is responsive and accurate requires careful planning and execution.

- Another challenge was implementing the formula for calculating rental income in a way that reflects real-time changes in the layout. This involved integrating mathematical logic with React state management, ensuring that updates to the layout would immediately reflect in the calculated income.

- Thanks to the power of React and JavaScript, coupled with a robust development strategy, these challenges were met with effective solutions that enhanced the application's functionality and user experience. The use of SVG for rendering the layout allowed for precise control over graphical elements, making it possible to create a visually appealing and highly interactive tool.

- I am grateful for the resources available in the React and JavaScript communities

- Thank you for taking the time to explore the Building Layout Optimizer. I hope it serves as a useful tool and inspires further development in the realm of architectural technology.

