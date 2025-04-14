
# 📌 User Authentication API Documentation

This backend provides endpoints to register and log in users with proper validation, password encryption, and JWT token-based authentication.

---

## 📂 Endpoints Covered

- [POST /users/register](#-user-registration-endpoint-documentation)
- [POST /users/login](#-user-login-endpoint-documentation)
- [GET /users/profile](#-user-profile-endpoint-documentation)
- [GET /users/logout](#-user-logout-endpoint-documentation)

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

👨‍💻 **Author:** Sudhanshu Ghosh  
📁 **File Location:** `backend/README.md`
