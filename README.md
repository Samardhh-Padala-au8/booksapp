# BooksApp-backend

## Home Route: http://localhost:4000

> ### User or Admin:
> ### Register User: POST '/user/register'
> #### => you need to send {name, email, password, confirmPassword, gender={male, female, others}, role={'admin', 'user'}} in the body of request.
> ### Login user: POST '/user/login'
> #### => You need to send {email, password} in the body of request.
> ### Get User Profile: GET '/user'
> #### => You need to send authToken that you will get in response when loging in or signup.
> #### Logout user: POST '/user/logout'
> #### => You need to send authToken that you will get in response when loging in or signup.
> ### Logout from all devices: POST '/user/logoutall'
> #### => You need to send authToken that you will get in response when loging in or signup.

> ### Add books to library: POST '/library'
> #### => You need to send {collectionId, bookId } in the body of request along with authToken.
> ### Delete books from library: DELETE '/library'
> #### => You need to send {bookId } in the body of request along with authToken.
> ### Get books from library: GET '/library'
> #### => You need to send {collectionId } in the req parameters.
> #### => collectionId = 1 for currently reading, 2 for want to read, 3 for have read.

> ### Add post: POST '/post'
> #### => You need to send {postText, bookId} in the body of request along with authToken.
> ### Delete a post: DELETE '/post'
> #### => You need to send {postId } in the body of request along with authToken.
> ### Get all posts: GET '/post'
> #### => You need to send authToken.
> ### Get all posts of a user: GET '/post/user'
> #### => You need to send authToken.
> ### Edit a post: PUT '/post'
> #### => You need to send {postText, bookId, postId} along with authToken.