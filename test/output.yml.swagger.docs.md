# 1.pet
Everything about your Pets
## 1.1 POST /pet
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
  "id": 1111605827862528,
  "category": {
    "id": -2256683552210944,
    "name": "]nBjS*XAihMZS!3Eb*D"
  },
  "name": "doggie",
  "photoUrls": [
    "tg^D8pv",
    "DykhT@"
  ],
  "tags": [
    {
      "id": 8957532609445888,
      "name": "(Ip3ER"
    },
    {
      "id": -297552230481920,
      "name": "a^9fc4@Dk"
    },
    {
      "id": -524333755662336,
      "name": "ti9IJ"
    }
  ],
  "status": "pending"
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
## 1.2 PUT /pet
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
  "id": 3748940197396480,
  "category": {
    "id": 7163458059501568,
    "name": "lLQc[(LhJE"
  },
  "name": "doggie",
  "photoUrls": [
    "Zhc&A3SUgbU^H%f",
    "JIUFg(fB!MvD"
  ],
  "tags": [
    {
      "id": -1559067063484416,
      "name": "ZPn3sKLN1Orrok0tpwX"
    },
    {
      "id": -1071593040117760,
      "name": "2p3A(loH9"
    }
  ],
  "status": "sold"
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
## 1.3 GET /pet/findByStatus
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
      "id": -5048606071455744,
      "category": {
        "id": -1707291845853184,
        "name": "wtp0pnFBjDX%ZGx(o9"
      },
      "name": "doggie",
      "photoUrls": [
        "m4pe*CtCSjom$A",
        "eH&RF$*tHbf",
        "%suHXbR2K^ZZQt4!Bu"
      ],
      "tags": [
        {
          "id": -4375072689094656,
          "name": "a3485O1ecnZTSvlknf(e"
        },
        {
          "id": 1761932948275200,
          "name": "gWnbsmW#B0ilToc"
        }
      ],
      "status": "sold"
    }
  ]
}
```
## 1.4 GET /pet/findByTags
Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
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
    "zoAbKTk9QM",
    "%WTuGS5!Nu2",
    "oCWG6^xDwyOfbZZQCuz"
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
      "id": -2482384716955648,
      "category": {
        "id": 4340580603658240,
        "name": "hSPB7"
      },
      "name": "doggie",
      "photoUrls": [
        "JO$Q5KJv63RUYcR9Q"
      ],
      "tags": [
        {
          "id": 532752633954304,
          "name": "zovXR"
        }
      ],
      "status": "pending"
    },
    {
      "id": 596003199647744,
      "category": {
        "id": -5415203873226752,
        "name": "16xjeHTnPk2oE7)Ki^"
      },
      "name": "doggie",
      "photoUrls": [
        "s@kKQVTB"
      ],
      "tags": [
        {
          "id": 3190144760807424,
          "name": "w@nKkQ"
        },
        {
          "id": 7606979430187008,
          "name": "9*og*I7d1UBr[t"
        }
      ],
      "status": "available"
    }
  ]
}
```
## 1.5 GET /pet/{petId}
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
  "petId": -6618310330286080
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 5501883225473024,
    "category": {
      "id": 5951332280172544,
      "name": "1*@(O8RHJK5t"
    },
    "name": "doggie",
    "photoUrls": [
      "&5ggo",
      "^^!Ude$]tO]%yav15"
    ],
    "tags": [
      {
        "id": 7284412936880128,
        "name": "JmYydgm"
      }
    ],
    "status": "pending"
  }
}
```
## 1.6 POST /pet/{petId}
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
  "petId": -7799461245878272
}
```
#### formData
```
{
  "name": "&T6q66TKBsxXu",
  "status": "T$itL9aI"
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
## 1.7 DELETE /pet/{petId}
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
  "api_key": "VOGeHHFtE"
}
```
#### path
```
{
  "petId": 2096861779329024
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
## 1.8 POST /pet/{petId}/uploadImage
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
  "petId": 5036350294196224
}
```
#### formData
```
{
  "additionalMetadata": "YUG$ZxJNF&&K[5fa",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": -1509364108099584,
    "type": "g&Sk%ZH#q1qQu",
    "message": "W)4M9fa"
  }
}
```

# 2.store
Access to Petstore orders
## 2.1 GET /store/inventory
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
## 2.2 POST /store/order
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
  "id": -7680853475852288,
  "petId": -4504697163481088,
  "quantity": 7519562094346240,
  "shipDate": "%z^hgupQd",
  "status": "approved",
  "complete": true
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -1401917959831552,
    "petId": -401135596732416,
    "quantity": -530976551731200,
    "shipDate": "mW@cRaYR",
    "status": "delivered",
    "complete": true
  }
}
```
## 2.3 GET /store/order/{orderId}
For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
orderId | Y | integer | ID of pet that needs to be fetched
### Request samples
#### path
```
{
  "orderId": -5688968628666368
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 1846712863817728,
    "petId": -2643939593027584,
    "quantity": -8293637087559680,
    "shipDate": "hJgzrodOt4obzREm6",
    "status": "delivered",
    "complete": false
  }
}
```
## 2.4 DELETE /store/order/{orderId}
For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
orderId | Y | integer | ID of the order that needs to be deleted
### Request samples
#### path
```
{
  "orderId": 8425033328230400
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

# 3.user
Operations about user
## 3.1 POST /user
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
  "id": -7645026083405824,
  "username": "chFg@Lz3PWEt9*1u!X",
  "firstName": "xh0wdNg",
  "lastName": "lU9]t4iDNydfl0^vANO",
  "email": "KSK2]u",
  "password": "rr**LQeNaM[q",
  "phone": "(Nf8&P&u",
  "userStatus": 6128606287757312
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
## 3.2 POST /user/createWithArray
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
    "id": -4802857899393024,
    "username": "liPdopCJmj",
    "firstName": "CykHH#*G1",
    "lastName": "l%I9sqCeIuXpCTJTdS",
    "email": "$7tQpowqr28",
    "password": "TIrwEo7VlE",
    "phone": "$*Lh*bF",
    "userStatus": -1636479285592064
  },
  {
    "id": -2069517349945344,
    "username": "KwaluhC3U5*hPrW3P",
    "firstName": "LdMd3vy@)",
    "lastName": "&gqNJEesNV]9Va(^",
    "email": "HNDRzUh928",
    "password": "3QYFU)Mt7fzblXP",
    "phone": "9GV[cAdC1d",
    "userStatus": 6166100576305152
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
## 3.3 POST /user/createWithList
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
    "id": -7269220345708544,
    "username": "vQD#%h4vBaZFQ",
    "firstName": "ahd!GIJ",
    "lastName": "zVtaxIbG702hqzlfw@V",
    "email": "XASd9z3VZxf*[@EBE5",
    "password": "s5HeePaQau(7jhW",
    "phone": "!SoNI&kFYuaS213",
    "userStatus": -4988278000320512
  },
  {
    "id": -1883952897851392,
    "username": "$(LxwL^(",
    "firstName": "y#fiz5a9jlW*puz$",
    "lastName": "PLYHTua6",
    "email": "v6CNu",
    "password": "W(GgUg)CLSCY&[)(UT",
    "phone": "LOXbLo5*!XkLde",
    "userStatus": 5358992486301696
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
## 3.4 GET /user/login
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
  "username": "OHd@a21",
  "password": "Jv!9D&90mRerT"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": "d*!TMm&a3zQmcR"
}
```
## 3.5 GET /user/logout
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
## 3.6 GET /user/{username}
### Parameters
#### path
Param | Required | Type | Remark
---- | -------- | -------- | ----
username | Y | string | The name that needs to be fetched. Use user1 for testing. 
### Request samples
#### path
```
{
  "username": "7RVw(EFK"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 3882567069597696,
    "username": "X3bMIiT(@zN",
    "firstName": "]7LmE2qm40KP08w",
    "lastName": "EKsH$hDmN8!c4OqMFm]R",
    "email": "qtdU)XX)HnaxxugV5T",
    "password": "2hIUa$EYu",
    "phone": "^%1@&v3q1mk",
    "userStatus": 52714662789120
  }
}
```
## 3.7 PUT /user/{username}
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
  "username": "KTzP(25Pw!rnI4(d8T"
}
```
#### body
```
{
  "id": -6385470971838464,
  "username": "Z%jCc!WV9!eWq*pw",
  "firstName": "Nd^3LKZ",
  "lastName": "@R(DCsm5LejYNhreEe",
  "email": "4E[DG",
  "password": ")H9rhsYrG5W&KQNYS3",
  "phone": "qiMqFBKdU!bSaE",
  "userStatus": 3784995793534976
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
## 3.8 DELETE /user/{username}
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
  "username": "YuFZKy"
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