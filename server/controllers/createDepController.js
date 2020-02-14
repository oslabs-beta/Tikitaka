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
  "apiVersion": "networking.istio.io/v1alpha3",
  "kind": "VirtualService",
  "metadata": {
    "annotations": {},
    "name": "gotlek-cluster-ip-service",
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

const createDepController = {};
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
createDepController.addVirtualService = (req, res, next) => {
  
  fetch('https://kubernetes.default.svc/apis/networking.istio.io/v1alpha3/namespaces/default/virtualservices/', {
    method: 'POST',
    body: b,
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
