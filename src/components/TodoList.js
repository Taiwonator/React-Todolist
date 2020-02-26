import React, {Component} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    listTodos(todo) {
        return <li key={todo}>{todo}</li>
    }

    render() {
        const todos = this.props.todos;
        const list_todos = todos.map(this.listTodos);
        
        return (
        <ul>{list_todos}</ul>
        )
    }
}

export default TodoList;
