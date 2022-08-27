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
  "petId": -253323542265856
}
```
#### formData
```
{
  "additionalMetadata": "Q&Os6Wwd^s",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": 133823908020224,
    "type": "J($58TBp",
    "message": "0&ELa!jtc1^gO0y3"
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
  "id": 3715420120940544,
  "category": {
    "id": 417134781923328,
    "name": "&(^mjz933%FTSO%"
  },
  "name": "doggie",
  "photoUrls": [
    "xw%vlQS*vC",
    "OhIEq)K4#MU"
  ],
  "tags": [
    {
      "id": -4403099758231552,
      "name": "mwkr]AKe&"
    },
    {
      "id": -3357004378669056,
      "name": "JoocnH"
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
  "id": 3972307814973440,
  "category": {
    "id": 6799133843128320,
    "name": "@*N3Dz)nAKpU"
  },
  "name": "doggie",
  "photoUrls": [
    "]&sjGn",
    "&z!byHIJRnBJvxEz"
  ],
  "tags": [
    {
      "id": 7211970704965632,
      "name": "gcE*[CzE0"
    },
    {
      "id": -2005745071554560,
      "name": "B]7[3pOCGD$p78J"
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
      "id": 6263448161746944,
      "category": {
        "id": -6505552339271680,
        "name": "h^Y6P"
      },
      "name": "doggie",
      "photoUrls": [
        "nioHt!qGEiJSAT",
        "J5zJ6nOMy]k(WE",
        "5bpgrykqm"
      ],
      "tags": [
        {
          "id": 3946117918097408,
          "name": "Ijhchde9xoQl93B(9]n]"
        }
      ],
      "status": "sold"
    },
    {
      "id": -2466623575293952,
      "category": {
        "id": -137887857246208,
        "name": "3de^@W$LMu"
      },
      "name": "doggie",
      "photoUrls": [
        "kTRj^V",
        "JfPz!lMEKqRbd7@7vp(",
        "D@2ib!"
      ],
      "tags": [
        {
          "id": -6010101806661632,
          "name": "qPS$P]tnnt"
        },
        {
          "id": -8228154879508480,
          "name": "4!cKz5gp22SCA!(]"
        },
        {
          "id": 4287082285498368,
          "name": "uVm6l1f3i"
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
    "nyi67s7^7spTiCL1",
    "I6C%k6l#Gy@cavU#",
    "S0YhdEaYiL"
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
      "id": -2494138150813696,
      "category": {
        "id": -5472032217104384,
        "name": "eMYZCjvj!SmyG"
      },
      "name": "doggie",
      "photoUrls": [
        "SHabh2R!cEI8]V32*zx!",
        "rNqxKlBOQf(ss[0SY",
        "quLD%u&R"
      ],
      "tags": [
        {
          "id": -813226992336896,
          "name": "03yo#TPY()R]K!Oq"
        },
        {
          "id": 7528727500029952,
          "name": "1Bq[L!yl(#Dej5"
        },
        {
          "id": -4132530936610816,
          "name": "o2o)5n!)]KU"
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
  "petId": -2642205646782464
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -1923939739631616,
    "category": {
      "id": -3602659751755776,
      "name": "lIeVkUL^)O2hRX$"
    },
    "name": "doggie",
    "photoUrls": [
      "F4swkf)7^!jEsD$wj",
      "sxPHJNUglDN"
    ],
    "tags": [
      {
        "id": 3304906777690112,
        "name": "cT(1%WoKJYzl4"
      },
      {
        "id": 7752895587942400,
        "name": "Q3*TlJl)AVf0Gn]m&dzQ"
      }
    ],
    "status": "sold"
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
  "petId": 5799592163540992
}
```
#### formData
```
{
  "name": "2VE]VXy0a",
  "status": "68ms%F5G"
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
  "api_key": "Nk7s$T67k6"
}
```
#### path
```
{
  "petId": -3014163458686976
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
  "id": 3428622882832384,
  "petId": -6447866910343168,
  "quantity": -3239806540709888,
  "shipDate": "Ry$Fn4wl0NF2&bQDLP*U",
  "status": "approved",
  "complete": false
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 2249020021932032,
    "petId": -4797053846683648,
    "quantity": -7192909312950272,
    "shipDate": "GlKUPz6",
    "status": "delivered",
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
  "orderId": 3694475176050688
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -6644741206704128,
    "petId": -1848161307983872,
    "quantity": -3100219034042368,
    "shipDate": "@9TL7J9pk276II3dwL&",
    "status": "approved",
    "complete": false
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
  "orderId": 8876363863818240
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
    "id": 6259974741164032,
    "username": "WxpgoJMw",
    "firstName": "fCc3o9LC(x!3",
    "lastName": "Z3WWsZA3ehsqRPOLJWJr",
    "email": "[2JiPOJtaZ6y(0v",
    "password": "FAG1[",
    "phone": "fLsEAc!1",
    "userStatus": 5560299163746304
  },
  {
    "id": 2160853231075328,
    "username": "BObZgz94s%h$H6G%@q]7",
    "firstName": "LyyLSe8[YUcGIqZ)",
    "lastName": "fMq]q]8Ud#UVw^",
    "email": "vh)6C",
    "password": "Nt5(nHh#zO2ES",
    "phone": "3v(nYbYc)%XsCkxF4n",
    "userStatus": 5527165521100800
  },
  {
    "id": -4381759420497920,
    "username": "vK#0z",
    "firstName": ")4hYMx",
    "lastName": "Sax[)",
    "email": "D01k0Vm",
    "password": "tQI7ZG5D)AC8j",
    "phone": "m0tbz",
    "userStatus": 2715102604165120
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
    "id": 5048014372601856,
    "username": "$x)GH5Gdkaqj",
    "firstName": "h@5Sua[9Pa3m7FOvmWs!",
    "lastName": "J^v04iadR",
    "email": "0Dofp&H5",
    "password": "90Fl1W[",
    "phone": "AYsbdpLw@ZRr[hz!53@$",
    "userStatus": -8042586958725120
  },
  {
    "id": -7563610200997888,
    "username": "$mY0GgL@A535",
    "firstName": "Vo[TSYREGMJ37@ANfW",
    "lastName": "B$4Z^hC#Geaz[#[v$S",
    "email": "7*Zi(ZLe#9",
    "password": "KIeI1G",
    "phone": "ut9*)AJp%CHgK7zqlmn",
    "userStatus": 7849730218393600
  },
  {
    "id": -4300265318514688,
    "username": "Y6Xyj9",
    "firstName": "izul^jB",
    "lastName": "UlMIW32J%",
    "email": "F##zBx8",
    "password": "%DbT!9KzkxEFD^",
    "phone": "&Z2BFDLBGJ]DaD(WFRJs",
    "userStatus": -6551209875865600
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
  "username": "X7QkX![)A^"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -4894030458519552,
    "username": "IPACXJ^W[i4VO",
    "firstName": "Dq!7$4OWGr#4csl90Q",
    "lastName": "J(2tmOBsm!SlnH6E",
    "email": "w4X2Zr42Va9Yt]Qd",
    "password": "ei6S1H",
    "phone": "[%Sh!9Z[8R",
    "userStatus": -5334761954344960
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
  "username": "vWNgeR20"
}
```
#### body
```
{
  "id": -6539156561854464,
  "username": "LvG1NnEZal",
  "firstName": "jCt7S&SoR",
  "lastName": "spbeoNe%f6[!RfCEJ",
  "email": "dLbKz(txoS*LbA@02",
  "password": "GtlBTx",
  "phone": "Reak^",
  "userStatus": -1572088305418240
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
  "username": "j6G6nXLM"
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
  "username": "Q#6r0g05Mzr21l",
  "password": "8Rd*3"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": "7dr)Z"
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
  "id": 2510090225582080,
  "username": "cv#79leU",
  "firstName": "DFZCq6%u!F1#nQ[Qanw",
  "lastName": "LpH#t@Ugd$F[@tf",
  "email": "mnZhz0EHHY4^uyQZr14x",
  "password": "#kMQ1W(9Fe1T",
  "phone": "KInWSv9uR",
  "userStatus": -8673807204089856
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