import React, {Component} from 'react';

class TodoRightContent extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className='right'>
                <h4 className='time'>8:00 AM</h4>
                <div className='delete'>
                    <i className='far fa-trash-alt'>Delete Icon</i>
                </div>
            </div>
        )
    }
}

export default TodoRightContent;