import React, {Component} from 'react';
import Note from '../components/Note';

class NoteBody extends Component {
    constructor (props){
        super(props);
    }
    
    returnNotes =() => {
        let notes;
        // console.log("Note index: ", this.props.noteIndex(), "All notes: ", this.props.all_notes);

        if(this.props.all_notes[this.props.noteIndex()]['days'][this.props.selectedDay] != undefined) {
            notes = this.props.all_notes[this.props.noteIndex()]['days'][this.props.selectedDay];
        } else {
            notes = [];
        }
        const list_notes = notes.map(note => (
            <Note key={note.id} id={note.id} isComplete={note.is_complete} text={note.text} time={note.time} toggleComplete={this.props.toggleComplete} deleteNote={this.props.deleteNote}/>
        ));
        return list_notes;
    }

    handleWait = () => {

    }

    render() {
        
        return (
            <div className='noteBody'>
                {this.returnNotes()}
            </div>
        )
    }
}

export default NoteBody;