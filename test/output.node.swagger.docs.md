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
  "petId": 8096379977072640
}
```
#### formData
```
{
  "additionalMetadata": "mBi[$v!ADzL*HATao5",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": 5508245842034688,
    "type": "o(B(aRS",
    "message": "Dn4bH]W6CjKkN"
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
  "id": 4201307908866048,
  "category": {
    "id": 6079074208317440,
    "name": "zkH^P9[gA60"
  },
  "name": "doggie",
  "photoUrls": [
    "NhoM83XQ5BF3M[)h",
    "p2kgtt5dse[Du3S"
  ],
  "tags": [
    {
      "id": -871177786490880,
      "name": "QksQ["
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
  "id": 8034836182728704,
  "category": {
    "id": -5220651698749440,
    "name": "OC3Dg$NFu"
  },
  "name": "doggie",
  "photoUrls": [
    "&YESrFBAE",
    "r^BjX7t"
  ],
  "tags": [
    {
      "id": 1363770723008512,
      "name": "ytkAtk#O!r$L*KP0Xf^"
    },
    {
      "id": -1491508578484224,
      "name": "k$vX43!0oi#c4Zd6RZW"
    },
    {
      "id": -8993836487409664,
      "name": "vCQ1RXr^n"
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
    "available",
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
      "id": -6577460036501504,
      "category": {
        "id": -8583646852153344,
        "name": "q87jXO1Z6Lun4ABgCl])"
      },
      "name": "doggie",
      "photoUrls": [
        "]e9aDW0xt8E)*IEQN"
      ],
      "tags": [
        {
          "id": -5241681523769344,
          "name": "fB*f$%Jnlnh2"
        },
        {
          "id": -4267952937369600,
          "name": "bM0kz4JLI!vyPLG"
        },
        {
          "id": 8963120806494208,
          "name": "R@]ODm)fP*W4$9h"
        }
      ],
      "status": "sold"
    },
    {
      "id": -1290090496131072,
      "category": {
        "id": 2089513497133056,
        "name": "VdLE1v(EJB@mq@Qh*C"
      },
      "name": "doggie",
      "photoUrls": [
        "Ehs5Vgz",
        "R7OttpjUb)#%PFzUPUBy",
        "8[OOm"
      ],
      "tags": [
        {
          "id": -7984566572679168,
          "name": "EbplE"
        },
        {
          "id": -7489876568047616,
          "name": "zgbI5%G4!"
        }
      ],
      "status": "available"
    },
    {
      "id": -3093111643308032,
      "category": {
        "id": 4642504393621504,
        "name": "PNU!t8n]"
      },
      "name": "doggie",
      "photoUrls": [
        "f2Z^xO]]4#Kn"
      ],
      "tags": [
        {
          "id": 7828316434202624,
          "name": "][qU5Kqs89J7]#ZBq"
        },
        {
          "id": 1707323210858496,
          "name": "o9MtQ$W3t8Ae"
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
    "rvq6i[",
    "m$ifq0tvTEHFu2"
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
      "id": 5825842470977536,
      "category": {
        "id": 6590718126587904,
        "name": "lqKt5"
      },
      "name": "doggie",
      "photoUrls": [
        "uNUt[3l]m"
      ],
      "tags": [
        {
          "id": -1211576652660736,
          "name": "wvB22o"
        }
      ],
      "status": "pending"
    },
    {
      "id": -1163411148767232,
      "category": {
        "id": 5578040411160576,
        "name": "]mIyUtvHpl)JZ"
      },
      "name": "doggie",
      "photoUrls": [
        "T5tt)P*g",
        "9hLRc",
        "gRLMp$$&Jt9"
      ],
      "tags": [
        {
          "id": -773175486971904,
          "name": "!]D5IQ"
        },
        {
          "id": 7571445232173056,
          "name": "EyiE%p[On1CG4dL$Bw)!"
        },
        {
          "id": -2936187140440064,
          "name": "3n1Ur"
        }
      ],
      "status": "available"
    },
    {
      "id": 5595543845732352,
      "category": {
        "id": -8950017670774784,
        "name": "NJzWG"
      },
      "name": "doggie",
      "photoUrls": [
        "vqf&UjVUe%iqS#fQ",
        "zSnt[fZq",
        "wNJNKxjifWuO!335vJT"
      ],
      "tags": [
        {
          "id": 2338811757461504,
          "name": "6iZ@YKdms6(x&ax"
        },
        {
          "id": 1063184035217408,
          "name": "p]h1(CeoA"
        },
        {
          "id": -2537568855916544,
          "name": "z%bDj[9C#CAtM7rT"
        }
      ],
      "status": "pending"
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
  "petId": 6445667257942016
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -8158236611969024,
    "category": {
      "id": 3983879190872064,
      "name": "cCaOh"
    },
    "name": "doggie",
    "photoUrls": [
      "Q^W42juI"
    ],
    "tags": [
      {
        "id": 4739761470177280,
        "name": "doW@SW)jz23P]g"
      },
      {
        "id": -168278349578240,
        "name": "vL3Ly^V1xDzjBYPo"
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
  "petId": 7267601235312640
}
```
#### formData
```
{
  "name": "09h7CGK92jIDa89Yv$W",
  "status": "p!xz4TU6jUs&xlh"
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
  "api_key": "B$tC0Y8n0@bY7oBh"
}
```
#### path
```
{
  "petId": -8822068573372416
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
  "id": -6661074598232064,
  "petId": -8709099554340864,
  "quantity": 2032648813805568,
  "shipDate": "LOFmR7jXKp",
  "status": "placed",
  "complete": false
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 2316189665591296,
    "petId": 6176988028993536,
    "quantity": -326462548738048,
    "shipDate": "f0UqOD[q4aHPpl1",
    "status": "approved",
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
  "orderId": 3883513942114304
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -2292330199515136,
    "petId": 6643234302328832,
    "quantity": -6666155867504640,
    "shipDate": "p!DIMeKQoRS#uQoEu",
    "status": "placed",
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
  "orderId": -2859598012743680
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
    "id": -2603211370266624,
    "username": "X7#T[",
    "firstName": "7Pq2p",
    "lastName": "!qK75&4a[F6UmE]b",
    "email": "vF^5HZli$RwM2]FeFko#",
    "password": "3RU]$W",
    "phone": "K#fixB2d)XoaaCUg@",
    "userStatus": 444771474604032
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
    "id": 2751349808693248,
    "username": "0imGkaEQo",
    "firstName": "#z7J#3qa&ycI^",
    "lastName": "WF2DCWWYGo",
    "email": "kwkyhbjdELGZU]SB)8vq",
    "password": "YzXpBn*8ctZDOBmI#N!",
    "phone": "chhpm*Dm3yoAzlhT*r",
    "userStatus": 5414401473511424
  },
  {
    "id": -5495039522242560,
    "username": "7JIjtxkTip0A[JYZ[)mS",
    "firstName": "c7%V@U",
    "lastName": "8Y[(M8U0pL8IYr^c&OK5",
    "email": "ZJslOH*[ja2",
    "password": "S8EDpqw$B5c*av&^d",
    "phone": "fyPPb",
    "userStatus": -4539162606698496
  },
  {
    "id": 3952265861791744,
    "username": "zARYhz]#AGlQnFW",
    "firstName": "dWybW",
    "lastName": "DCQZGg6NMh(",
    "email": "^IRmxTYHlY",
    "password": "1rQg*fkQ]Sq0Ztwu*",
    "phone": "GmGv[(]cDXcgjylWg",
    "userStatus": 4199061385117696
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
  "username": "3%Qk))FA%tl6@p!IUzz]"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -2688768926547968,
    "username": "8HHmTN5M",
    "firstName": "5UYE7eE0#00eQ^fCkp",
    "lastName": "D6K68jmtx",
    "email": "!zdo&KYk7XAzgVhbb0T",
    "password": "@DIDaV",
    "phone": "Jk@m5cDt8ElSD9o",
    "userStatus": 2254657007124480
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
  "username": "DXTv$Spm6[MDyvB(a"
}
```
#### body
```
{
  "id": 5516461191725056,
  "username": "a1G10LXOzGmZ",
  "firstName": "59N#t!%9B",
  "lastName": "y&EXn9!C0Nw4qMWw",
  "email": "vQ#%z()",
  "password": "6Erum$BiSO0",
  "phone": "WNq7XCqvVi#I",
  "userStatus": -2115203147759616
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
  "username": "8(pdi3[^#Gv0Ii#QRGh"
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
  "username": "Dm26]$op4@HfOKK^E$U",
  "password": "&c2ej[YfZqCzC"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": "QazAHORGMNIj"
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
  "id": -5774965299216384,
  "username": "A#gy)6QkCEI",
  "firstName": "ix@0G2MfOpQ",
  "lastName": "2Ak0YVF0Cy",
  "email": "oV5eWZLFTlRl#F7A(ibw",
  "password": "Lk7XD",
  "phone": "AkKPIGSs*PhEp4Hstg",
  "userStatus": 2880730493353984
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