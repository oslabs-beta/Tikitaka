const fetch = require('node-fetch');
const fs = require('fs');
const shell = require('shelljs');
const cert = 'MIICyDCCAbCgAwIBAgIBADANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDEwprdWJl\n' +
    'cm5ldGVzMB4XDTIwMDEyNDA2MjgyOFoXDTMwMDEyMTA2MjgyOFowFTETMBEGA1UE\n' +
    'AxMKa3ViZXJuZXRlczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMhj\n' +
    'YAlh/Z6qjem0w+XdsEK5QKlax2C+mhbtffpsV2LWrshOPAIT4T78AMhIhGlbT2Ad\n' +
    'UDZdR9dTM7jjOyc+S8vP0PV4OlG5VGWOvidnaK5/JTmSJBkMOvydQqx1cU4IzAnb\n' +
    'GUts0N6rtpY95T9elWvOzr2C5CJgda3/iojW9FiDt3ovZdGrbJbrAXh/TNt0k/s8\n' +
    'SEhQlR9PFm6bfgZWmJHFj8c1BtxQ3vNd38jiIUvR/kMm74xkDPUzAW2Rw8zSrhqK\n' +
    'KdxiaH8BYY5lq/5iuhOE6FaRmNnADSO40H6U3sEjRXXuKD/PpWwVWfynvmQVufub\n' +
    'g1/VHNVqHc3Hrl4aJhECAwEAAaMjMCEwDgYDVR0PAQH/BAQDAgKkMA8GA1UdEwEB\n' +
    '/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBABIi7HvxaS0mnk+BHkiYQ8sSVu52\n' +
    '4ekDRw8NpaJbrSfip5kroLU+am/stODPjBXE3ALvyrMLiXseGLJDYR1cMZY1JvvA\n' +
    'Y9/JUHpusc4Wd3g+s10P6P7sIgUh9RJ3Y83NWh76xAA98lUf/uFQOzAO/DPQT97y\n' +
    'dlwOO2ydFNNNVwNhLQdYC1cZHT03NuWCGHXr8xVz1toEeUSYRmsBPRhgj7JZ9VzN\n' +
    'HjOjxdbv/y+SnhcXgyxaaIUKLK+n/a62y//X9EzVeAr0HQsD7MpFzt/SAwXA/03U\n' +
    'szYyd3UnItjzrHVXVONpODv149Z8wfnytRbgv02N7sHGhLJ38Jh0r+Hd3zk=';
const token = fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token', 'utf8');
const body = {
  "kind": "Deployment",
  "metadata": {
    "name": "tiki-taka-rocks-hard",
    "labels": {
      "app": "reviews",
      "version": "v1"
    }
  },
  "spec": {
    "replicas": 1,
    "selector": {
      "matchLabels": {
        "app": "reviews",
        "version": "v1"
      }
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "reviews",
          "version": "v1"
        }
      },
      "spec": {
        "serviceAccountName": "bookinfo-reviews",
        "containers": [
          {
            "name": "reviews",
            "image": "docker.io/istio/examples-bookinfo-reviews-v1:1.15.0",
            "imagePullPolicy": "IfNotPresent",
            "ports": [
              {
                "containerPort": 9080
              }
            ]
          }
        ]
      }
    }
  }
};

const createDepController = {};
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
createDepController.addVirtualService = (req, res, next) => {
  let newIm = {};
  const { imageA, weightA, imageB, addressB, versionB } = req.body;
  fetch(`https://kubernetes.default.svc/apis/apps/v1/namespaces/default/deployments/reviews-v1`)
  .then(data => data.json()).then(json => {newIm = json}).catch(e => console.log(e));
  
  fetch('https://kubernetes.default.svc/apis/apps/v1/namespaces/default/deployments/', {
    method: 'POST',
    body: JSON.stringify(body),
    requestCert: false,
    rejectUnauthorized: false,
    headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    ca: [fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt', 'utf8'), fs.readFileSync('/usr/src/app/DigiCertAssuredIDCAG2.crt.pem', 'utf8') ],
  })
  .then(r => r.json()).then(json => console.log(json)).catch(e => console.log(e));
  return next();
};
module.exports = createDepController;
