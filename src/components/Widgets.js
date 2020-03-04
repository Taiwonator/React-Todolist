import React, {Component} from 'react';
import NoteCounter from '../components/NoteCounter';
import ArrowButtons from '../components/ArrowButtons';
import NoteButton from '../components/NoteButton';

const Widgets = (props) => (
    <div className='widgets'>
        <NoteCounter noteCount={props.noteCount} />
        <ArrowButtons backDay={props.backDay} forwardDay={props.forwardDay} backMonth={props.backMonth} forwardMonth={props.forwardMonth}/>
        <NoteButton classStates={props.classStates} userInput={props.userInput} toggleAddingNote={props.toggleAddingNote} updateUserInput={props.updateUserInput} addNote={props.addNote}/>
    </div>
)


export default Widgets;