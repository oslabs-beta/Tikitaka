const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const testController = require('./controllers/testController');
// const mongoose = require('mongoose');
// const { History } = require('./models/historyModels');
// const db = require('./config/keys').MONGO_URI;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'tikitaka'
//   })
//   .then(() => console.log('Connected to mongoDB'))
//   .catch(err => console.log(err));

const app = express();

const PORT = process.env.PORT || '3000';

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build/')));
app.use(cors());
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // localhost 8080
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data',testController.getData, (req,res) => {
  // res.json(res.locals.data);
  res.send('data')
});
app.get('/testing-ab',testController.testingAB, (req,res) => {
  // res.json(res.locals.data);
  res.send('testing-ab')
});



// app.get('/history', (req, res) => {
//   History.find({})
//     .exec()
//     .then(docs => {
//       res.status(200).json(docs)
//     });
// });

// app.post('/history', (req, res) => {
//   console.log(req.body);
  // History.create({
  //   podAName: 'cat',
  //   podAWeight: 33,
  //   podAContent: '',
  //   podBName: 'dog',
  //   podBWeight: 67,
  //   podBContent: '',
  //   createdAt: Date.now()
  // });
// });

/**
 * 404 handler for any request to unknown routes
 */
app.use('*',(req,res) => {
 res.sendStatus(404);
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  // console.error(err.stack);
  // Creating our default error
  const defaulErr = { 
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error ocurred'},
  };
  const errorObj = Object.assign(defaulErr, err); 
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  