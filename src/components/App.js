import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import '../styles/button.scss'

class App extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
            // todos: ["Todo 1"}, "Todo 2", "Todo 3", "Todo 4"]
            todos: [{text: 'Todo 1', key: 1, id: 1}, {text: 'Todo 2', key: 2, id: 2}]
        }
    }
    
    changeInput = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        this.setState({
            input: e.target.value, 
            todos: this.state.todos
        });
    }

    addTodo = (e) => {
        e.preventDefault();

        this.state.todos.unshift({
            text: this.state.input,
            key: Date.now(), 
            id: Date.now() 
        });

        this.setState({
            input: '', 
            todos: this.state.todos
        })
    }

    deleteTodo = (key) => {
        const new_todos = this.state.todos.filter(x => x['id'] != key);

        this.setState({
            input: this.state.input, 
            todos: new_todos
        })
    }

    render() {
            return (
            <div>
                <input onChange={this.changeInput} value={this.state.input} type='input'/>
                <input onClick={this.addTodo} type='submit'/>
                <h3>{this.state.input}</h3>
                <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos}/>
            </div>
        )
    }
}

export default App;