# Secure Payment System API

## Description
The Secure Payment System API is a backend project built using Node.js, Express.js, MongoDB, and the Stripe API. It provides a set of APIs to manage payments, payment information, and refunds.

## Installation
1. Clone the repository:

```
git clone https://github.com/your-username/secure-payment-api.git
cd secure-payment-api
```


2. Install dependencies:

```npm install```


3. Configure environment variables:
Create a `.env` file with the following variables:

```
Secret_key=your-stripe-secret-key
MONGODB_URI=your-mongodb-uri
```

4. Run the application:

```npm start```


## APIs

### 1. Create Payment
**Endpoint:** `POST /api/payment/create-payment`
Create a new payment and receive a client secret for confirming the payment.

### 2. Get Payment Info
**Endpoint:** `GET /api/payment/payment-info`
Retrieve details of all payments stored in the database.

### 3. Get Payment by ID
**Endpoint:** `GET /api/payment/payment-info/:paymentId`
Retrieve details of a specific payment using its payment ID.

### 4. Refund Payment
**Endpoint:** `POST /api/payment/refund`
Initiate a refund for a payment. Record the refund details in the database.

### 5. Get Refund Info
**Endpoint:** `GET /api/refund/refund-info`
Retrieve details of all refunds stored in the database.

### 6. Get Refund by ID
**Endpoint:** `GET /api/refund/refund-info/:refundId`
Retrieve details of a specific refund using its refund ID.

## How to Use

1. **Create Payment:**
- Send a POST request to `/api/payment/create-payment` with the required data.
- Receive a client secret in the response.

2. **Get Payment Info:**
- Send a GET request to `/api/payment/payment-info`.
- Receive a list of payment information.

3. **Get Payment by ID:**
- Send a GET request to `/api/payment/payment-info/:paymentId`.
- Replace `:paymentId` with the payment ID you want to retrieve.
- Receive payment details.

4. **Refund Payment:**
- Send a POST request to `/api/payment/refund` with the payment ID to initiate a refund.
- Record the refund details in the database.

5. **Get Refund Info:**
- Send a GET request to `/api/refund/refund-info`.
- Receive a list of refund information.

6. **Get Refund by ID:**
- Send a GET request to `/api/refund/refund-info/:refundId`.
- Replace `:refundId` with the refund ID you want to retrieve.
- Receive refund details.

## Usage Example
You can use tools like Postman to test the APIs. Make sure to provide valid data and check the responses for successful outcomes.

## Notes
- This project focuses solely on the backend and does not include a frontend.
- The Stripe API is used for payment processing.

## License
This project is licensed under the MIT License.
