const k8s = require('@kubernetes/client-node');

const testController = {};

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  const kc = new k8s.KubeConfig();
  kc.loadFromCluster();
  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  k8sApi.listNamespacedPod('default')
    .then((res) => {
	    res.locals.data = 'DATA ' + res.body;
    })
    .catch((err) => {
      res.locals.data = 'Error ' + err;
    });
    next();
};

module.exports = testController;
