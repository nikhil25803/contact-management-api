# Contact Management API
A contact management API built using JavaScript, NodeJs and ExpressJS. With JWT authentication.


+ ### **GET** `/`
```json
{
  "status": 200,
  "message": "Server up and Running"
}
```

> ### **GET** `/api`
+ ### To get all the contacts, an user needs to have a authorization key. Instead it will show
```json
Status: 401 Unauthorized
```

> ### **POST** `/api/users/register`
+ ### To create an user
Request
```json
{
  "username":"superman",
  "email":"superman@gmail.com",
  "password":"test123"
}
```
Response
```json
{
  "_id": "64189af40117ea6fe269da47",
  "email": "superman@gmail.com"
}
```

> ### **POST** `/api/users/login`
+ ### To login 
Request
```json
{
  "email":"superman@gmail.com",
  "password":"test123"
}
```
Response
```json
{
  "accessToken": "-----"
}
```

A access token is returned which can be passed through the header as well as a Bearer token in order to access the private routes.

> ### **GET** `/api/users/current`
+ ### To get the information of the current loggedin user (pass the access token through the header and make a request)
Response
```json
{
{
  "username": "superman",
  "email": "superman@gmail.com",
  "id": "64189af40117ea6fe269da47"
}
}
```

As all the `contact` routes are private, hence we need to pass the secret key as a Bearer token.
> ### **POST** `/api`
+ ### To create a contact by a loggedin user
Request
```json
{
  "name":"Spiderman",
  "email":"spiderman@gmail.com",
  "phone":"123456789"
}
```
Response
```json
{
  "user_id": "64189ac521d10a92dc2eaca6",
  "name": "Spiderman",
  "email": "spiderman@gmail.com",
  "phone": "123456789",
  "createdAt": "2023-03-20T18:00:55.106Z",
  "updatedAt": "2023-03-20T18:00:55.106Z",
}
```

> ### **GET** `/api`
+ ### To get all the contact created by the logged in user
Response
```json
{
  "status": 200,
  "message": "Contact created sucessfully",
  "data": {
    "user_id": "64189ac521d10a92dc2eaca6",
    "name": "Spiderman",
    "email": "spiderman@gmail.com",
    "phone": "123456789",
    "_id": "64189f573b6f4891234ef60b",
    "createdAt": "2023-03-20T18:00:55.106Z",
    "updatedAt": "2023-03-20T18:00:55.106Z",
    "__v": 0
  }
}
```

Response
```json
{
  "status": 200,
  "data": [
    {
      "_id": "64189f053b6f4891234ef605",
      "user_id": "64189ac521d10a92dc2eaca6",
      "name": "Captain America",
      "email": "captain@gmail.com",
      "phone": "123456789",
      "createdAt": "2023-03-20T17:59:33.604Z",
      "updatedAt": "2023-03-20T17:59:33.604Z",
      "__v": 0
    },
    ...
  ],
  "user": {
    "username": "tonyStark",
    "email": "tonystark@gmail.com",
    "id": "64189ac521d10a92dc2eaca6"
  }
}
```

+ ### Some more endpoints
### **GET** `/api/:id`
+ ### To search a contact by `id`

### **GET** `/api/:name`
+ ### To search a contact by `name`

### **PUT** `/api/:id`
+ ### To update a contact by `id`

### **DELETE** `/api/:id`
+ ### To delete a contact by `id`
---------