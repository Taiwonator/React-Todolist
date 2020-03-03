import React, {Component} from 'react';
import TopBarText from '../components/TopBarText';
import Widgets from '../components/Widgets';


const TopBar = (props) => (
    <div className={`topBar ${props.classStates.ADDING_NOTE ? 'addNote' : ''}`}>
        <TopBarText />
        <Widgets classStates={props.classStates} userInput={props.userInput} toggleAddingNote={props.toggleAddingNote} updateUserInput={props.updateUserInput}/>
    </div> 
)

export default TopBar;