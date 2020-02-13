import * as React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
interface Iprops{
};
const TestForm: React.FC<Iprops> = () => {
    interface eachMetadataType {
        name: string;
        namespace: string;
        selfLink: string;
        uid: string;
        resourceVersion: string;
        generation: number;
        creationTimestamp: string;
    }
    interface eachItemType {
        metadata: eachMetadataType;
        spec: object;
        status: object;
    }
    interface containersType {
        kind: string;
        apiVersion: string;
        metadata: object;
        items: eachItemType[];
    }
    const [containers, setContainers] = useState<containersType>({
        kind: '',
        apiVersion: '',
        metadata: {},
        items: [{metadata: {name: "api-gateway",
        namespace: "default",
        selfLink: "/apis/apps/v1/namespaces/default/deployments/api-gateway",
        uid: "2ad6806d-0071-45cc-929f-09da9d21a9c9",
        resourceVersion: "116386",
        generation: 1,
        creationTimestamp: "2020-02-10T20:01:48Z"}, spec: {}, status: {}}]
    });
    useEffect(() => {
        const getContainers = async () => {
            let r = await fetch('http://localhost:8081/apis/apps/v1/namespaces/default/deployments/');
            let containers = await r.json();
            setContainers(containers);
        };
        getContainers();
    },[]);
    const dropDown = [];
    if (containers.items.length > 1) {
        for(let i = 0; i < containers.items.length; i++) {
            let list = <option id={`${i}`}>{containers.items[i].metadata.name}</option>
            dropDown.push(list)
        }
    } else {
        dropDown.push(<option id='ryan'>tikitaka-ryan-image</option>);
    }
    interface ReqOptions {
        method: string;
        headers: any;
        body: any;
    }
    const vS = {
        "apiVersion": "networking.istio.io/v1alpha3",
        "kind": "VirtualService",
        "metadata": {
            "annotations": {},
            "name": "pati-cluster-ip-service",
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
    const reqOption:ReqOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: vS
    };
    useEffect(() => {
        const addVirtualService = async () => {
            let r = await fetch('http://localhost:8081/apis/apps/v1/namespaces/default/deployments/',reqOption);
            let containers = await r.json();
            setContainers(containers);
        };
        addVirtualService();
    },[]);
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><h4>Docker Image A:</h4></Form.Label>
                    <Form.Control as="select">
                        {dropDown}
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
    );
}
export default TestForm;
