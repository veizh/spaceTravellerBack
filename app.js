var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var playerRouter = require('./routes/player.js');
require("dotenv").config();

var app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*', // Remplacez par votre origine autorisée
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE',"OPTIONS"], // Méthodes autorisées
  allowedHeaders: ['Content-Type'], // En-têtes autorisés
}))
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', "*/*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connexion mongo db ok !"))
  .catch(() => console.log("connexion mongo db failed ! "));


app.use('/player',playerRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json(err);
  
});

module.exports = app;