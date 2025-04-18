# Delivery Cost API

A Node.js API for calculating minimum delivery costs based on product locations and distances.

## Overview

This API calculates the minimum cost of delivering products from different collection centers to a logistics center (L1), taking into account product locations and distances between centers.

## Features

- Calculate minimum delivery cost based on order contents
- Handle multiple collection centers
- Support for various delivery route optimizations
- Error handling for invalid inputs

## Prerequisites

- Node.js (LTS version)
- npm (Node Package Manager)

## Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/delivery-cost-api.git
   cd delivery-cost-api
   ```

2. Install dependencies
   ```
   npm install
   ```

## Project Structure

```
delivery-cost-api/
├── app.js                  # Main application file
├── package.json            # Project configuration
├── routes/
│   └── deliveryRoute.js    # API routes
└── services/
    └── deliveryService.js  # Business logic
```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. The server will run at `http://localhost:3000`

3. Send POST requests to `/api/calculate-delivery-cost` with JSON body:
   ```json
   {
     "A": 1,
     "G": 1,
     "H": 1,
     "I": 3
   }
   ```

4. The API will respond with the minimum delivery cost:
   ```json
   {
     "minimumCost": 86
   }
   ```

## API Endpoints

### Calculate Delivery Cost
- **URL:** `/api/calculate-delivery-cost`
- **Method:** POST
- **Body:** JSON object with product quantities
- **Response:** JSON object with minimum delivery cost

## Deployment

The API can be deployed to platforms like Render.com by connecting your GitHub repository.



## Author

Raunak Bartaria