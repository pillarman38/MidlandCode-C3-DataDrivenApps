# Twitter Clone Basic Requirements

### Backend
* Database integration
* Full CRUD operations in API
* User authentication (simple or complex)

### Frontend
* SPA Routing
* AuthGuard
* Form Validation
* Resolver
* Services consuming API

# Frontend Plan
## Categories
* User Page
* Home/Feed
* Login
* Signup
* Friends (who a user follows)
* Followers
* Tweets


## Components
* Login
* Signup
* Home
    * Feed 
    * Tweet
* Friends (who a user follows)
* Followers
* User Page
* 404

## Services
* User
    * Login (Post)
    * Signup (C - Post)
    * Delete/Cancel (D - Get)
* Connections
    * Followers (R)
    * Friends (RD)
* Tweet
    * Add
    * Delete
    * Get by User
    * Get for User

## Routes
* /login - Not Logged In Only
* /signup - Not Logged In Only
* /home - Logged In Only
* /friends (who a user follows) - Logged In Only
* /followers - Logged In Only
* /user/:username - Any (Resolver to see if username exists)
* ** redirect to 404


# Backend Plan

## Database Tables
* User
* Friends
* Tweets
* Followers

## Schema
* User
    * id - integer, NN, UQ, AI,
    * email - varchar(45), NN, UQ
    * username - varchar(15), NN, UQ
    * password - varchar(128), NN
    * firstName - varchar(25), NN
    * lastName - varchar(25), NN
    * authenticated - tinyInt
    * emailHash - varchar(128)
* Friends
    * id - integer, NN, UQ, AI,
    * userId - integer, NN, FK (user)
    * friendId - integer, NN, FK (user)
* Tweet
    * id - integer, NN, UQ, AI,
    * body - varchar(144), NN
    * time - Date, NN, default: now()
    * userId - integer, NN, FK (user)
* Followers
    * id - integer, NN, UQ, AI,
    * userId - integer, NN, FK (user)
    * followerId - integer, NN, FK (user) 

### Routes
* / for index.html
* /api/
    * /user/
        * /login - POST
        * /signup - POST
        * /cancel/:id - Delete
    * /connections/
        * /friends/add/:id - Get
        * /friends/remove/:id - Delete
        * /friends/all - Get
        * /followers - Get
    * /tweets/
        * /user/:id - Get - All from a specific user
        * /user/all - Get - All for the logged in user
        * /all - Get
        * /add - Post
        * /delete/:id - Delete