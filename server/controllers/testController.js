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
  const virtualServiceOpts = {
    "apiVersion": "networking.istio.io/v1alpha3",
    "kind": "VirtualService",
    "metadata": {
      "annotations": {},
      "name": "pati-cluster-ip-service",
      "namespace": "default"
    },
    "spec": {
      "gateways": [
        "ingress-gateway-configuration"
      ],
      "hosts": [
        "*"
      ],
      "http": [
        {
          "match": [
            {
              "uri": {
                "prefix": "/topitop"
              }
            }
          ],
          "route": [
            {
              "destination": {
                "host": "arman-cluster-ip-service"
              }
            }
          ]
        },
        {
          "match": [
            {
              "uri": {
                "prefix": "/taksi"
              }
            }
          ],
          "route": [
            {
              "destination": {
                "host": "client-cluster-ip-service",
                "subset": "original"
              },
              "weight": 90
            },
            {
              "destination": {
                "host": "client-cluster-ip-service",
                "subset": "experimental"
              },
              "weight": 10
            }
          ]
        }
      ]
    }
  };
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
  request.post(`${kc.getCurrentCluster().server}/apis/networking.istio.io/v1alpha3/namespaces/default/virtualservices/`, virtualServiceOpts, (error, response, body) => {
    if (error) {
      res.locals.data =  'Error ' + error;
      console.log(`error: ${error}`);
    }
    if (response) {
      console.log(`statusCode: ${responese.statusCode}`);
    }
    res.locals.data = 'DATA ' + body;
    console.log(`body: ${body}`);
    next();
  })
};

module.exports = testController;
