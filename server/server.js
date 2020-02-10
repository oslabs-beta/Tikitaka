const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const testController = require('./controllers/testController');

const app = express();

const PORT = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build/')));

app.get('/testing-setup',testController.setup, (req,res) => {
  res.json(res.locals.data);
});
app.get('/testing-ab',testController.testingAB, (req,res) => {
  res.json(res.locals.data);
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

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  