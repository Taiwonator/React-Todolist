import React, {Component} from 'react';
import Note from '../components/Note';

class NoteBody extends Component {
    constructor (props){
        super(props);
    }
    
    returnNotes() {
        const notes = this.props.notes;
        const list_notes = notes.map(note => (
            <Note key={note.id} id={note.id} isComplete={note.is_complete} text={note.text} time={note.time} toggleComplete={this.props.toggleComplete}/>
        ));
        return list_notes;
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