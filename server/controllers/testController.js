const testController = {};
const fetch = require("node-fetch");

/**
 * Sending cluster pods information
 */
testController.getData = async (req, res, next) => {
  console.log('data');
  const url = 'http://localhost:8081/apis/apps/v1/namespaces/default/deployments/'
  await fetch(url)
  .then (resp => resp.json())
  .then (data => {
    res.locals.data = data;
    console.log(data);
  })
  .catch (err => console.log(err));
  return next();
}

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  console.log('ab');
  return next();
}

module.exports = testController;
