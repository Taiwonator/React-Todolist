import React, {Component} from 'react';

class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3 style={{display:'inline-block'}}>{this.props.text}</h3>
                <button className='btn' onClick={() => this.props.deleteTodo(this.props.id)} style={{margin: '5px'}}>Delete</button>
            </div>
        )
    }
}

export default Todo;
