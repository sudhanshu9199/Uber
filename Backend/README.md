
# 📌 User Authentication API Documentation

This backend provides endpoints to register and log in users with proper validation, password encryption, and JWT token-based authentication.

---

## 📂 Endpoints Covered

- [POST /users/register](#-user-registration-endpoint-documentation)
- [POST /users/login](#-user-login-endpoint-documentation)
- [GET /users/profile](#-user-profile-endpoint-documentation)
- [GET /users/logout](#-user-logout-endpoint-documentation)

### Captains
- [POST /captain/register](#-captain-registration-endpoint-documentation)
- [POST /captain/login](#-captain-login-endpoint-documentation)
- [GET /captain/profile](#-captain-profile-endpoint-documentation)
- [GET /captain/logout](#-captain-logout-endpoint-documentation)

---

# 📌 Captain Registration Endpoint Documentation

## 🔗 Endpoint

```
POST /captain/register
```

---

## 📝 Description

Register a new captain with vehicle details. Validates inputs, hashes password, and saves to database.

---

## 📥 Request Body Format (JSON)

```json
{
  "fullname": {
    "firstname": "Ravi",   // Required, minimum 3 characters
    "lastname": "Kumar"    // Optional, minimum 3 characters if provided
  },
  "email": "ravi.kumar@example.com",  // Required, valid email format
  "password": "DriveSafe2024",        // Required, minimum 6 characters
  "vehicle": {
    "color": "White",     // Required, minimum 3 characters
    "plate": "BR01AB1234",// Required, minimum 3 characters
    "capacity": 4,        // Required, integer ≥ 1
    "vehicleType": "car"  // Required: "car", "motorcycle", or "auto"
  }
}
```

### ✅ Success Response

**Status Code:** `201 Created`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "661b12345f3a4d0012e6a789",
    "fullname": {
      "firstname": "Ravi",
      "lastname": "Kumar"
    },
    "email": "ravi.kumar@example.com",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## ❌ Error Responses

### 🔸 400 Bad Request

```json
{
  "errors": [
    {
      "msg": "Vehicle type must be one of: car, motorcycle, auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### 🔸 409 Conflict

```json
{
  "message": "Captain already exist"
}
```

---

# 📌 Captain Login Endpoint Documentation

## 🔗 Endpoint

```
POST /captain/login
```

---

## 📝 Description

Authenticate captain credentials and return JWT token.

## 📥 Request Body Format (JSON)

```json
{
  "email": "ravi.kumar@example.com",  // Required, valid email
  "password": "DriveSafe2024"         // Required, minimum 6 characters
}
```

### ✅ Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "661b12345f3a4d0012e6a789",
    "fullname": {
      "firstname": "Ravi",
      "lastname": "Kumar"
    },
    "email": "ravi.kumar@example.com",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

## ❌ Error Responses

### 🔸 401 Unauthorized

```json
{
  "message": "Invalid email or password"
}
```

---

# 📌 Captain Profile Endpoint Documentation

## 🔗 Endpoint

```
POST /captain/profile
```

---

## 📝 Description

Get authenticated captain's profile details.

---

## 🔑 Authentication
Requires valid JWT token in Authorization header:

```http
Content-Type: application/json
```
---

## ✅ Success Response

**Status Code:** `200 OK`

```json
{
  "captain": {
    "_id": "661b12345f3a4d0012e6a789",
    "fullname": {
      "firstname": "Ravi",
      "lastname": "Kumar"
    },
    "email": "ravi.kumar@example.com",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

# 📌 Captain Logout Endpoint Documentation

## 🔗 Endpoint

```
POST /captain/logout
```

---

## 📝 Description

Invalidate JWT token and clear authentication cookie.

---

## ✅ Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Logout successfully"
}
```

---

## 📦 Notes for All Captain Endpoints

- Password hashing: `bcrypt`.
- Token storage: HTTP-only cookies
- Vehicle details: Stored as sub-document
- Required headers:

```http
Content-Type: application/json
Authorization: Bearer <token>  // For protected endpoints
```

---



# 📌 User Registration Endpoint Documentation

## 🔗 Endpoint

```
POST /users/register
```

---

## 📝 Description

This endpoint is used to **register a new user**. It accepts user details such as first name, last name, email, and password, performs validation, hashes the password securely, saves the user to the database, and returns an authentication token on successful registration.

---

## 📥 Request Body Format (JSON)

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### ✅ Field Requirements

| Field              | Type   | Required | Validation                                          |
| ------------------ | ------ | -------- | --------------------------------------------------- |
| fullname.firstname | String | ✅ Yes   | Minimum 3 characters                                |
| fullname.lastname  | String | ❌ No    | Minimum 3 characters (if provided)                  |
| email              | String | ✅ Yes   | Must be a valid email format, at least 5 characters |
| password           | String | ✅ Yes   | Minimum 6 characters                                |

---

## 🔐 Token

On successful registration, a JWT token is generated and returned in the response.

---

## ✅ Success Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "608b91d0f3a5d72a78c8f3a1",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

---

## ❌ Error Responses

### 🔸 400 Bad Request

Occurs when validation fails or required fields are missing.

**Example:**

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

## 📦 Notes

- Passwords are securely hashed using `bcrypt`.
- Email must be unique.
- The returned JWT token can be used for authenticated requests.
- Ensure to send the request body in **JSON format** with proper headers:

```http
Content-Type: application/json
```

---


# 📌 User Login Endpoint Documentation

## 🔗 Endpoint

```
POST /users/login
```

---

## 📝 Description

This endpoint is used to **log in an existing user**. It validates the user's credentials and returns a **JWT token** on successful authentication.

---

## 📥 Request Body Format (JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### ✅ Field Requirements

| Field    | Type   | Required | Validation                 |
| -------- | ------ | -------- | -------------------------- |
| email    | String | ✅ Yes   | Must be a valid email      |
| password | String | ✅ Yes   | Minimum 6 characters       |

---

## ✅ Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "608b91d0f3a5d72a78c8f3a1",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

---

## ❌ Error Responses

### 🔸 400 Bad Request

Occurs when input validation fails.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### 🔸 401 Unauthorized

Occurs when email is not found or password is incorrect.

```json
{
  "message": "Invalid email or password"
}
```

---

## 📦 Notes

- Make sure the user is already registered before login.
- Passwords are securely compared using `bcrypt.compare()`.
- JWT tokens are signed using a secret key from environment variables.
- Use the token for authenticated requests.
- Ensure headers contain:

```http
Content-Type: application/json
```
---

# 📌 User Profile Endpoint Documentation

## 🔗 Endpoint

```
GET /users/login
```

## 📝 Description

This endpoint is used to **fetch the profile of the logged-in user**. The user's details are returned when the JWT token is provided in the request.

## ✅ Success Response
**Status Code:** `200 OK`

**Response Body:**

```json
{
  "_id": "608b91d0f3a5d72a78c8f3a1",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```
---

## ❌ Error Responses

### 🔸 401 Unauthorized

Occurs when the JWT token is invalid or missing.

```json
{
  "message": "Unauthorized access. Please log in."
}
```
---

## 📦 Notes

- Make sure the user is logged in and has a valid JWT token.
- The token must be included in the `Authorization` header as a Bearer token:

```http
Authorization: Bearer <token>
```
---

# 📌 User Logout Endpoint Documentation

## 🔗 Endpoint

```
GET /users/logout
```

## 📝 Description

This endpoint is used to **log out the user**. It invalidates the current session by clearing the JWT token stored in the cookies and adding it to the blacklist to prevent further use.

---

## ✅ Success Response
**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "LOGGED OUT."
}
```

---

## ❌ Error Responses

### 🔸 401 Unauthorized

Occurs when the JWT token is invalid or missing.

```json
{
  "message": "Unauthorized access. Please log in."
}
```
---

## 📦 Notes

- This will clear the user's JWT token from cookies and add it to the blacklist to prevent unauthorized access.
- Ensure that the request includes a valid JWT token in the `Authorization` header:

```http
Authorization: Bearer <token>
```

---

# 📌 Captain Registration Endpoint Documentation

## 🔗 Endpoint

```
POST /captain/register
```

---

## 📝 Description

This endpoint is used to **register a new captain** along with their **vehicle details**. It performs necessary validations, hashes the password, and saves both user and vehicle data securely in the database.

---

## 📥 Request Body Format (JSON)

```json
{
  "fullname": {
    "firstname": "Ravi",
    "lastname": "Kumar"
  },
  "email": "ravi.kumar@example.com",
  "password": "DriveSafe2024",
  "vehicle": {
    "color": "White",
    "plate": "BR01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### ✅ Field Requirements

Field | Type | Required | Validation Criteria
| -------- | ------ | -------- | -------------------------- |
fullname.firstname | String | ✅ Yes | Minimum 3 characters
fullname.lastname | String | ❌ No | Minimum 3 characters (if provided)
email | String | ✅ Yes | Must be a valid email format
password | String | ✅ Yes | Minimum 6 characters
vehicle.color | String | ✅ Yes | Minimum 3 characters
vehicle.plate | String | ✅ Yes | Minimum 3 characters
vehicle.capacity | Integer | ✅ Yes | Must be a positive integer (at least 1)
vehicle.vehicleType | String | ✅ Yes | Must be one of: car, motorcycle, auto

---

## ✅ Success Response
**Status Code:** `201 Created`

**Response Body:**

```json
{
  "message": "Captain registered successfully",
  "captain": {
    "_id": "661b12345f3a4d0012e6a789",
    "fullname": {
      "firstname": "Ravi",
      "lastname": "Kumar"
    },
    "email": "ravi.kumar@example.com",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

## ❌ Error Responses

### 🔸 400 Bad Request

Occurs when input validation fails.

```json
{
  "errors": [
    {
      "msg": "Vehicle type must be one of: car, motorcycle, auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

---

### 🔸 500 Internal Server Error

Occurs when some unexpected issue happens on the server, like database failure.

```json
{
  "message": "Internal server error"
}
```

---

## 📦 Notes

- Password is hashed using `bcrypt` before storing.
- The response may also include a JWT token if authentication is implemented (currently not returned by default in your controller).
- Vehicle details are saved as a sub-document inside the captain's record.
- Required headers:

```http
Content-Type: application/json
```

---

🧑‍✈️ **Module**: captain.routes.js
🔧 **Service Used**: captain.service.js
🧾 **Model**: captain.model.js
📁 **File Location**: backend/routes/captain.routes.js

---

👨‍💻 **Author:** Sudhanshu Ghosh  
📁 **File Location:** `backend/README.md`
