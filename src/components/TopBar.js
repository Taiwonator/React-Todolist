import React, {Component} from 'react';
import TopBarText from '../components/TopBarText';
import Widgets from '../components/Widgets';


const TopBar = (props) => (
    <div className={`topBar ${props.classStates.ADDING_NOTE ? 'addNote' : ''}`}>
        <TopBarText selectedDate={props.selectedDate}/>

        <Widgets noteCount={props.noteCount} 
                 classStates={props.classStates} 
                 userInput={props.userInput} 
                 toggleAddingNote={props.toggleAddingNote} 
                 updateUserInput={props.updateUserInput} 
                 addNote={props.addNote}
                 backDay={props.backDay}
                 forwardDay={props.forwardDay}
                 backMonth={props.backMonth}
                 forwardMonth={props.forwardMonth}
                 goToToday={props.goToToday}/>
    </div> 
)

export default TopBar;