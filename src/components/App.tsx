import * as React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Container,Row,Col} from 'react-bootstrap';
import Bullets from './Bullets';
import Sidebar from './Sidebar';


  
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
        <Container className="wrapper">
            
            <Row>
                {/* APP NAVBAR */}
                <Col sm={3} >
                    <Sidebar />
                    hello
                </Col>

                {/* APP MAIN DISPLAY */}
                <Col sm={9}>
                    <Container id="main-display">
                    <Col className="content">
                        <Bullets width={1400} height={1400} 
                                margin={{
                                top: 30,
                                left: 30,
                                right: 30,
                                bottom: 30
                                }} />
                    </Col>
                    </Container>
                    sup
                </Col>
            </Row>
           

        
            

            {/* <Row className="justify-content-md-center">
                <div>
                    <h1>To Do List</h1>
                    <form onSubmit={(e)=> this.handleSubmit(e)}>
                        <input type="text"
                            className="tdl-input"
                            placeholder="Add a task"
                            value={ this.state.currentTask }
                            onChange={(e) => this.setState({ currentTask: e.target.value})}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                    <section> { this.renderTasks() } </section>
                </div>
            </Row> */}
        </Container>
        
        );
    }


//=============================================PRIVATE
//     private _timeInMilliseconds(): number {
//         const date: Date = new Date();
//         return date.getTime();
//     }
} 
