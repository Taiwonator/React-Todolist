import React, {Component} from 'react';
import TodoList from '../components/TodoList';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: ["Todo 1", "Todo 2", "Todo 3", "Todo 4"]
        }
    }            

    render() {
            return (
            <TodoList todos={this.state.todos}/>
        )
    }
}

export default App;