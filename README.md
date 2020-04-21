# RESTful API for FoodShala

## This API is live :

-[API base URL](https://foodshala-db.herokuapp.com/)

## Steps to run locally

## Step-1:

```
npm install
```

### Step-2:

```
npm start
```

### Please visit localhost:4000

# Routes

## /clients

### - Methods:
Get: It will show the list of Restaurants
Post: It will add new restaurant

Modal for Client:

```
const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    accountType: { type: String, required: true },
    restaurantName: {type: String, required: true},
    cusines: {type: Array, required: true},
    createdDate: { type: Date, default: Date.now },
});
```
# /client/:clientId

## Get: To find one Restaurant

## Put: To Update a Restaurant

# /user
## Get : To view the list of users

 
## Post: To create a new user

```
const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    accountType: { type: String, required: true },
    preference: { type: String, required: true },
    cart: { type: Array },
    createdDate: { type: Date, default: Date.now },
});
```

# /user/:userId

## Get :

To return a particular user

## Put:
To update a particular user

## Delete:
To delete a particular user

# /menu

## Get : To give the list of menu Items

## Post: To create a new menu item
```
const schema = new Schema({
    name: { type: String, required: true },
    itemDescription: { type: String, required: true },
    mealType: { type: String, required: true },
    restaurantId: { type: String, required: true },
    price: {type: Number, required: true},
    createdDate: { type: Date, default: Date.now },
});
```

## Put: To update menu item

# /order/:Id

## Get: To get orders of the particular ID

## Post: To create a new order to the particular ID

## Put: To update the status of the order
 



 
