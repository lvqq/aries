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
  "petId": 2101804871450624
}
```
#### formData
```
{
  "additionalMetadata": "C4ZIGdTgmF@)Xv]RT",
  "file": null
}
```
### Response samples
```
{
  "code": 1042006147072000,
  "type": "fnBL^dxk8DjR3$A",
  "message": "W)Hn97BI["
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
  "id": 8358793083617280,
  "category": {
    "id": 1762129241702400,
    "name": "77LsE6B(kh0sruzsur3"
  },
  "name": "doggie",
  "photoUrls": [
    "4GH0o"
  ],
  "tags": [
    {
      "id": -2922485901164544,
      "name": "P$GJx*bbtr"
    },
    {
      "id": -6153669414223872,
      "name": "yw@4chQ1gTlz"
    },
    {
      "id": 7579470386954240,
      "name": "R]vax"
    }
  ],
  "status": "sold"
}
```
### Response samples
N/A
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
  "id": -5233679156641792,
  "category": {
    "id": -2802437819727872,
    "name": "xY3CMY"
  },
  "name": "doggie",
  "photoUrls": [
    "o9kNGA",
    "Sw7N0Ls(LD3phyUrl(w",
    "XlSDRFw"
  ],
  "tags": [
    {
      "id": -5900931321298944,
      "name": "VW0u4c@G8HE3n^[RL8"
    },
    {
      "id": -1403978671718400,
      "name": "CXCy(o!lLm#dO"
    }
  ],
  "status": "available"
}
```
### Response samples
N/A
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
[
  {
    "id": -7960244755890176,
    "category": {
      "id": -2325743996502016,
      "name": "7(1el1"
    },
    "name": "doggie",
    "photoUrls": [
      "t$j1J9h!LcR9K#aF@"
    ],
    "tags": [
      {
        "id": 6325097593831424,
        "name": "h[Rr*YJbnJqjp[d"
      },
      {
        "id": 4390202323763200,
        "name": "*jI8q*a*(OAO!3W"
      }
    ],
    "status": "available"
  },
  {
    "id": -4144077452869632,
    "category": {
      "id": -348068595630080,
      "name": "vS!97qnRMEn!mc"
    },
    "name": "doggie",
    "photoUrls": [
      "N!Io63&1b"
    ],
    "tags": [
      {
        "id": -4750395708538880,
        "name": "!TFf@3jFIMou"
      },
      {
        "id": 3576154887815168,
        "name": "yQEeR"
      },
      {
        "id": -443586634055680,
        "name": "5Dc5umz&Nd%l1U8"
      }
    ],
    "status": "available"
  },
  {
    "id": 1308829132259328,
    "category": {
      "id": 7932924385034240,
      "name": "9(l2c1M3wPQ47drdbU1&"
    },
    "name": "doggie",
    "photoUrls": [
      "E72AKhSS))@ei[zG#hcY"
    ],
    "tags": [
      {
        "id": 1486813491363840,
        "name": "WM9bCg0Kq]PRXJM"
      },
      {
        "id": -3207601298866176,
        "name": "h[2JF4Y@"
      },
      {
        "id": -6396413902585856,
        "name": "bw]^[MSP!"
      }
    ],
    "status": "available"
  }
]
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
    "l3G4mBByBaZu",
    "$O@4OhMu5X8y"
  ]
}
```
### Response samples
```
[
  {
    "id": 2807731664715776,
    "category": {
      "id": -7238510444544000,
      "name": "9JNFv3gdhK!PgxQl"
    },
    "name": "doggie",
    "photoUrls": [
      "a!IlABLRjW"
    ],
    "tags": [
      {
        "id": -7008785260347392,
        "name": "3!0f6z!"
      },
      {
        "id": 1445097132523520,
        "name": "agLFo8pAg2X"
      }
    ],
    "status": "available"
  }
]
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
  "petId": 5347170941140992
}
```
### Response samples
```
{
  "id": 997788938665984,
  "category": {
    "id": -6787636085653504,
    "name": "%SGLyHTQL2"
  },
  "name": "doggie",
  "photoUrls": [
    "bzDpJXdaV8X(w"
  ],
  "tags": [
    {
      "id": -1443458879324160,
      "name": "A46SQOwejiYu"
    },
    {
      "id": -2845431692263424,
      "name": "X&hOf1v"
    },
    {
      "id": -414836554989568,
      "name": "^m7NoaGIUpeWZ2ezn"
    }
  ],
  "status": "pending"
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
  "petId": -111350860742656
}
```
#### formData
```
{
  "name": "0f%EU2ilNyCO^6uC",
  "status": "OPXFtf6"
}
```
### Response samples
N/A
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
  "api_key": "8)X8H6&7@nH*sz("
}
```
#### path
```
{
  "petId": 8515127481466880
}
```
### Response samples
N/A

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
  "id": -2886425406078976,
  "petId": -5570034160107520,
  "quantity": -8589753129631744,
  "shipDate": "b^!K9t(",
  "status": "delivered",
  "complete": true
}
```
### Response samples
```
{
  "id": 6656164141989888,
  "petId": -7533733770952704,
  "quantity": -7159614739054592,
  "shipDate": "Y8Z8k6tsIY",
  "status": "approved",
  "complete": false
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
  "orderId": -6861599180587008
}
```
### Response samples
```
{
  "id": -7198853736431616,
  "petId": 1855515588034560,
  "quantity": -5737019242184704,
  "shipDate": "wTSM%aauhDoS)5U",
  "status": "approved",
  "complete": false
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
  "orderId": -3372587727978496
}
```
### Response samples
N/A
## 2.4 GET /store/inventory
Returns a map of status codes to quantities
### Parameters
N/A
### Request samples
N/A
### Response samples
N/A

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
    "id": -2968249973080064,
    "username": "hvD$9J6o",
    "firstName": "#peS&&NX4",
    "lastName": "pwhprh8%Vlo#",
    "email": "Tu8WLDw*9o",
    "password": "dBHX5",
    "phone": "n8mT8A!u",
    "userStatus": 3500152920735744
  },
  {
    "id": 2775968804503552,
    "username": "ShXLTaEd$5*I^Mdq",
    "firstName": "[$945]Yu4evTp",
    "lastName": "lgWH%)",
    "email": "!(jR^v!dkQ978D[FnM",
    "password": "e*P[ukWHKn",
    "phone": "eMU73SGMbT]@1FjBFFm",
    "userStatus": 3370937361629184
  }
]
```
### Response samples
N/A
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
    "id": -3520841396518912,
    "username": "FyFtyO",
    "firstName": "FAdlAr$rc[aKi62r8",
    "lastName": "EF4XTAOluzU]",
    "email": "HIcnw6*^qv[hrSQY",
    "password": "&(B6Dwe2i)02t)I@EF2#",
    "phone": "jVU4!Y)RwW",
    "userStatus": -1134361567035392
  },
  {
    "id": -8929969342251008,
    "username": "vKKjKyGdqKm^w!",
    "firstName": "BZWCR((Y@*xTql2e",
    "lastName": "L1OL8KTye@&OA",
    "email": "RvbPFmp^b@imBLDhd",
    "password": "Bcub@LYY7x*",
    "phone": "cBa@JTp3",
    "userStatus": 8727813469241344
  }
]
```
### Response samples
N/A
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
  "username": "dDSVMYL"
}
```
### Response samples
```
{
  "id": -7284647717240832,
  "username": "$&NPdprJQ$XmS9V0Z",
  "firstName": ")#KE3yZOdMT6QQoe#p",
  "lastName": "eJzRE@Iu",
  "email": "q%ho#2w]P@Uss*%v8d5W",
  "password": "QvO#P%!x*Gx1T0%",
  "phone": "JV$tFvK9qhqyNa",
  "userStatus": 3851821139361792
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
  "username": "O4X3G"
}
```
#### body
```
{
  "id": -8676345059999744,
  "username": "8jL]B",
  "firstName": "5NO&#fJ!",
  "lastName": "KUq7zh9wqx1k5]",
  "email": "p8lL6p",
  "password": "aH3501X",
  "phone": "JtP]m[OqPLcM$UnxvLXR",
  "userStatus": 1005109119025152
}
```
### Response samples
N/A
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
  "username": "O7*@l#x*"
}
```
### Response samples
N/A
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
  "username": "ZtWcrIxJRB",
  "password": "p0KRY2oq"
}
```
### Response samples
```
"p581p8Wc"
```
## 3.7 GET /user/logout
### Parameters
N/A
### Request samples
N/A
### Response samples
N/A
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
  "id": 1758746531332096,
  "username": "pbf2iEB8ZTVez0WzK",
  "firstName": "[07Wk3D)",
  "lastName": "sn&Qlm&#",
  "email": "HPCi1btE",
  "password": "&[usMS*8",
  "phone": "S[EauPy9Y[z*",
  "userStatus": -2974544948101120
}
```
### Response samples
N/A