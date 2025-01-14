# 🛒 Book Store Orders Management System

## 🚀 Project Overview

This assignment is an **Book Store Orders Management System** built to manage orders, calculate revenue, and handle product inventory. It includes features like placing orders, calculating total revenue, and ensuring stock availability. The project is developed using **Node.js**, **TypeScript**, **Mongoose**, and **MongoDB**.


## ✨ Features

- **Order Management**: Place orders with product references, quantity, and pricing.
- **Revenue Calculation**: Aggregate total revenue from all orders dynamically.
- **Inventory Control**:
  - Automatically reduces product stock upon order placement.
  - Marks products as out-of-stock when inventory reaches zero.
- **Validation**: Implements strict input validation using Zod and MongoDB ObjectId compatibility.
- **Database**: Fully integrated with MongoDB, using Mongoose for schema definitions and pre-middleware hooks.


## 🛠️ Tech Stack

- **Backend**: Node.js, TypeScript
- **Database**: MongoDB
- **ORM**: Mongoose
- **Validation**: Zod


## 📂 Project Structure


src/
├── controllers/    # API endpoint logic
├── interfaces/     # TypeScript interfaces for data types
├── models/         # Mongoose models for database
├── routes/         # Route definitions for the API
├── services/       # Business logic and database interaction
├── utils/          # Utility functions and constants
└── app.ts          # Application entry point


## ⚙️ Setup Instructions

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (Running locally or via a cloud provider like MongoDB Atlas)


### 🔧 Steps to Set Up Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/fahimabushra1/L2B4A2.git
   cd L2B4A2
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
  To run this project, you will need to add the following environment variables to your .env file
   ```env
   PORT
   DATABASE_URL
   ```

4. **Start the Application**
   ```bash
   npm run dev
   ```
   The server will run at [http://localhost:5000](http://localhost:5000).


## 🚨 API Endpoints

### 1. **Create an Order**
   - **Endpoint**: `/api/orders`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "email": "customer@example.com",
       "product": "64abc1234f56ef1234567890",
       "quantity": 2,
       "totalPrice": 59.99
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Order created successfully",
       "status": true,
       "data": { ... }
     }
     ```

### 2. **Calculate Revenue**
   - **Endpoint**: `/api/orders/revenue`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "message": "Revenue calculated successfully",
       "status": true,
       "data": {
         "totalRevenue": 450
       }
     }
     ```


## 🧪 Testing

Run tests to ensure everything is working as expected:
```bash
npm run test
```


## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


## 📄 License

This project is licensed under the [MIT License](LICENSE).


## 💡 Author

Developed by **[Fahima Bushra]**  
For queries, reach out at: [bushra.arifeen@gmail.com](mailto:bushra.arifeen@gmail.com)


Replace placeholders like `https://github.com/fahimabushra1/L2B4A2.git` and `bushra.arifeen@gmail.com` with the actual details specific to your project. Let me know if you'd like additional modifications!