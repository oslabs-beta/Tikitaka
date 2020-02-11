const k8s = require('@kubernetes/client-node');
const request = require('request');

const testController = {};

// Conecting to K8s API
const kc = new k8s.KubeConfig();
kc.loadFromCluster();

/**
 * Sending cluster pods information
 */
testController.setup = (req, res, next) => {
  let opts = {};
  kc.applyToRequest(opts);

  // Request to K8s API
  request.get(`${kc.getCurrentCluster().server}/api/v1/namespaces/default/pods`, opts,
    (error, response, body) => {
      if (error) {
        res.locals.data = 'Error ' + error;
        console.log(`error: ${error}`);
      }
      if (response) {
        console.log(`statusCode: ${response.statusCode}`);
      }
      // Parsing response body 
      const regex = /\\"/g;
      let data = JSON.parse(body.replace(regex, "'"));

      // Obtaining pods names ignoring our own pod
      let podsNames = []
      data.items.forEach(element => {
        if (!(element.metadata.name.includes('tikitaka')))
          podsNames.push(element.metadata.name);
      });
      next();
  });
};

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  let opts = {};
  kc.applyToRequest(opts);

  // Request to K8s API
  request.get(`${kc.getCurrentCluster().server}/api/v1/namespaces/default/pods`, opts,
    (error, response, body) => {
      if (error) {
        res.locals.data = 'Error ' + error;
        console.log(`error: ${error}`);
      }
      if (response) {
        console.log(`statusCode: ${response.statusCode}`);
      }
      res.locals.data = 'DATA ' + body;
      console.log(`body: ${body}`);
      next();
  });

};

module.exports = testController;
