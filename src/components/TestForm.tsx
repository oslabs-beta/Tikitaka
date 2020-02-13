import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


import { useState, useEffect } from 'react';
const opt = {
    "apiVersion": "networking.istio.io/v1alpha3",
    "kind": "VirtualService",
    "metadata": {
        "name": "aaaa"
    },
    "spec": {
        "hosts": [
            "*"
        ],
        "gateways": [
            "tikitaka-gateway"
        ],
        "http": [
            {
                "route": [
                    {
                        "destination": {
                            "host": "aaaa"
                        }
                    }
                ]
            }
        ]
    }
};


const TestForm: React.FC<any>  = props =>{

        const u:string = 'http://localhost:8001/apis/apps/v1/namespaces/default/deployments/';

        function api<T>(url: string): any {
            return fetch(url, {
                redirect: 'follow'})
                .then(async response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data: any = await response.json();
                return data;
                })
        }
        let data: any = api(u);
        console.log(data);

// example consuming code
        console.log('habihubi', (async () => {
            interface HttpResponse<T> extends Response {
                parsedBody?: T;
            }
            async function http<T>(
                request: RequestInfo
            ): Promise<HttpResponse<T>> {
                const response: HttpResponse<T> = await fetch(
                    request
                );
                response.parsedBody = await response.json();
                return response;
            }

// example consuming code
            const response = await http<any>(
                "http://localhost:8001/apis/apps/v1/namespaces/default/deployments/"
            )
        }
        )());
        interface Options {
            method: string;
            headers: any;
            body: any;
            status: number;
        }
        const [virtualServices, addVirtualService] = useState<any[]>([]);
        const options:Options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: opt,
            status: 200
        };
        const getContainers = async () => {
            let response = await fetch('http://localhost:8001/apis/networking.istio.io/v1alpha3/namespaces/default/virtualservices/',options);
            let vS = await response.json();
            addVirtualService([...virtualServices, vS]);
        };
        useEffect( () => {
            getContainers();
        }
            , []);

        return(
            <Form onSubmit={() => console.log([...virtualServices])}>
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
                <Button variant="primary">
                    Open Kiali
                </Button>
            </Form>
        )
};

export default TestForm;
