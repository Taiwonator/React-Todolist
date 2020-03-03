import React, {Component} from 'react';

const NoteButton = (props) => {

    const foo = () => {
        // props.updateValue
    }
    
    return(
        <div className={`noteButtonContainer ${props.classStates.EMPTY_INPUT && props.classStates.ADDING_NOTE ? 'emptyInput' : ''}`}>
            <button className='noteButton' onClick={props.classStates.EMPTY_INPUT ? props.toggleAddingNote : console.log("ADD NOTE")}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <title>Untitled-2</title>
                    <path id="Rectangle_4" data-name="Rectangle 4" className="cls-1" d="M290,421h0a1.5,1.5,0,0,1,1.5-1.5h13A1.5,1.5,0,0,1,306,421h0a1.5,1.5,0,0,1-1.5,1.5h-13A1.5,1.5,0,0,1,290,421Z" transform="translate(-290 -413)"></path>
                    <path id="Rectangle_16" data-name="Rectangle 16" className="cls-1" d="M298,429h0a1.5,1.5,0,0,1-1.5-1.5v-13A1.5,1.5,0,0,1,298,413h0a1.5,1.5,0,0,1,1.5,1.5v13A1.5,1.5,0,0,1,298,429Z" transform="translate(-290 -413)"></path>
                </svg>
            </button>
            <div className='inputBox'>
                <input placeholder='Enter an activity :)' onChange={foo} value={props.userInput}/>
            </div>
        </div>
    )
};



export default NoteButton;