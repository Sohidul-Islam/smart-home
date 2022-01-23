const express = require("express");
//call express js modules web framwork for nodejs

const ejs = require("ejs");
var session = require('express-session');
var MySQLStore = require("express-mysql-session");
var cors = require('cors');


var fs = require('fs');
//call ejs module which handle html/css/javascript
const path = require("path");
var flash = require('connect-flash');
//path module work from which folder we should start to view our site.
const exp = require("constants");

const sql = require("./moduler/db");

// creat app




var sessionStore = new MySQLStore({
    clearExpired: true,
    checkExpirationInterval: 3600000
}, sql);

const app = express();
app.use(
    session({
        secret: "cookie_secret",
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: {
            expires: 3600000,
        },
    })
);

app.use(flash());
// store express module in app constant variable
app.use(express.json());
//we use express.json() for use json array.
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
//here we set from where we show our HTML pages
app.set("view engine", "ejs");
// setup public folder

app.use(express.static("../../public"));
//here store our css/javascript and other static files.

// main().catch(console.error);

const dataretrieve = require("./router/dataretrieveRouter");
app.use("/", dataretrieve);
const datainsert = require("./router/datainsertRouter");
app.use("/", datainsert);

const dataupdate = require("./router/updateRouter");
app.use("/", dataupdate);

module.exports = app;