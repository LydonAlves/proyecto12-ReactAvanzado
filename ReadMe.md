# Green Cluster Farm Management System

## Project Description

The Green Cluster Farm Management System was developed to meet the specific needs of Green Cluster Farm, located in the North West province of South Africa. Green Cluster Farm specializes in cultivating passion fruits and distributing them to various markets. This system is designed to efficiently record and manage data related to harvests, deliveries, sales, and environmental factors. By utilizing this comprehensive data management tool, the farm can better manage their operations, cross-reference information, and make informed decisions regarding harvests, sales, and weather conditions.

### Challenges and Future Features:

- **Challenges**:
- As this was the first substantial project I created with React the main difficulty was changing over from vanilla js to React. 
- It took me some time to figure out how to split the code into clear easy to reuse components

- **Future Features**:
- The next steps would be to create a backend for this project and get the user to test it out and provide feedback so that any necessary missing features can be identified and added

## Features

- **Harvest Management**: Record data about each harvest, including date, and quantity of the passion fruits.
- **Delivery Tracking**: Log details of deliveries to various markets, including dates, quantities, and destinations.
- **Sales Recording**: Keep track of sales data, including sales agents, quantities sold, prices, and dates.
- **Environmental Data Logging**: Monitor and record environmental data specifically temperature to help analyze their impact on harvests and sales.
- **Data Analysis and Reporting**: Generate reports and cross-reference data to support decision-making processes.
- **Data Visualization**: Data is tracked in graphs which are updated as new data is added by the user.
- **Weather Information**: The maximum daily temperature of the area is shown in the header, fetched from the Tomorrow.io API.


## Dependencies

The project uses the following dependencies:

- `dotenv`: ^16.4.5
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.22.3
- `recharts`: ^2.12.3
- `uuid`: ^9.0.1

## Installation

To install and set up the Green Cluster Farm Management System frontend, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/green-cluster-farm.git
    ```
2. Navigate to the project directory:
    ```bash
    cd green-cluster-farm
    ```
3. Install the necessary dependencies:
    ```bash
    npm install dotenv react react-dom react-router-dom recharts uuid
    ```
4. Create a `.env` file in the root directory and add any necessary environment variables.
5. Start the application:
    ```bash
    npm start
    ```

## Figma design
I created the origional design for this project in Figma [Figma](https://www.figma.com/design/emXdgPPwRy2xSEwPsLIbBI/Untitled?node-id=0-1&t=HETSglGl8tkAPTGq-0).