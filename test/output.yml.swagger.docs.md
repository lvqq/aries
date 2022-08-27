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
  "id": -4246755537321984,
  "category": {
    "id": 1733441934589952,
    "name": "xjGfd#2p8#J2T0@"
  },
  "name": "doggie",
  "photoUrls": [
    "q(8kGfd",
    "U#PJROo"
  ],
  "tags": [
    {
      "id": -5396234986586112,
      "name": "cJpsXvU[X5&(6zwt"
    }
  ],
  "status": "sold"
}
```
### Response samples
N/A
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
  "id": 4695239658831872,
  "category": {
    "id": 7843259090993152,
    "name": "5emhf3h"
  },
  "name": "doggie",
  "photoUrls": [
    "hhxHvpD"
  ],
  "tags": [
    {
      "id": -3078200854839296,
      "name": "6eqVqi"
    },
    {
      "id": -3985434023559168,
      "name": "%VygA@Ce[fKW"
    }
  ],
  "status": "pending"
}
```
### Response samples
N/A
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
    "available",
    "available",
    "available"
  ]
}
```
### Response samples
```
[
  {
    "id": 4182017528823808,
    "category": {
      "id": -4435950033698816,
      "name": "@VW4g62@"
    },
    "name": "doggie",
    "photoUrls": [
      "3V*3S9",
      "LLfmn"
    ],
    "tags": [
      {
        "id": 713475563192320,
        "name": "aKw%Ap&1DaXNO3YCH(@O"
      },
      {
        "id": 4492384452739072,
        "name": "%abK*(Xuop5SF3r"
      },
      {
        "id": -5637546306437120,
        "name": "HddmXxun1*za]2@0"
      }
    ],
    "status": "sold"
  },
  {
    "id": 5518167723999232,
    "category": {
      "id": 509382714458112,
      "name": "rN1z2ffL7GRlT"
    },
    "name": "doggie",
    "photoUrls": [
      "rfC#Y]h6B)]rL)"
    ],
    "tags": [
      {
        "id": 890749667246080,
        "name": "ic!%^9bxWZX)7yw96"
      }
    ],
    "status": "sold"
  }
]
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
    "M09gN"
  ]
}
```
### Response samples
```
[
  {
    "id": -2587029556690944,
    "category": {
      "id": -3655888799793152,
      "name": "0Jx4[iY8J7XpAz"
    },
    "name": "doggie",
    "photoUrls": [
      "hnjjjN&c^F",
      "6IxRkL1SfM(RPlY60",
      "G&J#[C#Ld)"
    ],
    "tags": [
      {
        "id": 7119541687549952,
        "name": "FsYIQ%n)#iCP"
      },
      {
        "id": -425129850961920,
        "name": "QJ#$tT@i39]W43mw#%b"
      },
      {
        "id": 6458409352167424,
        "name": "on)MQz$a"
      }
    ],
    "status": "sold"
  }
]
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
  "petId": -156069628215296
}
```
### Response samples
```
{
  "id": -6434048729677824,
  "category": {
    "id": 2383776936099840,
    "name": "M1B8GFFps6RX"
  },
  "name": "doggie",
  "photoUrls": [
    "0&[o7Yvh"
  ],
  "tags": [
    {
      "id": -1650763805753344,
      "name": "CnemoOhgQk"
    },
    {
      "id": -5613446859063296,
      "name": "xUti#qwVOta^zJ4M$zxs"
    }
  ],
  "status": "pending"
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
  "petId": -2711401541926912
}
```
#### formData
```
{
  "name": "3tzY5K)Gp^gsEel",
  "status": "q*87zTwQA"
}
```
### Response samples
N/A
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
  "api_key": "]WHcz"
}
```
#### path
```
{
  "petId": 3751702335324160
}
```
### Response samples
N/A
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
  "petId": -327626325491712
}
```
#### formData
```
{
  "additionalMetadata": "FCJPx[82egPKu3vS",
  "file": null
}
```
### Response samples
```
{
  "code": -8208520994357248,
  "type": "GhdNLy",
  "message": "zZTgl!DB^"
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
N/A
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
  "id": -1421163360157696,
  "petId": -1612915660554240,
  "quantity": 4661464237342720,
  "shipDate": "3s8zo",
  "status": "placed",
  "complete": true
}
```
### Response samples
```
{
  "id": -218533422170112,
  "petId": -6129422197325824,
  "quantity": -4564912546250752,
  "shipDate": "VG33rn",
  "status": "placed",
  "complete": false
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
  "orderId": -2099207976517632
}
```
### Response samples
```
{
  "id": -7518088715042816,
  "petId": 5101516759236608,
  "quantity": 4880036481990656,
  "shipDate": "Y(&!XQlg9",
  "status": "delivered",
  "complete": false
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
  "orderId": -2097685175730176
}
```
### Response samples
N/A

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
  "id": -2398442382950400,
  "username": "h8JMAc^m@j9WO",
  "firstName": "DwFM0",
  "lastName": "AC(S@jswXp6uY(h@CMc",
  "email": "4AvwVL1e1W18Plt4f",
  "password": "E8f#ZjQP17mR#w8%",
  "phone": "BlpFQW))PceaMq",
  "userStatus": 8051687541440512
}
```
### Response samples
N/A
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
    "id": 5127093000077312,
    "username": "Nut97U]CA*s0Cc",
    "firstName": "qOe4N@(^",
    "lastName": "XWqONpSv",
    "email": "[s6^G$Zy8EOB*$@kaY",
    "password": "YDIGYco0aRWFlA84HT$7",
    "phone": "E$lfSGeGiRTComGqU@!",
    "userStatus": -7267905808891904
  },
  {
    "id": 8863547031289856,
    "username": "c3xQXf6oR",
    "firstName": "D3LV97E",
    "lastName": "rYDB[movsNV",
    "email": "XG^hlkKnARE&%GboJ2",
    "password": "QpLbn$$ujqAVhtHYU53",
    "phone": "s[Xe71g54%s",
    "userStatus": 5142160001204224
  }
]
```
### Response samples
N/A
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
    "id": 7761758412341248,
    "username": "jS57h",
    "firstName": "JhE3X*5#",
    "lastName": "Q9aRvdrUy00",
    "email": "#&H7)bRPpWfHGe%)",
    "password": "HKOV!I0B",
    "phone": "r%ltQ6OD@yWW1k)C%",
    "userStatus": -8008971310858240
  }
]
```
### Response samples
N/A
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
  "username": "Hn06U6*6aDiM[]DH1(X5",
  "password": ")mi8A#)#]"
}
```
### Response samples
```
"UYGW(Edkdb67rwHv"
```
## 3.5 GET /user/logout
### Parameters
N/A
### Request samples
N/A
### Response samples
N/A
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
  "username": "9mCZp2"
}
```
### Response samples
```
{
  "id": 1295075183165440,
  "username": "8NPOIkQ",
  "firstName": "B62b)",
  "lastName": "527bxMDOtfQJCUjF3",
  "email": "xKluaNp(uhEo#X3D#QAr",
  "password": "rqW531g4BZAjl",
  "phone": "ym4)IYe",
  "userStatus": -1960009961308160
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
  "username": "^MIDKjVu*N00^XF"
}
```
#### body
```
{
  "id": -1689837023264768,
  "username": "FpOxL$Ce[am8qlm",
  "firstName": "%cL7HvQmlz71p1nO8g",
  "lastName": "GrZd90yR",
  "email": "!J5YCXc7%",
  "password": "7V9tLJ8h",
  "phone": "0H3A9#KFsy8IEk)fek",
  "userStatus": 1844948068466688
}
```
### Response samples
N/A
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
  "username": "@zofirw1z]r"
}
```
### Response samples
N/A