const k8s = require('@kubernetes/client-node');

const testController = {};
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.body.items[0].metadata.name);
    next();
  });
};

module.exports = testController;
