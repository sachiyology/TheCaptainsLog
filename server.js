require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Log = require('./models/logs')
/*******
Database Setup
******/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('**********************')
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  console.log('**********************')
  next()
})

app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/*
Index
*/
app.get('/logs/', (req, res) => {
  Log.find({}, (err, foundLogs)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        logs: foundLogs
      })
    }
  })
})

/*
New
*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

/*
Delete
*/
app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.redirect('/logs')
    }
  })
})

/*
Put/Update
*/
app.put('/logs/:id', (req, res) => {
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        log: updatedLog
      })
    }
  })
})


/*
Create
*/
app.post('/logs', (req, res) =>{
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (err, createdLog ) => {
    if(err){
    res.status(404).send({
      msg: err.message
    })
  } else {
    console.log(createdLog);
    res.redirect('/logs')
  }
})
})

  /*
Edit
*/

app.get('/logs/:id/edit', (req, res) => {
  Log.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        log: foundLog
      })
    }
  })
})

/*
Show
*/
app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        log: foundLog
      })
    }
  })
})

  app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
