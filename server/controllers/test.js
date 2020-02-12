let body = "{\"kind\":\"PodList\",\"apiVersion\":\"v1\",\"metadata\":{\"selfLink\":\"/api/v1/namespaces/default/pods\",\"resourceVersion\":\"164863\"},\"items\":[{\"metadata\":{\"name\":\"details-v1-74f858558f-x5hqb\"}}]}";

const regex = /\\"/g;
let string = JSON.parse(body.replace(regex, "'"))
let array = []
array.push(string.items[0].metadata.name);
array.push(string.items[0].metadata.name);
// console.log(string, string.items[0].metadata.name);
console.log(JSON.stringify(array));