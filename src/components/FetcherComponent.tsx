// import * as React from 'react';
// import Form from "react-bootstrap/Form";
//
//
// interface Iprops{
//
// }
// const opts: Iprops = {
//
// }
// export default class TestForm extends React.Component<Iprops, any>{
//     public render(): JSX.Element{
//
//         const u:string = 'http://localhost:8001/apis/apps/v1/namespaces/default/deployments/';
//
//         function api<T>(url: string): Promise<any> {
//             return fetch(url, {
//                 method: "POST",
//                 body: JSON.stringify(opts),
//                 redirect: 'follow'})
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(response.statusText)
//                     }
//                     return response.json()
//                 })
//         }
//         let data: any = api(u);
//         console.log(data);
//
//         return(
//             <Form>
//
//             </Form>
//         )
//     }
// }

