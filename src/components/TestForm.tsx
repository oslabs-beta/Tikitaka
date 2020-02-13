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
            let list = <option id={`${i}`} value={containers.items[i].metadata.name}>{containers.items[i].metadata.name}</option>
            dropDown.push(list)
        }
    } else {
        dropDown.push("None");
        dropDown.push("None1");
        dropDown.push("None2");
        dropDown.push("None3");
    }
    /////////////
    // button //
    ////////////

    interface arrayType {
        nameA: string;
        weightA: number;
        nameB: string;
        addressB: string;
        versionB: string;
    }
    // const [buttonText, setButtonText] = useState([{
    //     nameA: '',
    //     weightA: 0,
    //     nameB: '',
    //     addressB: '',
    //     versionB: '',
    // }]);

    const [imageA, setImageA] = useState<string>('');
    const dropdownHandler = (e:any) =>{
        setImageA(e.target.value);
        console.log(e.target.value)
    };

    const [weightA, setWeightA] = useState<number>(0);
    const weightAHandler = (e:any) => {
        setWeightA(e.target.value)
    }

    const [imageB, setImageB] = useState<string>('');
    const imageHandler = (e:any) => {
        setImageB(e.target.value)
    }

    const [address, setAddressB] = useState<string>('');
    const addressHandler = (e:any) => {
        setAddressB(e.target.value)
    }

    const [versionB, setVersionB] = useState<string>('');
    const versionHandler = (e:any) => {
        setVersionB(e.target.value)
    }


    const handleClick = (e:any) => {
        e.preventDefault();
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><h4>Docker Image A:</h4></Form.Label>
                    <Form.Control as="select" onChange={(e) => {dropdownHandler(e)}}>
                        {dropDown.map((item, i) => {
                            return <option key={i} value={`${item}`}>{item}</option>
                        })}
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
            {/* <Button variant="primary" type="submit" id="createTestBtn">
                Create A/B Test
            </Button> */}
            <Button>Create A/B Testing</Button>
            <Button variant="primary">
                Open Kiali
            </Button>
        </Form>
    );
}
export default TestForm;