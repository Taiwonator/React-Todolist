import React, {Component} from 'react';
import TodoContent from '../components/TodoContent';
import TodoLine from '../components/TodoLine';


class Todo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='note'>
                <TodoContent/>
                <TodoLine/>
            </div>
        )
    }
}

export default Todo;