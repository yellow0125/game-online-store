# Game-Online-Store
The MERN Stack Project(MongoDB Express React Node)
FridayNight is an online store specialized in selling computer game virtual items.

🎮 This app is deployed on [Heroku](https://friday-night-886.herokuapp.com/)

⏯️ Demo video is on [YouTube](https://youtu.be/1Sek3Y4pgDo)

👉 Test Accounts
1. Admin Account
    - admin@test.com 123456
2. User Accounts
    - test1@test.com 123456
    - test2@test.com 123456
    - test3@test.com 123456
    
    ... Or create your own user account!
3. PayPal Account
    - sb-2wk8f15691593@personal.example.com .w<{yA2F

## Iterations
### Iteration 3
**Division of labor**

In the third week, the project is completed. Our application is done! The main functionality is working.

- Features %Cuiting Huang

Profile, Admin(TBD)

- Features %Shi Shuai

PayPal

### Iteration 2
**Division of labor**
In the second week, we start on developing whatever CRUD module that will contain the main functionality of our application. We will have an API capable of executing GET and POST methods are necessary for our app's core functionality and making whatever MongoDB queries that are necessary.

- Features %Cuiting Huang

Cart, Login, Register, Profile

- Features %Shi Shuai

Search, Review, Checkout

### Iteration 1
**Division of labor**
In the first week, we will work on the initial setting up of our app.

- Frontend %Cuiting Huang

React components created to represent the functionality we will be building.
The overall structure of our website should be in place.

- Backend %Shi Shuai

Routing, links, and the basis of CRUD operations should be established.

## Update & Progress
### CuitingHuang
#### 22/4/12 admin
1. when user is admin, will view product list page
2. add sample product, delete product.
3. import readmore to my reviews page. incase it's too long

#### 22/4/11 profile page, tabs of order and my review
1. orderdetails : reducer action route screen.
2. myorderlist: reducer action route screen.
3. reviewslist on homepage
4. my reviews

#### 22/4/10 fix details
1. react-router scroll to top on every transition
2. React renders the < HTML > tag directly from the background
3. fix all image style making them responsive for phone size
4. fix details of detais screen, add delivery button group avoiding image repeat
5. and cart screen making them looking better on phone
6. fix banner for phone
7. update dataset, add highlight subsection


#### 22/4/8
1. for each page import Custom title
2. create banner on homepage

#### 22/4/7
1. implement login in both backend and frontend
2. create error middleware
3. add register action and reducer to backend and implement it in frontend
4. add bcrypt when user register and login . 
5. add banner to homepage, and prepare for reviews part screen.
6. implent profilepage and update user info

#### 22/4/4
1. add cart reducers, actions, constant and cart Screen
2. modify message page
3. implement action of add to cart, remove cart.

#### 22/4/1
1. import redux to store the state of app, add products reducers, actions and constant
2. modify homepage and detailspage using reducer
3. create loading and message(error) components

#### 22/3/31
1. update the data of eg. and put them in backend/data file
2. implment view of details page , login and register page
3. get all data from backend.(show all items on home and each item details)
4. to be completed
- update data, add parameters: tag, Highlights, Reviews, Customer Comments for each products
- in detais page add to cart need a function, comments part not implemented
- login and register page need to have the function of submit

#### 22/3/30
1. Init react and implment homepage, view of login and register page
a.banner with search box
b.show all items of all eg. *and link to backend*
c.creat rating star for each items
d.click item link to products/:id   / click login to /login click shoppintcart to /cart

```
npx create-react-app frontend
cd frontend
npm start
```

2. init node.js for backend
- create *ROUTE* products.js
- Link to database mongodb atlas with functions
```
connectDB
saveItem
findItem or deleteItem by id
findAll
```
### Shi Shuai
#### 22/4/12
**PayPal Feature**
1. prep
- create paypal account
- create paypal sandbox app and test accounts
2. frontend
- order pay redux : add order pay constants, order pay reducers, order pay actions, add to store
- add paypal script
- add paypal button, implement payment feature, refresh order page after successful payment
- polish order page layout
3. backend
- add private order pay route to update an order to paid

#### 22/4/10
**Fix Details**
1. review content validation (handle the situation where rating or review input is empty)
2. polish search result layout
3. reset search box after each search
4. reset database samples
5. delete console.logs
6. fix frontend warnings

#### 22/4/8
1. complete checkout feature, only login users can place a new order
2. complete review feature, only login users can add a new review

#### 22/4/7
**Checkout Feature**
1. frontend
- add checkout screen
2. backend
- create post route and controller to create new order (currently I make it public, need to make it private with login feature)

#### 22/4/5
**Review Feature**
1. frontend
- ajust detail page layout, four tabs to show description, hightlights, reviews and comments of a product seperately
- render reviews in detail page
2. backend
- create post route and controller to create new review (currently I make it public, need to make it private with login feature)

#### 22/4/4
**Sreach Feature**
1. frontend
- add event handler to search box and search button
- add search screen to show search results
- reuse product list reducers and contants, add actions to get search product list
2. backend
- add route and controller to get search result from database
3. modification
- handle edge cases where no search criteria is input or no result found

#### 22/4/1
1. set up MongoDB
- connect MongoDB Atlas
2. populate database
- populate database with sample products and users data
```
node backend/database/populate.js 
```
- clear database
```
node backend/database/clear.js 
```
3. create basic routes and controllers to realize CRUD operationss, use postman to test

#### 22/3/31
1. set up server
2. connect frontend and backend to enable frontend to fetch hard coded products data from backend

## Structure of website
### 1. Homepage 

- top sellers carousel
- conditional rendering : if the user is login, show the user's own reviews, otherwise, show the latest reviews
- featured and recommended prodcuts list

![homepage](/frontend/public/images/screenshot1.jpg)

### 2. Log in/Register page 

- allow users to register and login
- force login when adding new review or proceeding to checkout

![loginpage](/frontend/public/images/screenshot2.jpg)

### 3. Profile page

- allow users to see and update personal information
- allow users to see their orders
- allow users to see their reviews

![profilepage](/frontend/public/images/screenshot3.jpg)

### 4. Search/Search Results page

- a summary of the search results and navigate to a detail page that shows a detailed view of the result
- show alert message when no search has been executed and no results exist

![searchpage](/frontend/public/images/screenshot4.jpg)

### 5. Details page

- detailed information of each product
- add to cart
- add reviews

![detailpage](/frontend/public/images/screenshot5.jpg)

### 6. Cart/Checkout/Order page

- cart page : add items to cart, change qty of items, delete items
- checkout page : place an order
- order page : PayPal API to pay an order

![orderpage](/frontend/public/images/screenshot6.jpg)
![orderpage](/frontend/public/images/screenshot7.jpg)
![orderpage](/frontend/public/images/screenshot8.jpg)

### 7. Admin page

- Only admin users have authorization to this page
- create a product
- edit a product
- delete a product

![orderpage](/frontend/public/images/screenshot9.jpg)

## Environment Variable
Create a file name .env then add:
1. NODE_ENV = development
2. MONGO_URI = < use your own mongodb atlas database >
3. PORT = 5000
4. PAYPAL_CLIENT_ID = < use your own paypal client id >
5. JWT_SECRET = abc123

## Install dependencies
1. npm install
2. cd frontend
3. npm install

## RUN
frontend
- npm run client

backend
- npm run server


