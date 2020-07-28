# secured restfull api using nodejs 

CRUD operations with JWT authentication 

## How to run

### Step 1: 
Create a MongoDB database on [MongoDB Atlas ](https://www.mongodb.com/cloud/atlas)
and note down the  the connection string and credentials

### Step 2:
Create an .env file in the src folder 
and put mongodb connection , JWT key and PORT you wish to run the application
```
MONGODB_URL=""
JWT_KEY=""
PORT=""
```
### Step 3:
install required packages 
```
npm install
```
### Step 4:
Run the application 
```
npm run start
```
## Usage
### Create a user

```
curl -d '{"name":"value1", "email":"value2@test.com", "password":"123456"}'
 -H "Content-Type: application/json" -X POST http://localhost:3005/users
```
### login
```
curl -d '{"email":"value2@test.com", "password":"123456"}'
 -H "Content-Type: application/json" -X POST http://localhost:3005/users/login
```
get the token received  

### create a practitioner
replace<token> with the received token from login 

```
curl -d '{
	"name":"test practitioner",
	"location":"test",
	"description":"desc",
	"title":"title",
	"phoneNumber":999999999
}' 
-H "Content-Type: application/json" 
-H  "Authorization: Bearer <token>" 
-X POST http://localhost:3005/practitioners
```

### update a practitioner
```
 curl -X PUT 
-H "Content-Type: application/json" 
-H  "Authorization: Bearer <token>" 
-d '{"name":"updated1","email":"abc@gmail.com"}'
 http://localhost:3005/practioners/id
```
### get a practitioner
```
 http://localhost:3005/practioners/id
```

### get a practitioners
```
http://localhost:3005/practioners
```
   #### options
1 .page

```
http://localhost:3005/practioners?page=1
```

default page is 0
