import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

interface Iprops{

}

export default class TestForm extends React.Component<Iprops, any>{
    public render(): JSX.Element{

        // const u:string = 'http://localhost:8081/apis/apps/v1/namespaces/default/deployments/';
       
        // function api<T>(url: string): Promise<any> {
        // return fetch(url, {
        //     redirect: 'follow'})
        //     .then(response => {
        //     if (!response.ok) {
        //         throw new Error(response.statusText)
        //     }
        //     return response.json()
        //     })
        // }
        // let data: any = api(u);
        // console.log(data);
        // data.items.forEach((item: any) => {
        //     data.push(item.metadata);
        //     console.log(item.metadata);
        //   });

        // let deployments[]
        return(
            <React.Fragment>
            <iframe id="myFrame" width="100%" height="1000px" src="http://localhost:55917/kiali/console/overview?kiosk=true"></iframe>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label><h4>Docker Image A:</h4></Form.Label>
                        <Form.Control as="select">
                            <option>Select image name...</option>
                            <option>tikitaka-arman-image</option>
                            <option>tikitaka-cat-image</option>
                            <option>tikitaka-pati-image</option>
                            <option>tikitaka-ryan-image</option>
                            <option>tikitaka-yunho-image</option>
                        </Form.Control>
                        <br />
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Canary weight (integer between 0-100)"
                            aria-label="Amount (to the nearest number)"
                            />
                            <InputGroup.Append>
                            <InputGroup.Text>%</InputGroup.Text>
                            <InputGroup.Text>weight</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label><h4>Docker Image B: </h4></Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Name: </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Address: </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            placeholder="Ex: 77af4d6b9913"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Version: </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            placeholder="1.0.0"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />

                    </Form.Group>

                </Form.Row>
                <Button variant="primary" type="submit" id="createTestBtn">
                    Create A/B Test
                </Button>
            </Form>
            </React.Fragment>
        )
    }
}