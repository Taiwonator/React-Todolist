import React, {Component} from 'react';
import TopBar from '../components/TopBar';
import NoteBody from '../components/NoteBody';

class PhoneBody extends Component {

    constructor() {
        super();
        this.state = {
            class_states: {
                EMPTY_INPUT: true, 
                ADDING_NOTE: false
            }, 

            user_input: ''
        }
    }

    noteButtonClick = () => {
            this.setState(prevState => ({
                class_states: {
                    ...this.state.class_states,
                    ADDING_NOTE: !prevState.class_states.ADDING_NOTE
                }
            })
        )
        setTimeout(() => console.log(`ADDING_NOTE: ${this.state.class_states.ADDING_NOTE}`), 1);       
    }

    render() {
        return(
            <div className='phoneBody'>
                <TopBar classStates={this.state.class_states} toggleAddingNote={this.noteButtonClick}/>
                <NoteBody />
            </div>
        )
    }
}

export default PhoneBody;