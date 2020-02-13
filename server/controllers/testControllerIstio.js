const testController = {};

/**
 * Sending cluster pods information
 */
testController.setup = (req, res, next) => {
  async function main () {
    try {
      const backend = new Request(Request.config.getInCluster())
      const client = new Client({ backend })
      await client.loadSpec()
  
      //
      // Fetch the Deployment from cluste
      //
      const deployment = await client.apis.apps.v1.namespaces('default').deployments().get();
      const data = [];
      deployment.body.items.forEach((item) => {
        data.push(item.metadata);
        console.log(item.metadata);
      });
      res.locals.data = data;
    } catch (err) {
      res.locals.data = err;
      console.error('Error: ', err)
    }
    next();
  }
  main();
}

/**
 * testingAB - 
 */
testController.testingAB = (req, res, next) => {
  async function applyDeploy () {
    try {
      const backend = new Request(Request.config.getInCluster())
      const client = new Client({ backend })
      await client.loadSpec()

      let opts = {
        apiVersion: 'networking.istio.io/v1alpha3',
        kind: 'VirtualService', 
        metadata: {
          name: 'bookinfotest',
          namespace: 'default'
        },
        spec: {
          gateways:[
            'bookinfo-gateway',
          ],
          hosts: [
            'holllaaa'
          ],
          http: [{
            route: [
              {
                destination: {
                  host: '*',
                  subset: 'safe'
                }
              }
            ]
          }]
        }
      }
      opts = JSON.stringify(opts);
      try{
      const create = await client.apis['networking.istio.io'].v1alpha3.namespaces('default').virtualservices.post({body:opts})
      res.locals.data = create.body;
      console.log('Create:', create);
      }catch (err){
        res.locals.data = err;
      }
    } catch (err) {
      if (err.code !== 409) throw err  
    }
    next();
  }  
  applyDeploy()
}

module.exports = testController;