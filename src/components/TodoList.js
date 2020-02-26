import React, {Component} from 'react';
import Todo from '../components/Todo';

class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    uniqueKey = () => {
        return Date.now();
    }

    listTodos = (todo) => {
        return <Todo deleteTodo={this.props.deleteTodo} text={todo.text} key={todo.key} id={todo.id} ></Todo>
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
