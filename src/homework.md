- create a repository.
- initialize the repository.
- Install express.
- create a server.
- listen to port 7777.
- Write request handler for /test, /hello.
- Install nodemon and update scripts inside package.json.
- initialize git in your repo.
- create gitignore file, ignore node_module.
- create a remote repo on github.
- play with routes and route extensions ex. /hello, /, hello/2, /xyz.
- order of the routes matter a lot.
- Install postman app and make a workspace/colletion > test API call.
- write logic to handle GET, POST, PATCH, DELETE API call and test them in postman.
- explore routing and use of ?,+, (), * in the routes.
- use of regex in routes.
- Reading the dynamic routes.
- Multiple route handlers.
- What is MIddleware.why do we need it
- How expressjs basically handles requests behind the scene.

- Error hndling using app.use.
- Go to MongoDB website, create a free MO Cluster.
- Create a user, Get a connection String.
- Install MongoDB Campass.
- Install Mongoose library then you have connect the application to the database.
- Call the connectDB function and connect to database before starting the application on 7777.
- create a user schema and usr model.
- create Post /signup API to add data to database.
- Error handling using try and catch.


- Difference between the Js Object vs JSON.
- add the express.json middleware to your app.
- Make your signup API dynamic to recieve the data from the end user.
- API - Get user by email.
- API - Feed Api - GET/feed - get all the users from the database.
- Create a delete user API.
- Create a update User API.
- Explore schema type options from the documentation.
- Add require, unique, lower,trim, min, minLength.
- Add default value.
- Create a custom validate function for the gender.
- Improve the DB schema.
- Add timstamp to user schema.
- Add API level validation on Patch request and signup post API.
_Add API validation for each field.
- Install validator.
- Explore validator library function and use validator function for password, email, pgotoURL.
- NEVER TRUST req.body.
- validate data in signup API.
- Install Bcrypt Package.
- create a passwordHash using bcrypt.hash and save the user is excrupted password .
- Create Login API.
- Compare passwords and throw errors if email and password is Invalid.

- install cookie-parser.
- Just send a dummy cookie to user.
- Create GET/profile API and check if you get the cookie back.
- install JSON web token.
- In login API after email and password validation, Create a jwt token and send it back to the user cookie.
- read the cookie inside your profile API and find the logged in user.

- Write userAuth middleware.
- Add the userAuth middleware in profile API and a new sendConnectionRequest API.
- Set the expiry of jwt token and cookies to 7 days.

- create userSchema method to getJWT.
- create userSchema method to comparePassword(passwordInputByUser).

 - Explore Tinder APIs.
 - Create a list all api you can think of in devTinder.
 - Group Multiple routes under respective routers.
 - Read documentaion for express.Router.
 - Creates routes folder for managing, auth, profile, request routers.
 - Create authRouter, profileRouter, requestRouter.
 - Import these router in app.js.
 - Create POST /logout API.
 - Create PATCH /profile/edit API.
 - Create PATCH /profile/password API => forgot password api.


- create connection Request schema.
- Send connection Request API.
- Proper Validation of data.
- $or query $and query in mongoose, Read more about it.
- Created Schema.pre("save") function.

 
 - Read the article about compound Indexes.
 - Why do we need index in DB.
 - What is the advantage and disadvantage of creating an index.

- ALWAYS THINK ABOUT CORNER CASES,

- Write code with proper validation for POST /request/review/:status/:requestId API.

- Thought Process - GET vs POST
- create GET/user/requests/received API - with all checks 
- Create GET/user/Connections API.