import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

interface Iprops{

}

export default class TestForm extends React.Component<Iprops, any>{
    public render(): JSX.Element{
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label><h4>Target A</h4></Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>Pod1</option>
                            <option>Pod2</option>
                            <option>Pod3</option>
                            <option>Pod4</option>
                            <option>Pod5</option>
                        </Form.Control>
                        <br />
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Weight
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="select">
                                <option>Choose...</option>
                                <option>0%</option>
                                <option>10%</option>
                                <option>25%</option>
                                <option>50%</option>
                                <option>90%</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form.Group>
                        

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label><h4>Target B</h4></Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>Pod a</option>
                            <option>Pod b</option>
                            <option>Pod c</option>
                            <option>Pod d</option>
                            <option>Pod e</option>
                        </Form.Control>
                        <br />

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Weight
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>0%</option>
                                    <option>10%</option>
                                    <option>25%</option>
                                    <option>50%</option>
                                    <option>90%</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form.Group>

                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}