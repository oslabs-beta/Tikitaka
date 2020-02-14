import * as React from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

interface Iprops{};

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
    const getContainers = async () => {
        const r = await fetch('http://localhost:8081/apis/apps/v1/namespaces/default/deployments/');
        const containers = await r.json();
        setContainers(containers);
    };
    useEffect(() => {getContainers()}, []);
    const dropDown = [];
    if (containers.items.length > 1) {
        for(let i = 0; i < containers.items.length; i++) {
            dropDown.push(<option key={`${i}`}>{containers.items[i].metadata.name}</option>);
        }
    } else {
        dropDown.push(<option key='ryan'>tikitaka-ryan-image</option>);
    }
    return (
        <React.Fragment>
            <iframe id="myFrame" width="100%" height="1000px" src="http://localhost:49595/kiali/console/overview?kiosk=true"></iframe>
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
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
                <Form.Group as={Col}>
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
    );
}
export default TestForm;
