const fetch = require('node-fetch');
const fs = require('fs');

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
