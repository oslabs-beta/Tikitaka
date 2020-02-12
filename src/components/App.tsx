import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Bullets from './Bullets';
import Sidebar from './Sidebar';
import TestForm from './TestForm';
import About from './About';
import TestDisplay from './TestDisplay';


//===================================================================================================//
//                                          INTERFACE                                                //
//===================================================================================================//
// Typescript: because states are given, need to define as interface
interface IState 
{
    currentWindow: String;
}

                                     // <Props, State>
export class App extends React.Component<{}, IState>{
//===================================================================================================//
//                                          CONSTRUCTOR                                              //
//===================================================================================================//
    constructor(props: {}) {
        super(props);

        // Defining state
        this.state = {
            currentWindow:"home"
        }
    }
//===================================================================================================//
//                                            METHODS                                                //
//===================================================================================================//

//=============================================PUBLIC
    // public handleSubmit(e: React.FormEvent<HTMLFormElement>): void{
    //     // Type of e is called = React.FormEvent<HTMLFormElement>
    //     e.preventDefault();
    //     this.setState({
    //         currentTask: "",
    //         tasks: [
    //             ...this.state.tasks,
    //             {
    //                 id: this._timeInMilliseconds(),
    //                 value: this.state.currentTask,
    //                 completed: false
    //             }
    //         ]
    //     })
    // }

    // public deleteTask(taskId: number): void {
    //     const filteredTask: Array<ITask> = this.state.tasks.filter(
    //         (task: ITask) => task.id !== taskId
    //         );
    //     this.setState({tasks: filteredTask});
    // }

    // public toggleDone(index: number): void {
    //     let task: ITask[] = this.state.tasks.splice(index, 1);
    //     task[0].completed = !task[0].completed;
    //     const tasks: ITask[] = [...this.state.tasks, ...task];
    //     this.setState({tasks});
    // }

    // public renderTasks(): JSX.Element[] {
    //     return this.state.tasks.map((task: ITask, index: number) => {
    //         return (
    //             <div key={task.id} 
    //                  className="tdl-task"> 
    //             <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
    //             <button onClick={() => this.deleteTask(task.id)}>Delete</button>
    //         <button onClick={() => this.toggleDone(index)}>{task.completed ? "Undo" : "Done"}</button>
    //             </div>
    //         )
    //     })
    // }
//===================================================================================================//
//                                            RENDER                                                 //
//===================================================================================================//
    public render(): JSX.Element{

        return (
        <Container fluid>
            <Row>
                <Col>
                    <Sidebar />
                </Col>
                <Col >
                <Navbar expand="lg" variant="dark" bg="dark"  fixed="top" className="header">
                    <Container>
                        <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    </Container>
                </Navbar>
                </Col>
                <Col xl={12} className="content">
                    <Router>
                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-left" fixed="top">
                            <Navbar.Brand>TIKITAKA</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link to="/abTest">A/B Test</Link>
                                    <Link to="/bullets">Distributed Tracing</Link>
                                    <Link to="/history">Request History</Link>
                                    <Link to="/about">About</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                        <Switch>
                            <Route path="/abTest">
                                <TestForm />
                            </Route>
                            <Route path="/bullets">
                            <Bullets width={900} height={800} margin={{
                                top: 30,
                                left: 30,
                                right: 30,
                                bottom: 30
                            }} />
                            </Route>
                            <Route path="/history">
                                <TestDisplay />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                    </Router>
                </Col>
            </Row>
        </Container>
        );
    }


//=============================================PRIVATE
//     private _timeInMilliseconds(): number {
//         const date: Date = new Date();
//         return date.getTime();
//     }
} 
