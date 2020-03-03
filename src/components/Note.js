import React, {Component} from 'react';

const Note = (props) => {

    return (
        <div className={`note ${props.isComplete ? 'complete' : ''}`}>
            <div className="content">
                <label className="left">{props.text} {props.isComplete}
                    <input onChange={() => props.toggleComplete(props.id)} type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <div className="right">
                    <h4 className="time">{props.time}</h4>
                    <div className="delete"><i className="far fa-trash-alt"></i></div>
                </div>
            </div>
        <div className="line"></div>
       </div>
    )
}

export default Note;