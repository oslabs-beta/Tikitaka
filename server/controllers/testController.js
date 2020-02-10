const k8s = require('@kubernetes/client-node');
const request = require('request');

const testController = {};

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  const kc = new k8s.KubeConfig();
  kc.loadFromCluster();
  
  // const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  const opts = {};
  kc.applyToRequest(opts);

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
  // k8sApi.listNamespacedPod('default')
  //   .then((res) => {
	//     res.locals.data = 'DATA ' + res.body;
  //   })
  //   .catch((err) => {
  //     res.locals.data = 'Error ' + err;
  //   });
};

module.exports = testController;
