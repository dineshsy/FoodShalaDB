require("rootpath")();
import express, { request } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const jwt = require("./src/_helpers/jwt");
const errorHandler = require("./src/_helpers/error-handler");
import config from './src/config.json'

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose connection
const CONNECTION_URI = config.connectionString;
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URI || "mongodb://localhost/lineupX-client", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
var cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Expose-Headers", "Access-Control-Allow-O");

    if(req.header === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({})
    }
    next();
});



// serving static files
app.use(express.static("public"));


// use JWT auth to secure the api
app.use(jwt());

// api routes
app.get("/", (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.use('/users', require('./src/users/users.controller'));
app.use('/menu', require('./src/menu/menu.controller'));
app.use('/order', require('./src/orders/order.controller'));
app.use('/clients', require('./src/client/client.controller'));

// global error handler
app.use(errorHandler);


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
