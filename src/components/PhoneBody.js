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

    updateUserInput = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            user_input: e.target.value
        }))

        if (e.target.value == '') {
            this.setEmptyInput();
        } else {
            this.unsetEmptyInput();
        }
    }

    setEmptyInput = () => {
        this.setState(prevState => ({
            class_states: {
                ...this.state.class_states,
                EMPTY_INPUT: true
            }
        }))
    }

    unsetEmptyInput = () => {
        this.setState(prevState => ({
            class_states: {
                ...this.state.class_states,
                EMPTY_INPUT: false
            }
        }))
    }
    

    render() {
        return(
            <div className='phoneBody'>
                <TopBar classStates={this.state.class_states} userInput={this.state.user_input} toggleAddingNote={this.noteButtonClick} updateUserInput={() => this.updateUserInput(event)}/>
                <NoteBody />
            </div>
        )
    }
}

export default PhoneBody;