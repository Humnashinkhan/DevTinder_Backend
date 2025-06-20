#  DevTinder API's

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter
- POST /request/send/:status/:userId - interested and ignored
- POST /request/review/:status/:requestId - accepted and rejected


## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform.


Status: Ignore, interested, accepted, rejected.