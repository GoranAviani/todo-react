import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome teeeeo React {3+3}</h1>
        </header>

        <div className="Todo-container">
            < input type = "text" className = "todo-input" placeholder ="What needs to
            be done" ref = {this.todoInput} onKeyUp={this.addTodo}/>


            {/* Display todos*/}
            {this.state.todos.map((x,indeks) =>
                <div key={x.id} className="todo-item">
                    <div className="todo-item-left">
                        <input type="checkbox"/>
                        <div className="todo-item-label">{x.title}</div>
                    </div>
                    <div className="remove-item">
                        &times;
                    </div>
                </div>
            )}

            {console.log(this.state.todos)}

            <div className="extra-container">
                <div><label><input type ="checkbox"/>Check All</label></div>
                <div> 2 item left</div>
            </div>


            <div className="extra-container">
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                <div>
                    <button>Clear Completed</button>
                </div>
            </div>

        </div>
      </div>
    );
  }


todoInput = React.createRef();


state = {

    idTodo: 4,
    todos: [
        {
            'id':1,
            'title': 'Finish react appp',
            'completed': false,
            'editing': false,
        },
        {
            'id':2,
            'title': 'Get a job',
            'completed': false,
            'editing': false,
        },
        {
            'id':3,
            'title': 'Just to check',
            'completed': false,
            'editing': false,
        },

    ]
}



/* this.totoInput was undefined,
change how custom methods are defined = custom method into property with arrow function*/
/* every custom function must be defined like this to have access to "this" */
addTodo = event => {
      if (event.key === 'Enter'){
        const userTodoInput = (this.todoInput.current.value);

        /*if input is none dont add it*/
        if(userTodoInput.trim().length === 0){
            return;
        }

        this.setState((prevState, props) => {
            let todosPreviousState = prevState.todos;
            let idTodo = prevState.idTodo +1;

            todosPreviousState.push({
                id:idTodo,
                title:userTodoInput,
                completed: false
            });

          return {
                /*todos are being updated/replaced with  todosPreviousState*/
            todos: todosPreviousState,

          };
        });
/*put todoInput field to after it is showned''*/
this.todoInput.current.value ='';
      }
}




}

export default App;
