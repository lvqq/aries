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
  "petId": 97283123183616
}
```
#### formData
```
{
  "additionalMetadata": "GHW]z8FGZ!9GJSHMc[)R",
  "file": null
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "code": 4756766646599680,
    "type": "fY67w&IH)",
    "message": "Uk3dz"
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
  "id": 3015776650919936,
  "category": {
    "id": 8387739045068800,
    "name": "hlXTIgY"
  },
  "name": "doggie",
  "photoUrls": [
    "&bQ5NDv5",
    "FWi1upH%$udN0n52YA",
    "%(Xj0zaM8o88o3a"
  ],
  "tags": [
    {
      "id": 5531064994889728,
      "name": "OU1TQXp*!R&aeJ2dKMc"
    },
    {
      "id": -2122107123138560,
      "name": "YsZio3ME0Z%1[JjtIXLz"
    },
    {
      "id": 8944885793030144,
      "name": "WLcS%tG%YhplX)JHERAO"
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
  "id": 459467757977600,
  "category": {
    "id": 2537610601824256,
    "name": "cqQd[d]WeLH"
  },
  "name": "doggie",
  "photoUrls": [
    "g$g2^fesdOaV7k",
    "!ilTdg@iyG#c)[Vy7Jy3"
  ],
  "tags": [
    {
      "id": 9000661354020864,
      "name": "[bA@t7Nqz%Cy(]"
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
      "id": -1666821258215424,
      "category": {
        "id": -4672631211032576,
        "name": "OTX0c1e^]BelJb5x7@AP"
      },
      "name": "doggie",
      "photoUrls": [
        "i2ZC5ug5a7oQt2)6DQ",
        "ahul0#wxX[z",
        "d(cWFQJWGPOx[Y6L"
      ],
      "tags": [
        {
          "id": -6228859976417280,
          "name": "OehmY"
        },
        {
          "id": 6582720553549824,
          "name": "dE@xkqcdpmbOM"
        }
      ],
      "status": "pending"
    },
    {
      "id": -302071035199488,
      "category": {
        "id": -3812629839609856,
        "name": "v1[lOF$oOATdA0wb"
      },
      "name": "doggie",
      "photoUrls": [
        "5)VJHEHqCmYRO^pE",
        "K6X7u",
        "$Vxn94k2C3X227d9cJ"
      ],
      "tags": [
        {
          "id": -4515388687646720,
          "name": "V4%wDP^"
        },
        {
          "id": -8726027253579776,
          "name": "0&QxC"
        },
        {
          "id": -7690250545528832,
          "name": "@m48Ubcr7ok"
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
    "hz&]!7R)Da!t)$LMSC9",
    "^m6n5v"
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
      "id": 6565376909377536,
      "category": {
        "id": 5908797788782592,
        "name": "RklGJt@h!^F58q$6IJOX"
      },
      "name": "doggie",
      "photoUrls": [
        "@C3y^Y",
        "v&53Qb2"
      ],
      "tags": [
        {
          "id": -3475579613478912,
          "name": "f93C%iU[yqg&FkX"
        }
      ],
      "status": "available"
    },
    {
      "id": -579167267586048,
      "category": {
        "id": -2719231086952448,
        "name": "NtNV*DBW0"
      },
      "name": "doggie",
      "photoUrls": [
        "V#7CE3vcIu"
      ],
      "tags": [
        {
          "id": -8392698021019648,
          "name": "0aMaBcM$a@1@kG"
        },
        {
          "id": 7946297881395200,
          "name": "Yb%bbX]DhHrF6O"
        }
      ],
      "status": "sold"
    },
    {
      "id": 5367479714971648,
      "category": {
        "id": 732106447650816,
        "name": "55AA2tzIs!XjG"
      },
      "name": "doggie",
      "photoUrls": [
        "7v4($X$o$3Eg",
        "Ivch8y7dG"
      ],
      "tags": [
        {
          "id": 3203324157362176,
          "name": "XuMGdvR%"
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
  "petId": -678059275452416
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": -1188787010928640,
    "category": {
      "id": 854610260525056,
      "name": "64RXLO&"
    },
    "name": "doggie",
    "photoUrls": [
      "VAz)%yIVYOMKC[",
      "[]gBo9#3ewu7e[1#W"
    ],
    "tags": [
      {
        "id": -3676471893688320,
        "name": "&tpp8WE1x3@"
      },
      {
        "id": -8127303863238656,
        "name": "211^ql]NF$fN8Igv"
      }
    ],
    "status": "pending"
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
  "petId": 2036742714556416
}
```
#### formData
```
{
  "name": "6#AE78ay#y3TkVEkGg4",
  "status": "^F36%[D$5LwCDzBix&n"
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
  "api_key": "$Y(&j(6TTIxSkyCo"
}
```
#### path
```
{
  "petId": -6528351925698560
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
  "id": -4432956697346048,
  "petId": -6271314704728064,
  "quantity": -4320772579393536,
  "shipDate": "l9s)*wvwn]Aj",
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
    "id": 5108335233728512,
    "petId": -8025725382688768,
    "quantity": 3154885256151040,
    "shipDate": "sNy0FIDQubAQX^BLFC",
    "status": "approved",
    "complete": false
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
  "orderId": -1638702526758912
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 3193616415588352,
    "petId": 4855951467216896,
    "quantity": 752520263630848,
    "shipDate": "wK0gQy4zPVv",
    "status": "approved",
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
  "orderId": -2282648001052672
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
    "id": 7522208742113280,
    "username": "^AkQyJJE!g@9kQ",
    "firstName": "Kxhxz",
    "lastName": "fwXDt%VJ$",
    "email": "n!yaZw7qBEUVeZ@]RbTx",
    "password": "&8AYB1",
    "phone": "SUBW9B9TiN",
    "userStatus": -5128943854157824
  },
  {
    "id": 4302304639451136,
    "username": "AsifIZ96$",
    "firstName": "6x4k*6&j[Owyw",
    "lastName": "BGme5#yysiK^4*[FT",
    "email": "bCxvfa3U6EG[hwAcXYw",
    "password": "bHJYN1D",
    "phone": "OBjC!Y4(G#fr",
    "userStatus": -7634799434924032
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
    "id": -8725749607432192,
    "username": "h]PhyJEGb&R44#qD",
    "firstName": "aBTL^OI7@*O05fWMx",
    "lastName": "o(t4b@6)",
    "email": "#YPhkFKVV@pE",
    "password": "b^(&A",
    "phone": "GkQhDzgp2Rij5zD",
    "userStatus": 4254486969188352
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
  "username": "ney3zNy"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 7366391581638656,
    "username": "H$B9)ZA)7JVH",
    "firstName": "$wn3yQ#Enn$QfWO",
    "lastName": "K6Nx*ye&Q",
    "email": "wVKHQ6NF^tgYSY$ebnea",
    "password": "Ga&B7L(c!H",
    "phone": "vA&g^Wz*",
    "userStatus": 1197639127269376
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
  "username": "r3^jayf"
}
```
#### body
```
{
  "id": 8810644069416960,
  "username": "@ILhd]POmRXrNfz4p",
  "firstName": "rn5GX",
  "lastName": "3xYknN",
  "email": "G^xinZ^SP",
  "password": "fQejwxBobL",
  "phone": "lSvMTEYfhD5Fza",
  "userStatus": -4436053817556992
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
  "username": "Q2WZ2%7y"
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
  "username": "62*m933",
  "password": "PbYL!AzIfll"
}
```
### Response samples
```
{
  "code": 0,
  "msg": "success",
  "data": "oz*0&u$H@xW"
}
```
## 3.7 GET /user/logout
### Parameters
N/A
### Request samples

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
  "id": -8465473570078720,
  "username": ")ibj1qIR^1v&p*yvp8^X",
  "firstName": "IQ64(YQpI&i%O9U7TbFt",
  "lastName": "KQ6aaiT%EF7nc476",
  "email": "kpXONwH@iw",
  "password": "SR$6PSeoLLxybk36L%",
  "phone": "thyXsagYuC%#B1v7",
  "userStatus": -8626237538828288
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