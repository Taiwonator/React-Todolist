import React, {Component} from 'react';

class TodoLeftContent extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <label className='left'>
                NoteText
                <input type="checkbox"/>
                <span className='checkmark'></span>
            </label>
        )
    }
}

export default TodoLeftContent;