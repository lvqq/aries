# 1.pet
Everything about your Pets
## 1.1 POST /pet/{petId}/uploadImage
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
petId | Y | integer | ID of pet to update
#### formData
Param | Required | Type | Remark
---- | -------- | -------- | ----
additionalMetadata | N | string | Additional data to pass to server
file | N | file | file to upload
### Request samples
#### path
```
{
  "petId": 0
}
```
#### formData
```
{
  "additionalMetadata": "",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": 0,
    "type": "",
    "message": ""
  }
}
```
## 1.2 POST /pet
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | N/A | object | Pet object that needs to be added to the store
##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N | integer | N/A
category | N | object | N/A
name | Y | string | N/A
photoUrls | Y | string[] | N/A
tags | N | object[] | N/A
status | N | string | pet status in the store
##### category
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
name | N/A | string | N/A

##### tags
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
name | N/A | string | N/A
### Request samples
#### body
```
{
  "id": 0,
  "category": {
    "id": 0,
    "name": ""
  },
  "name": "doggie",
  "photoUrls": [
    ""
  ],
  "tags": [
    {
      "id": 0,
      "name": ""
    }
  ],
  "status": "available"
}
```
### Response samples
```
{
  "code": 0,
  "type": "",
  "message": "",
  "data": {
    "id": 0,
    "category": {
      "id": 0,
      "name": ""
    },
    "name": "doggie",
    "photoUrls": [
      ""
    ],
    "tags": [
      {
        "id": 0,
        "name": ""
      }
    ],
    "status": "available"
  }
}
```
## 1.3 PUT /pet
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | N/A | object | Pet object that needs to be added to the store
##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N | integer | N/A
category | N | object | N/A
name | Y | string | N/A
photoUrls | Y | string[] | N/A
tags | N | object[] | N/A
status | N | string | pet status in the store
##### category
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
name | N/A | string | N/A

##### tags
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
name | N/A | string | N/A
### Request samples
#### body
```
{
  "id": 0,
  "category": {
    "id": 0,
    "name": ""
  },
  "name": "doggie",
  "photoUrls": [
    ""
  ],
  "tags": [
    {
      "id": 0,
      "name": ""
    }
  ],
  "status": "available"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 1.4 GET /pet/findByStatus
Multiple status values can be provided with comma separated strings
### Parameters
#### query
Param | Required | Type | Remark
---- | -------- | -------- | ----
status | Y | string[] | Status values that need to be considered for filter
### Request samples
#### query
```
{
  "status": [
    "available"
  ]
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": 0,
      "category": {
        "id": 0,
        "name": ""
      },
      "name": "doggie",
      "photoUrls": [
        ""
      ],
      "tags": [
        {
          "id": 0,
          "name": ""
        }
      ],
      "status": "available"
    }
  ]
}
```
## 1.5 GET /pet/findByTags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
### Parameters
#### query
Param | Required | Type | Remark
---- | -------- | -------- | ----
tags | Y | string[] | Tags to filter by
### Request samples
#### query
```
{
  "tags": [
    ""
  ]
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": 0,
      "category": {
        "id": 0,
        "name": ""
      },
      "name": "doggie",
      "photoUrls": [
        ""
      ],
      "tags": [
        {
          "id": 0,
          "name": ""
        }
      ],
      "status": "available"
    }
  ]
}
```
## 1.6 GET /pet/{petId}
Returns a single pet
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
petId | Y | integer | ID of pet to return
### Request samples
#### path
```
{
  "petId": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "category": {
      "id": 0,
      "name": ""
    },
    "name": "doggie",
    "photoUrls": [
      ""
    ],
    "tags": [
      {
        "id": 0,
        "name": ""
      }
    ],
    "status": "available"
  }
}
```
## 1.7 POST /pet/{petId}
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
petId | Y | integer | ID of pet that needs to be updated
#### formData
Param | Required | Type | Remark
---- | -------- | -------- | ----
name | N | string | Updated name of the pet
status | N | string | Updated status of the pet
### Request samples
#### path
```
{
  "petId": 0
}
```
#### formData
```
{
  "name": "",
  "status": ""
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 1.8 DELETE /pet/{petId}
### Parameters
#### header
Param | Required | Type | Remark
---- | -------- | -------- | ----
api_key | N | string | N/A
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
petId | Y | integer | Pet id to delete
### Request samples
#### header
```
{
  "api_key": ""
}
```
#### path
```
{
  "petId": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```

# 2.store
Access to Petstore orders
## 2.1 POST /store/order
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | Y | object | order placed for purchasing the pet
##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
petId | N/A | integer | N/A
quantity | N/A | integer | N/A
shipDate | N/A | string | N/A
status | N/A | string | Order Status
complete | N/A | boolean | N/A
### Request samples
#### body
```
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "",
  "status": "placed",
  "complete": true
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "",
    "status": "placed",
    "complete": true
  }
}
```
## 2.2 GET /store/order/{orderId}
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
orderId | Y | integer | ID of pet that needs to be fetched
### Request samples
#### path
```
{
  "orderId": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "",
    "status": "placed",
    "complete": true
  }
}
```
## 2.3 DELETE /store/order/{orderId}
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
orderId | Y | integer | ID of the order that needs to be deleted
### Request samples
#### path
```
{
  "orderId": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 2.4 GET /store/inventory
Returns a map of status codes to quantities
### Parameters
N/A
### Request samples
N/A
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```

# 3.user
Operations about user
## 3.1 POST /user/createWithArray
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | Y | object[] | List of user object

##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
username | N/A | string | N/A
firstName | N/A | string | N/A
lastName | N/A | string | N/A
email | N/A | string | N/A
password | N/A | string | N/A
phone | N/A | string | N/A
userStatus | N/A | integer | User Status
### Request samples
#### body
```
[
  {
    "id": 0,
    "username": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "phone": "",
    "userStatus": 0
  }
]
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 3.2 POST /user/createWithList
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | Y | object[] | List of user object

##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
username | N/A | string | N/A
firstName | N/A | string | N/A
lastName | N/A | string | N/A
email | N/A | string | N/A
password | N/A | string | N/A
phone | N/A | string | N/A
userStatus | N/A | integer | User Status
### Request samples
#### body
```
[
  {
    "id": 0,
    "username": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "phone": "",
    "userStatus": 0
  }
]
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 3.3 GET /user/{username}
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
username | Y | string | The name that needs to be fetched. Use user1 for testing. 
### Request samples
#### path
```
{
  "username": ""
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "username": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "phone": "",
    "userStatus": 0
  }
}
```
## 3.4 PUT /user/{username}
This can only be done by the logged in user.
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
username | Y | string | name that need to be updated
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | Y | object | Updated user object
##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
username | N/A | string | N/A
firstName | N/A | string | N/A
lastName | N/A | string | N/A
email | N/A | string | N/A
password | N/A | string | N/A
phone | N/A | string | N/A
userStatus | N/A | integer | User Status
### Request samples
#### path
```
{
  "username": ""
}
```
#### body
```
{
  "id": 0,
  "username": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": "",
  "phone": "",
  "userStatus": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 3.5 DELETE /user/{username}
This can only be done by the logged in user.
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
username | Y | string | The name that needs to be deleted
### Request samples
#### path
```
{
  "username": ""
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 3.6 GET /user/login
### Parameters
#### query
Param | Required | Type | Remark
---- | -------- | -------- | ----
username | Y | string | The user name for login
password | Y | string | The password for login in clear text
### Request samples
#### query
```
{
  "username": "",
  "password": ""
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": ""
}
```
## 3.7 GET /user/logout
### Parameters
N/A
### Request samples
N/A
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
## 3.8 POST /user
This can only be done by the logged in user.
### Parameters
#### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
body | Y | object | Created user object
##### body
Param | Required | Type | Remark
---- | -------- | -------- | ----
id | N/A | integer | N/A
username | N/A | string | N/A
firstName | N/A | string | N/A
lastName | N/A | string | N/A
email | N/A | string | N/A
password | N/A | string | N/A
phone | N/A | string | N/A
userStatus | N/A | integer | User Status
### Request samples
#### body
```
{
  "id": 0,
  "username": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": "",
  "phone": "",
  "userStatus": 0
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```