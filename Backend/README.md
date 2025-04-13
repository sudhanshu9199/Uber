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

👨‍💻 **Author:** Sudhanshu Ghosh  
📁 **File Location:** `backend/README.md`
