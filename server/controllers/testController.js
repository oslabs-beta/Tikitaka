const k8s = require('@kubernetes/client-node');
const request = require('request');

const testController = {};

/**
 * Sending cluster pods information
 */
testController.setup = (req, res, next) => {
  // Conecting to K8s API
  const kc = new k8s.KubeConfig();
  kc.loadFromCluster();
  let opts = {};
  kc.applyToRequest(opts);

  // Request to K8s API
  request.get(`${kc.getCurrentCluster().server}/apis/apps/v1/namespaces/default/deployments/`, opts,
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

      // // Obtaining pods names ignoring our own pod
      // let podsNames = [];
      // data.items.forEach(element => {
      //   if (!(element.metadata.name.includes('tikitaka')))
      //     podsNames.push(element.metadata.name);
      // });
      res.locals.data = data;
      next();
  });
};

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  // Conecting to K8s API
  const kc = new k8s.KubeConfig();
  kc.loadFromCluster();
  let opts = {
    kind: 'VirtualService',
    apiVersion: 'networking.istio.io/v1alpha3',
    metadata: {
      name: 'bookinfo',
      namespace: 'default'
    },
    spec: {
      hosts: [
        '*'
      ],
      http: [{
        route: [
          {
            destination: {
              host: '*',
              subset: 'safe'
            },
            weight: '0'
          },
          {
            destination: {
              host: '*',
              subset: 'safe'
            },
            weight: '100'
          }
        ]
      }]
    }
  }
  opts = JSON.stringify(opts);
  kc.applyToRequest(opts);

  // Request to K8s API
  request.post(`${kc.getCurrentCluster().server}/apis/networking.istio.io/v1alpha3/namespaces/default/virtualservices/bookinfo`, opts,
    (error, response, body) => {
      if (error) {
        res.locals.data = 'Error ' + error;
        console.log(`error: ${error}`);
      }
      if (response) {
        console.log(`statusCode: ${response.statusCode}`);
      }
      res.locals.data = body;
      console.log(`body: ${body}`);
      next();
  });

};

module.exports = testController;
