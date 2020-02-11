import * as React from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Container,Row,Col} from 'react-bootstrap';
import Bullets from './Bullets';
import Sidebar from './Sidebar';
import TestForm from './TestForm';
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
                <Col xl={12} className="header">
                    <h1>This is Header</h1>
                </Col>
                <Col xl={12} className="content">
                    <TestForm />
                    <TestDisplay />
                </Col>
                {/* <Col xl={12}></Col> */}
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
