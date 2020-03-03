import React, {Component} from 'react';
import TopBarText from '../components/TopBarText';
import Widgets from '../components/Widgets';


const TopBar = (props) => (
    <div className={`topBar ${props.classStates.ADDING_NOTE ? 'addNote' : ''}`}>
        <TopBarText />
        <Widgets classStates={props.classStates} toggleAddingNote={props.toggleAddingNote}/>
    </div> 
)

export default TopBar;