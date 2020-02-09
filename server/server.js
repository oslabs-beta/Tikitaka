const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


/**
 * Setting constants
 */
const app = express();
const PORT = 3000;
const testController = require('./controllers/testController');

/**
 * Handling parsing request 
 */
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routing
 */
app.get('/testing-ab',testController.testingAB, (req,res) => {
  // res.json(res.locals.data)
  res.send({message:'hello'})
});

/**
 * Main app
 */
app.get('/', (req, res) => { 
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

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

/**
 *  Start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  