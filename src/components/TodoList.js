import React, {Component} from 'react';
import Todo from '../components/Todo';
import '../styles/index.css';
import {foo, foo2, returnNoteStruct} from '../js/functions.js'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [{}]
        };
    }

    newState () {
        let note_struct = returnNoteStruct();
        this.setState({
            notes: note_struct
        });
        console.log(this.state);
    }



    render() {
        return (
            <div onClick={this.newState.bind(this)} className='note-body'>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
            </div>
        )
    }
}

// functions.foo();


export default TodoList;