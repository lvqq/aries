
## /pet/{petId}/uploadImage
### 1.Interface description
uploads an image

### 2.Request url
/pet/{petId}/uploadImage

### 3.Request method
POST

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
petId | path | Y | integer | ID of pet to update
additionalMetadata | formData | N | string | Additional data to pass to server
file | formData | N | file | file to upload


#### Request samples
```
{
  "petId": 0,
  "additionalMetadata": ""
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
code | integer |  | 
type | string |  | 
message | string |  | 


#### Response samples
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

## /pet
### 1.Interface description
Add a new pet to the store

### 2.Request url
/pet

### 3.Request method
POST

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
category | body | N | object | 
name | body | Y | string | 
photoUrls | body | Y | string[] | 
tags | body | N | undefined[] | 
status | body | N | string | pet status in the store

**category**
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
name | body | N | string | 

      

#### Request samples
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
    ""
  ],
  "status": ""
}
```

### 5.Response


#### Response samples
```
""
```

## /pet
### 1.Interface description
Update an existing pet

### 2.Request url
/pet

### 3.Request method
PUT

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
category | body | N | object | 
name | body | Y | string | 
photoUrls | body | Y | string[] | 
tags | body | N | undefined[] | 
status | body | N | string | pet status in the store

**category**
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
name | body | N | string | 

      

#### Request samples
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
    ""
  ],
  "status": ""
}
```

### 5.Response


#### Response samples
```
""
```

## /pet/findByStatus
### 1.Interface description
Finds Pets by status

### 2.Request url
/pet/findByStatus

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
status | query | Y | array | Status values that need to be considered for filter


#### Request samples
N/A

### 5.Response
N/A

#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": [
    ""
  ]
}
```

## /pet/findByTags
### 1.Interface description
Finds Pets by tags

### 2.Request url
/pet/findByTags

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
tags | query | Y | array | Tags to filter by


#### Request samples
N/A

### 5.Response
N/A

#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": [
    ""
  ]
}
```

## /pet/{petId}
### 1.Interface description
Find pet by ID

### 2.Request url
/pet/{petId}

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
petId | path | Y | integer | ID of pet to return


#### Request samples
```
{
  "petId": 0
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
id | integer |  | 
category | object |  | 
name | string | doggie | 
photoUrls | string[] |  | 
tags | undefined[] |  | 
status | string |  | pet status in the store

**category**
Name | Type | Value | Remak
---- | -------- | -------- | ----
id | integer |  | 
name | string |  | 

      

#### Response samples
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
      ""
    ],
    "status": ""
  }
}
```

## /pet/{petId}
### 1.Interface description
Updates a pet in the store with form data

### 2.Request url
/pet/{petId}

### 3.Request method
POST

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
petId | path | Y | integer | ID of pet that needs to be updated
name | formData | N | string | Updated name of the pet
status | formData | N | string | Updated status of the pet


#### Request samples
```
{
  "petId": 0,
  "name": "",
  "status": ""
}
```

### 5.Response


#### Response samples
```
""
```

## /pet/{petId}
### 1.Interface description
Deletes a pet

### 2.Request url
/pet/{petId}

### 3.Request method
DELETE

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
petId | path | Y | integer | Pet id to delete


#### Request samples
```
{
  "petId": 0
}
```

### 5.Response


#### Response samples
```
""
```

## /store/order
### 1.Interface description
Place an order for a pet

### 2.Request url
/store/order

### 3.Request method
POST

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
petId | body | N | integer | 
quantity | body | N | integer | 
shipDate | body | N | string | 
status | body | N | string | Order Status
complete | body | N | boolean | 


#### Request samples
```
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "",
  "status": "",
  "complete": true
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
id | integer |  | 
petId | integer |  | 
quantity | integer |  | 
shipDate | string |  | 
status | string |  | Order Status
complete | boolean |  | 


#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "",
    "status": "",
    "complete": true
  }
}
```

## /store/order/{orderId}
### 1.Interface description
Find purchase order by ID

### 2.Request url
/store/order/{orderId}

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
orderId | path | Y | integer | ID of pet that needs to be fetched


#### Request samples
```
{
  "orderId": 0
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
id | integer |  | 
petId | integer |  | 
quantity | integer |  | 
shipDate | string |  | 
status | string |  | Order Status
complete | boolean |  | 


#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "",
    "status": "",
    "complete": true
  }
}
```

## /store/order/{orderId}
### 1.Interface description
Delete purchase order by ID

### 2.Request url
/store/order/{orderId}

### 3.Request method
DELETE

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
orderId | path | Y | integer | ID of the order that needs to be deleted


#### Request samples
```
{
  "orderId": 0
}
```

### 5.Response


#### Response samples
```
""
```

## /store/inventory
### 1.Interface description
Returns pet inventories by status

### 2.Request url
/store/inventory

### 3.Request method
GET

### 4.Request
N/A

#### Request samples
N/A

### 5.Response
N/A

#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```

## /user/createWithArray
### 1.Interface description
Creates list of users with given input array

### 2.Request url
/user/createWithArray

### 3.Request method
POST

### 4.Request
N/A

#### Request samples
N/A

### 5.Response


#### Response samples
```
""
```

## /user/createWithList
### 1.Interface description
Creates list of users with given input array

### 2.Request url
/user/createWithList

### 3.Request method
POST

### 4.Request
N/A

#### Request samples
N/A

### 5.Response


#### Response samples
```
""
```

## /user/{username}
### 1.Interface description
Get user by user name

### 2.Request url
/user/{username}

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
username | path | Y | string | The name that needs to be fetched. Use user1 for testing. 


#### Request samples
```
{
  "username": ""
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
id | integer |  | 
username | string |  | 
firstName | string |  | 
lastName | string |  | 
email | string |  | 
password | string |  | 
phone | string |  | 
userStatus | integer |  | User Status


#### Response samples
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

## /user/{username}
### 1.Interface description
Updated user

### 2.Request url
/user/{username}

### 3.Request method
PUT

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
username | path | Y | string | name that need to be updated


#### Request samples
```
{
  "username": "",
  "id": 0,
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": "",
  "phone": "",
  "userStatus": 0
}
```

### 5.Response


#### Response samples
```
""
```

## /user/{username}
### 1.Interface description
Delete user

### 2.Request url
/user/{username}

### 3.Request method
DELETE

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
username | path | Y | string | The name that needs to be deleted


#### Request samples
```
{
  "username": ""
}
```

### 5.Response


#### Response samples
```
""
```

## /user/login
### 1.Interface description
Logs user into the system

### 2.Request url
/user/login

### 3.Request method
GET

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
username | query | Y | string | The user name for login
password | query | Y | string | The password for login in clear text


#### Request samples
```
{
  "username": "",
  "password": ""
}
```

### 5.Response
Name | Type | Value | Remak
---- | -------- | -------- | ----
- | string |  | 


#### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": ""
}
```

## /user/logout
### 1.Interface description
Logs out current logged in user session

### 2.Request url
/user/logout

### 3.Request method
GET

### 4.Request
N/A

#### Request samples
N/A

### 5.Response


#### Response samples
```
""
```

## /user
### 1.Interface description
Create user

### 2.Request url
/user

### 3.Request method
POST

### 4.Request
Param | Location | Required | Type | Remark
---- | -------- | -------- | -------- | ----
id | body | N | integer | 
username | body | N | string | 
firstName | body | N | string | 
lastName | body | N | string | 
email | body | N | string | 
password | body | N | string | 
phone | body | N | string | 
userStatus | body | N | integer | User Status


#### Request samples
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

### 5.Response


#### Response samples
```
""
```
