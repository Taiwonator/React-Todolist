import React, {Component} from 'react';
import NoteCounter from '../components/NoteCounter';
import ArrowButtons from '../components/ArrowButtons';
import NoteButton from '../components/NoteButton';

class Widgets extends Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div className='widgets'>
                <NoteCounter />
                <ArrowButtons />
                <NoteButton />
            </div>
        )
    }
}

export default Widgets;