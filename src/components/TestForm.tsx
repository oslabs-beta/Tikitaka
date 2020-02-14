import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { HistoryContext } from '../context/historyContext';

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

    const { history, setHistory } = useContext(HistoryContext);
    console.log('h: ', history);
    console.log('set his', setHistory)
    
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
        setWeightA(e.target.value);
        console.log(weightA);
    }
    const [imageB, setImageB] = useState<string>('');
    const imageHandler = (e:any) => {
        setImageB(e.target.value);
        console.log(imageB);
    }
    const [addressB, setAddressB] = useState<string>('');
    const addressHandler = (e:any) => {
        setAddressB(e.target.value);
        console.log(addressB);
    }
    const [versionB, setVersionB] = useState<string>('');
    const versionHandler = (e:any) => {
        setVersionB(e.target.value);
        console.log(versionB)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('successfully bound handleSubmit to the button');
        // console.log('request context', requestContext);
        // const req = useContext(requestContext.imageA)
        // console.log('req', req);
        setHistory([...history, { imageA, weightA, imageB, addressB, versionB }]);
    }
    console.log('history now: ', history);
    
    return (
        <React.Fragment>
            <iframe id="myFrame" width="100%" height="1000px" src="http://localhost:55917/kiali/console/overview?kiosk=true"></iframe>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label><h4>Docker Image A:</h4></Form.Label>
                    <Form.Control as="select" onChange={(e) => {dropdownHandler(e)}}>
                        <option key={-1}>Choose image name...</option>
                        {dropDown}
                    </Form.Control>
                    <br />
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Canary weight (integer between 0-100)"
                        aria-label="Amount (to the nearest number)"
                        onChange={weightAHandler}
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
                        onChange={imageHandler}
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
                        onChange={addressHandler}
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
                        onChange={versionHandler}
                        />
                    </InputGroup>
                    <br />
                </Form.Group>
            </Form.Row>
            {/* <Button variant="primary" type="submit" id="createTestBtn">
                Create A/B Test
            </Button> */}
            <Button type="submit">Create A/B Testing</Button>
            <Button variant="primary">
                Open Kiali
            </Button>
        </Form>
        </React.Fragment>
    );
}
export default TestForm;
