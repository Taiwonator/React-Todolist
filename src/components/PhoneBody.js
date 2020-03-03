import React, {Component} from 'react';
import TopBar from '../components/TopBar';
import NoteBody from '../components/NoteBody';
import NoteClass from '../classes/NoteClass';
import Note from './Note';

class PhoneBody extends Component {

    constructor() {
        super();

        let note_1 = new NoteClass('Note 1');
        let note_2 = new NoteClass('Note 2');
        let notes_array = [];
        notes_array.unshift(note_1);
        notes_array.unshift(note_2);
        
        this.state = {
            class_states: {
                EMPTY_INPUT: true, 
                ADDING_NOTE: false
            }, 

            user_input: '', 
            all_notes: [{}],
            selected_date: {
                day: '', 
                month: '',
                year: ''
            },
            today_notes: notes_array
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
        // setTimeout(() => console.log(`ADDING_NOTE: ${this.state.class_states.ADDING_NOTE}`), 1);   
        
        
        // this.setState(prevState => ({
        //     today_notes: notes_array
        // }))
        
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

    addNote = () => {
        console.log("Adding....");
        let new_note = new NoteClass(this.state.user_input);
        this.state.today_notes.unshift(new_note);

        this.setState(prevState => ({ 
            user_input: '', 
            class_states: {
                ADDING_NOTE: false, 
                EMPTY_INPUT: true
            }
        }))
    }

    toggleNoteById = (id) => {
        const notes = this.state.today_notes;
        let note = notes.filter(x => x["id"] == id)[0];
        console.log(note.is_complete);
        note.is_complete = !note.is_complete;
    }
    

    render() {
        return(
            <div className='phoneBody'>
                <TopBar classStates={this.state.class_states} userInput={this.state.user_input} toggleAddingNote={this.noteButtonClick} updateUserInput={() => this.updateUserInput(event)} addNote={this.addNote}/>
                <NoteBody notes={this.state.today_notes} toggleComplete={this.toggleNoteById}/>
            </div>
        )
    }
}

export default PhoneBody;