import * as React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinearGradient } from '@vx/gradient';
import { hierarchy } from 'd3-hierarchy';
import { pointRadial } from 'd3-shape';
// import data from './Data';


import {
    LinkHorizontal,
    LinkVertical,
    LinkRadial,
    LinkHorizontalStep,
    LinkVerticalStep,
    LinkRadialStep,
    LinkHorizontalCurve,
    LinkVerticalCurve,
    LinkRadialCurve,
    LinkHorizontalLine,
    LinkVerticalLine,
    LinkRadialLine
  } from '@vx/shape';
  
// @Pati, @Ryan TODO: this constant json has to be fetched from the backend
const json: any = [{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"1fbb77f8a48f052a","id":"70028bc7b7f58a23","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321633826,"duration":14387,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"6c7d4c9563f118aa","id":"ac6d1225d090ceba","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321631938,"duration":18843,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"65b6b12e14496a0b","id":"0ac9e828af6c26e7","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321636640,"duration":25915,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"6c7d4c9563f118aa","id":"81b0093f2ef24d46","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321652339,"duration":14573,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"65b6b12e14496a0b","id":"b569b61faa18d09f","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321636329,"duration":23881,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"1fbb77f8a48f052a","id":"6ca93a585e73d737","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321649933,"duration":25618,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"65b6b12e14496a0b","id":"b4993d57e8bfb02d","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321661963,"duration":30949,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"1fbb77f8a48f052a","id":"701d41c2a814e088","kind":"CLIENT","name":"get /backend","timestamp":1580415321634189,"duration":61127,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"8080","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"701d41c2a814e088","id":"65b6b12e14496a0b","kind":"SERVER","name":"get /backend","timestamp":1580415321635074,"duration":57367,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.route":"/backend","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","http.user_agent":"axios/0.19.2","net.host.ip":"::ffff:127.0.0.1","net.host.name":"localhost","net.host.port":"8080","net.peer.ip":"::ffff:127.0.0.1","net.peer.port":"59793","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"65b6b12e14496a0b","id":"6bbd0e9e2e60ab06","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321665660,"duration":24684,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"41510564ad7c6bfd","id":"7839dfc70cc40bb4","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321697071,"duration":8282,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"41510564ad7c6bfd","id":"a16aab873555210f","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321697331,"duration":9938,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"41510564ad7c6bfd","id":"027c15ee6d4111f3","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321706800,"duration":9753,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"41510564ad7c6bfd","id":"0fc40aac3028665f","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321708606,"duration":12115,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"1fbb77f8a48f052a","id":"98d9f024cf0a13cf","kind":"CLIENT","name":"get /backend","timestamp":1580415321695763,"duration":27396,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"8080","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"98d9f024cf0a13cf","id":"41510564ad7c6bfd","kind":"SERVER","name":"get /backend","timestamp":1580415321696658,"duration":25746,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.route":"/backend","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","http.user_agent":"axios/0.19.2","net.host.ip":"::ffff:127.0.0.1","net.host.name":"localhost","net.host.port":"8080","net.peer.ip":"::ffff:127.0.0.1","net.peer.port":"59810","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"6c7d4c9563f118aa","id":"600376586b3d82e0","kind":"CLIENT","name":"get /middle-tier","timestamp":1580415321632257,"duration":92833,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/middle-tier","http.url":"http://localhost:8080/middle-tier","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"8080","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"600376586b3d82e0","id":"1fbb77f8a48f052a","kind":"SERVER","name":"get /middle-tier","timestamp":1580415321633363,"duration":91019,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.route":"/middle-tier","http.status_code":"200","http.status_text":"OK","http.target":"/middle-tier","http.url":"http://localhost:8080/middle-tier","http.user_agent":"axios/0.19.2","net.host.ip":"::ffff:127.0.0.1","net.host.name":"localhost","net.host.port":"8080","net.peer.ip":"::ffff:127.0.0.1","net.peer.port":"59790","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"798341b81e0957fb","id":"dc22ebafb6bf6c0d","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321726968,"duration":26575,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"8083f844a54532aa","id":"4989998b12c862b2","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321729038,"duration":19346,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"8083f844a54532aa","id":"3f80161fab04fe24","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321728774,"duration":22664,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"3190e8d818239c3a","id":"8083f844a54532aa","kind":"SERVER","name":"get /backend","timestamp":1580415321728259,"duration":39000,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.route":"/backend","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","http.user_agent":"axios/0.19.2","net.host.ip":"::ffff:127.0.0.1","net.host.name":"localhost","net.host.port":"8080","net.peer.ip":"::ffff:127.0.0.1","net.peer.port":"59824","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"8083f844a54532aa","id":"4843ede811d77635","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321752874,"duration":20371,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"798341b81e0957fb","id":"ed4bcc1944d99c24","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321754991,"duration":12854,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"798341b81e0957fb","id":"3190e8d818239c3a","kind":"CLIENT","name":"get /backend","timestamp":1580415321727229,"duration":45129,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:8080","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/backend","http.url":"http://localhost:8080/backend","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"8080","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"8083f844a54532aa","id":"cb3bed81ea2eb9b6","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321750126,"duration":15171,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"b37f6ce85e7a502e","id":"17e37d937c577652","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321778382,"duration":19183,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}},{"traceId":"f8a0f44e7cef050b4e8767cc370e1cc5","parentId":"b37f6ce85e7a502e","id":"826a29e7acb3b350","kind":"CLIENT","name":"get /zipkin/api/v2/traces","timestamp":1580415321778114,"duration":17364,"localEndpoint":{"serviceName":"getting-started"},"tags":{"component":"http","http.flavor":"1.1","http.host":"localhost:9411","http.method":"GET","http.status_code":"200","http.status_text":"OK","http.target":"/zipkin/api/v2/traces","http.url":"http://localhost:9411/zipkin/api/v2/traces","net.peer.ip":"127.0.0.1","net.peer.name":"localhost","net.peer.port":"9411","net.transport":"IP.TCP","ot.status_code":"OK"}}];

interface TrimmedDownJson {
  index: number;
  traceId: string;
  parentId: string;
  id: string;
}

const trimmedDownJson: Array<TrimmedDownJson> = [];
json.forEach((trace: any, index: number) => {
  const { traceId, parentId, id } = trace;
  trimmedDownJson.push({
    index,
    traceId,
    parentId,
    id
  });
});
// console.log('trimmedDownJson: ', trimmedDownJson);

const parentId: Array<string> = trimmedDownJson.map(trace => trace.parentId);
// console.log('parentId: ', parentId);

const id: Array<string> = trimmedDownJson.map(trace => trace.id);
// console.log('id: ', id);

interface Relationship {
  parentId: string;
  parentIndex: number;
  childrenId: string;
  childIndex: number;
}

const relationships: Array<Relationship> = [];
id.forEach((id, parentIndex) => {
  if (parentId.includes(id)) {
    // console.log('parent id: ', id, 'at index: ', parentIndex);
    const childIndex = parentId.findIndex(parentId => parentId === id);
    // console.log('child id: ', trimmedDownJson[childIndex].id, 'at index: ', childIndex);
    relationships.push({ parentId: id, parentIndex, childrenId: trimmedDownJson[childIndex].id, childIndex });
  }
});
// console.log('relationships: ', relationships);

interface Node {
  name: string;
  children?: Node[];
}

const nodes: Array<Node> = [];
id.forEach(id => {
    nodes.push({name: id});
});

relationships.forEach(relationship => {
  if (nodes[relationship.parentIndex].children) {
    nodes[relationship.parentIndex].children.push(nodes[relationship.childIndex]);
  } else {
    nodes[relationship.parentIndex].children = [nodes[relationship.childIndex]];
  }
});
// console.log('nodes: ', nodes);
interface Data {
  [x: string]: any;
  name: string;
  children?: Data[];
}
const data: Data = {
  name:  trimmedDownJson[0].traceId,
  children: nodes
};
console.log('data: ', data);

// interface Data {
//     [x: string]: any;
//     name: string;
//     children?: Data[];
// }


//   const data:Data = {
//     name:  'HOST',
//     children: [
//       {
//         name: 'IP1',
//         children: [
//           { name: 'AAsasasasasas1' },
//           { name: 'A2' },
//           { name: 'A3' },
//           {
//             name: 'C',
//             children: [
//               {
//                 name: 'C1'
//               },
//               {
//                 name: 'D',
//                 children: [
//                   {
//                     name: 'D1',
//                     children: [
//                         {
//                           name: 'D1'
//                         },
//                         {
//                           name: 'D2'
//                         },
//                         {
//                           name: 'D3'
//                         }
//                       ]
//                   },
//                   {
//                     name: 'D2'
//                   },
//                   {
//                     name: 'D3'
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       { name: 'Z' },
//       {
//         name: 'B',
//         children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }]
//       }
//     ]
//   };
  interface Iprops {
      width: number;
      height: number;
      margin: any;
  }

  export default class Bullets extends React.Component<Iprops, {}> {
    state = {
      layout: 'cartesian',
      orientation: 'horizontal',
      linkType: 'diagonal',
      stepPercent: 0.5
    };
  
    render() {
      const {
        width,
        height,
        margin = {
          top: 30,
          left: 30,
          right: 30,
          bottom: 30
        }
      } = this.props;
      
      const { layout, orientation, linkType, stepPercent } = this.state;
  
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;
  
      let origin: { y: any; x: any; };
      let sizeWidth;
      let sizeHeight;
  
      if (layout === 'polar') {
        origin = {
          x: innerWidth / 2,
          y: innerHeight / 2
        };
        sizeWidth = 2 * Math.PI;
        sizeHeight = Math.min(innerWidth, innerHeight) / 2;
      } else {
        origin = { x: 0, y: 0 };
        if (orientation === 'vertical') {
          sizeWidth = innerWidth;
          sizeHeight = innerHeight;
        } else {
          sizeWidth = innerHeight;
          sizeHeight = innerWidth;
        }
      }
  
      return (
        <div>
          <div style={{ color: 'rgba(38, 150, 136, 1.000)', fontSize: 10 }}>
            <label>layout:</label>
            <select
              onClick={e => e.stopPropagation()}
              onChange={e => this.setState({ layout: e.target.value })}
              value={layout}
            >
              <option value="cartesian">cartesian</option>
              <option value="polar">polar</option>
            </select>
  
            <label>orientation:</label>
            <select
              onClick={e => e.stopPropagation()}
              onChange={e => this.setState({ orientation: e.target.value })}
              value={orientation}
              disabled={layout === 'polar'}
            >
              <option value="vertical">vertical</option>
              <option value="horizontal">horizontal</option>
            </select>
  
            <label>link:</label>
            <select
              onClick={e => e.stopPropagation()}
              onChange={e => this.setState({ linkType: e.target.value })}
              value={linkType}
            >
              <option value="diagonal">diagonal</option>
              <option value="step">step</option>
              <option value="curve">curve</option>
              <option value="line">line</option>
            </select>
  
            <label>step:</label>
            <input
              onClick={e => e.stopPropagation()}
              type="range"
              min={0}
              max={1}
              step={0.1}
              onChange={e => this.setState({ stepPercent: e.target.value })}
              value={stepPercent}
              disabled={linkType !== 'step' || layout === 'polar'}
            />
          </div>
  
          <svg width={width} height={height}>
            <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
            <rect width={width} height={height} rx={14} fill="#272b4d" />
            <Group top={margin.top} left={margin.left}>
              <Tree
                root={hierarchy(data, d => (d.isExpanded ? null : d.children))}
                size={[sizeWidth, sizeHeight]}
                separation={(a, b) => (a.parent == b.parent ? 1 : 0.5) / a.depth}
              >
                {data => (
                  <Group top={origin.y} left={origin.x}>
                    {data.links().map((link, i) => {
                      let LinkComponent: any;
  
                      if (layout === 'polar') {
                        if (linkType === 'step') {
                          LinkComponent = LinkRadialStep;
                        } else if (linkType === 'curve') {
                          LinkComponent = LinkRadialCurve;
                        } else if (linkType === 'line') {
                          LinkComponent = LinkRadialLine;
                        } else {
                          LinkComponent = LinkRadial;
                        }
                      } else {
                        if (orientation === 'vertical') {
                          if (linkType === 'step') {
                            LinkComponent = LinkVerticalStep;
                          } else if (linkType === 'curve') {
                            LinkComponent = LinkVerticalCurve;
                          } else if (linkType === 'line') {
                            LinkComponent = LinkVerticalLine;
                          } else {
                            LinkComponent = LinkVertical;
                          }
                        } else {
                          if (linkType === 'step') {
                            LinkComponent = LinkHorizontalStep;
                          } else if (linkType === 'curve') {
                            LinkComponent = LinkHorizontalCurve;
                          } else if (linkType === 'line') {
                            LinkComponent = LinkHorizontalLine;
                          } else {
                            LinkComponent = LinkHorizontal;
                          }
                        }
                      }
  
                      return (
                        <LinkComponent
                          data={link}
                          percent={+stepPercent}
                          stroke="#374469"
                          strokeWidth="1"
                          fill="none"
                          key={i}
                          onClick={(data: any) => (event: any) => {
                            console.log(data);
                          }}
                        />
                      );
                    })}
  
                    {data.descendants().map((node, key) => {
                      const width = 40;
                      const height = 20;
  
                      let top;
                      let left;
                      if (layout === 'polar') {
                        const [radialX, radialY] = pointRadial(node.x, node.y);
                        top = radialY;
                        left = radialX;
                      } else {
                        if (orientation === 'vertical') {
                          top = node.y;
                          left = node.x;
                        } else {
                          top = node.x;
                          left = node.y;
                        }
                      }
  
                      return (
                        <Group top={top} left={left} key={key}>
                          {node.depth === 0 && (
                            <circle
                              r={12}
                              fill="url('#lg')"
                              onClick={() => {
                                node.data.isExpanded = !node.data.isExpanded;
                                console.log(node);
                                this.forceUpdate();
                              }}
                            />
                          )}
                          {node.depth !== 0 && (
                            <rect
                              height={height}
                              width={width}
                              y={-height / 2}
                              x={-width / 2}
                              fill={'#272b4d'}
                              stroke={node.data.children ? '#03c0dc' : '#26deb0'}
                              strokeWidth={1}
                              strokeDasharray={!node.data.children ? '2,2' : '0'}
                              strokeOpacity={!node.data.children ? 0.6 : 1}
                              rx={!node.data.children ? 10 : 0}
                              onClick={() => {
                                node.data.isExpanded = !node.data.isExpanded;
                                console.log(node);
                                this.forceUpdate();
                              }}
                            />
                          )}
                          <text
                            dy={'.33em'}
                            fontSize={9}
                            fontFamily="Arial"
                            textAnchor={'middle'}
                            style={{ pointerEvents: 'none' }}
                            fill={node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'}
                          >
                            {node.data.name}
                          </text>
                        </Group>
                      );
                    })}
                  </Group>
                )}
              </Tree>
            </Group>
          </svg>
        </div>
      );
    }
  }