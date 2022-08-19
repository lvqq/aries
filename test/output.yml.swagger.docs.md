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
  "id": 7616997676285952,
  "category": {
    "id": 2884790881615872,
    "name": "bXd@urPp%2xd6#F)3@C"
  },
  "name": "doggie",
  "photoUrls": [
    "TEO!wo7o[1czdNjrk",
    "rKtO!",
    "6wRcYH%"
  ],
  "tags": [
    {
      "id": -5987214068547584,
      "name": "!Qf&C]qh"
    },
    {
      "id": 262835141607424,
      "name": "eT7P@Ug4Ee12s^S7&G"
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
  "id": -7194542990163968,
  "category": {
    "id": -1244641902985216,
    "name": "W#sRRt3cLEi(L7Cf"
  },
  "name": "doggie",
  "photoUrls": [
    "t@nejKS*L(iK3EX3mO!",
    "GpldzwQS22tRLpI"
  ],
  "tags": [
    {
      "id": 1501570445344768,
      "name": "EClRY$u"
    },
    {
      "id": 2477961009692672,
      "name": "kELQ3(oLR%iM[Dwu@al"
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
{
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": -2288996201791488,
      "category": {
        "id": -60184797904896,
        "name": "3tF#dBwc5yY1piH60V9"
      },
      "name": "doggie",
      "photoUrls": [
        "b%))6",
        "N$C@rCfg46t"
      ],
      "tags": [
        {
          "id": 111955620659200,
          "name": "idfO["
        },
        {
          "id": 7386777354502144,
          "name": "se9w]8sDUU]S$tU4j"
        }
      ],
      "status": "available"
    },
    {
      "id": 5196651488608256,
      "category": {
        "id": 7128231647903744,
        "name": "T1hoyF6se["
      },
      "name": "doggie",
      "photoUrls": [
        "98[$^OKM^!9M",
        "FigIdiHDu!",
        "$JQH@RzC2RhXjb1VU]"
      ],
      "tags": [
        {
          "id": -8340787842514944,
          "name": "x2uh95M!I4Y^TX#MTwb"
        },
        {
          "id": 2260895531008000,
          "name": "Ty*vkmk)@!V]S"
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
    "tjDgwxEPjdY@i!Gz)w"
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
      "id": -5894298914521088,
      "category": {
        "id": -6047655977287680,
        "name": "Z)FFp(l7"
      },
      "name": "doggie",
      "photoUrls": [
        "xFcMnI)B3wd",
        "(X[bx4g3b5M@8yJgK!"
      ],
      "tags": [
        {
          "id": 5553102547582976,
          "name": "U(C1W^pzfy]9bcyxx(2"
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
  "petId": -2830333376462848
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -3483990698754048,
    "category": {
      "id": 1824366799093760,
      "name": "5tg3h*t8h1j%p8oh4B"
    },
    "name": "doggie",
    "photoUrls": [
      "X]5CK"
    ],
    "tags": [
      {
        "id": 6361803504222208,
        "name": "lzFvg2LrbQXT]PY@W[w9"
      },
      {
        "id": 5757425063821312,
        "name": "6CCCzIea2xcL&ttkYW("
      },
      {
        "id": 4596620146507776,
        "name": "0NFix"
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
  "petId": 784943311486976
}
```
#### formData
```
{
  "name": "$UuNpPt0LL7m",
  "status": "Qwk!B5[Y"
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
  "api_key": "MrByO"
}
```
#### path
```
{
  "petId": 7026890195861504
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
  "petId": -4126947621732352
}
```
#### formData
```
{
  "additionalMetadata": "unwMe]jhhe",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": 3735770040893440,
    "type": "^qs][]NZNsD2FF#18Mb",
    "message": "2bn%bXUhet$C"
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
  "id": -8371009765769216,
  "petId": 3059200938737664,
  "quantity": 6812191479037952,
  "shipDate": "j1ia%Z6#N",
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
    "id": 3958885182341120,
    "petId": -5177826516926464,
    "quantity": 2369314757804032,
    "shipDate": "tU@OK$MqzWdnFHi",
    "status": "delivered",
    "complete": false
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
  "orderId": -2618438744801280
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 8903526507872256,
    "petId": -6904954312720384,
    "quantity": 1432802960605184,
    "shipDate": "#1iWCq#XSp",
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
  "orderId": -8420238206959616
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
  "id": -4042090761682944,
  "username": "TCoHEeQfofBN1TUaExlN",
  "firstName": "$$SasRGH",
  "lastName": "IzAzxb7PniJ!nD",
  "email": "TF@D$Lax3nKPF",
  "password": "PcJzNZH*5vlE$",
  "phone": "[0es0)R!",
  "userStatus": 7566606272036864
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
    "id": 4200332036931584,
    "username": "&2fWGQDIvUt82xM^o",
    "firstName": "4Ph#Baf9)x[ewP",
    "lastName": "*NnDTnrZXgV",
    "email": "b*jsbrOy",
    "password": "h5KOFQtW*Z4TIh*gD",
    "phone": "*REDvIhkAz^jlGNs!y",
    "userStatus": -2628763485470720
  },
  {
    "id": -7032678473793536,
    "username": "hX[$e5EzS1ji6VjZ&rI",
    "firstName": "njRpT#sG]zrFEuq!)",
    "lastName": "%s93]vqCrr",
    "email": "BnY8D8trR1xyE2r2pv",
    "password": "9r!pyq@XSW$)MiiZoxS",
    "phone": "h[uDRRlJZ3NH!PL",
    "userStatus": 3802147091120128
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
    "id": 1095705959596032,
    "username": "0qQEu#Cc5s2HAL",
    "firstName": "B7x5fMfFvwZ#%rG0Twin",
    "lastName": "Bx$o*7Uy)FT2B2]ew",
    "email": "p7O$h([YG&&",
    "password": "R@(b5t",
    "phone": "gZ&B8rM$zmv2cOEJF",
    "userStatus": 121705003483136
  },
  {
    "id": 7346626276360192,
    "username": "rWsywlTfH]A0",
    "firstName": "57yA#Vw",
    "lastName": "a9N9#mexpOWOZ",
    "email": "sAdIlh@D@C[t$on5",
    "password": "NvuWy36aTNH6r",
    "phone": "sGNF(HVJurQU0AmtRBCt",
    "userStatus": -3154327434690560
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
  "username": "jsccq",
  "password": "IWImr0DMvOO(9zGO"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": "7GJ[hmhL&QPk"
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
  "username": "EL^07TeT@FsQJvV(TL"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -3862732075958272,
    "username": "(1zWlqaynFbPB*EX)!x",
    "firstName": "LuK&wLUvB47B3wOe",
    "lastName": "IbGC5GshX",
    "email": "#m$GUNl4k^0J[0",
    "password": "(G3^b54v(K@",
    "phone": "cfL[Irv2UX#c6C6u",
    "userStatus": -6709912264507392
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
  "username": "hCs]auf"
}
```
#### body
```
{
  "id": -2511103938527232,
  "username": "9SHkPH5QID$",
  "firstName": "SFH92oa6Ljw)J(MnZ7",
  "lastName": "9u)GQJ)y4^",
  "email": "4Xs3KTaBA$kMWM!)[4q^",
  "password": "T(MuWc!Ou17jzL",
  "phone": "zl)QfTD*l]92k^t2B",
  "userStatus": 6430867203293184
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
  "username": "]3[^HHB[ck[6wY(Mi55!"
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