import React, {Component} from 'react';
import TodoLeftContent from '../components/TodoLeftContent';
import TodoRightContent from '../components/TodoRightContent';

class TodoContent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='content'>
                <TodoLeftContent/>
                <TodoRightContent/>
            </div>
        )
    }
}

export default TodoContent;