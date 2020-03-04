import React, {Component} from 'react';
import TopBar from '../components/TopBar';
import NoteBody from '../components/NoteBody';
import NoteClass from '../classes/NoteClass';

class PhoneBody extends Component {

    constructor() {
        super();

        let note_1 = new NoteClass('Create Notes :)');
        let notes_array = [];
        notes_array.unshift(note_1);
        
        this.state = {
            class_states: {
                EMPTY_INPUT: true, 
                ADDING_NOTE: false
            }, 

            user_input: '', 
            all_notes: [{}],
            selected_date: {
                day_of_week: '',
                day_of_month: '', 
                month: '',
                year: ''
            },
            today_notes: notes_array
        }

    }

    componentDidMount() {
        this.setDate();
        setTimeout(() => this.createNotesObject(), 1);
    }

    createNotesObject() {
        let key = this.return_month(this.state.selected_date.month) + this.state.selected_date.year;
        let all_notes = [
        {
            key
        }]
        let this_month_notes = all_notes.filter(x => x['key'] == key)[0];

        this_month_notes['days'] = {};

        this_month_notes['days'][this.state.selected_date.day_of_month] = [];
        this_month_notes['days'][this.state.selected_date.day_of_month] = this.state.today_notes;

        let note_1 = new NoteClass('Create Notes :)');
        this_month_notes['days'][10] = [];
        this_month_notes['days'][10].unshift(note_1);

        this_month_notes['days'][5] = [];
        this_month_notes['days'][5].unshift(note_1);

        this.setState(prevState => ({
            all_notes
        }))
    }

    setDate = () => {
        const date = new Date();
        const day_of_week = date.getDay();
        const day_of_month = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        ////console.log(`Day of week: ${day_of_week}, Day of month: ${day_of_month}, Month: ${month}, Year: ${year}`);

        this.setState(prevState => ({
            selected_date: {
                day_of_week, day_of_month, month, year
            }
        }))
    }

    createNotesAt = (day, month, year) => {

        let key = this.return_month(this.state.selected_date.month) + this.state.selected_date.year;
        let all_notes = this.state.all_notes;
        let this_month_notes = all_notes.filter(x => x['key'] == key)[0];
        if(this_month_notes['days'][day] == undefined) {
            this_month_notes['days'][day] = [];
        } else {
            console.log("NOTES FOUND");
        }

        this.setState(prevState => ({
            all_notes
        }))

        console.log(this.state.all_notes);

        // if(this.state.all_notes[0]['days'][day] == undefined) {
        // } else {
        //     console.log("NOTES FOUND");
        // }
    }

    get_days_in_month = (month,year) => {
        month++;
        return new Date(year, month, 0).getDate();
    };

    forwardDay = () => {
        let days_in_month = this.get_days_in_month(this.state.selected_date.month, this.state.selected_date.year);

        let day_of_week;
        let day_of_month;

        if(this.state.selected_date.day_of_month < days_in_month) {
            day_of_month = this.state.selected_date.day_of_month + 1;
            this.createNotesAt(day_of_month, this.state.selected_date.month, this.state.selected_date.year);
            if(this.state.selected_date.day_of_week < 7) {
                day_of_week = this.state.selected_date.day_of_week + 1;
            } else {
                day_of_week = 1
            }
            this.setState(prevState => ({
                selected_date: {
                    ...this.state.selected_date,
                    day_of_week, day_of_month
                },
                today_notes: this.state.all_notes[0]['days'][day_of_month]
            }))
        } else {
            this.forwardMonth();
        }

        
        //console.log(`Day of week: ${this.state.selected_date.day_of_week}, Day of month: ${this.state.selected_date.day_of_month}, Month: ${this.state.selected_date.month}, Year: ${this.state.selected_date.year}`);
    }

    backDay = () => {    

        let day_of_week;
        let day_of_month; 

        if(this.state.selected_date.day_of_month > 1) {
            day_of_month = this.state.selected_date.day_of_month - 1;
            this.createNotesAt(day_of_month, this.state.selected_date.month, this.state.selected_date.year);
            if(this.state.selected_date.day_of_week > 1) {
                day_of_week = this.state.selected_date.day_of_week - 1;
            } else {
                day_of_week = 7;
            }
            this.setState(prevState => ({
                selected_date: {
                    ...this.state.selected_date,
                    day_of_week, day_of_month
                }, 
                today_notes: this.state.all_notes[0]['days'][day_of_month]
            }))
        } else {
            this.backMonth();
        }

        //console.log(`Day of week: ${this.state.selected_date.day_of_week}, Day of month: ${this.state.selected_date.day_of_month}, Month: ${this.state.selected_date.month}, Year: ${this.state.selected_date.year}`);
    }

    mod = (n, m) => {
        return ((n % m) + m) % m;
    }

    forwardMonth = () => {
        let days_in_this_month = this.get_days_in_month(this.state.selected_date.month, this.state.selected_date.year);

        let day_of_week;
        let day_of_month = 1;
        let month;
        let year;
        
        if(this.state.selected_date.month < 11) {
            month = this.state.selected_date.month + 1;
            year = this.state.selected_date.year;
        } else {
            month = 0;
            year = this.state.selected_date.year + 1;
        }

        day_of_week = (this.mod(this.state.selected_date.day_of_week + 1 + (days_in_this_month - this.state.selected_date.day_of_month), 7));
        if(day_of_week == 0) {
            day_of_week = 7; //idk why this glitch happens
        }
    
        this.setState(prevState => ({
            selected_date: {
                day_of_week, day_of_month, month, year
            }
        }))
        
    }

    backMonth = () => {
        let days_in_prev_month = this.get_days_in_month(this.state.selected_date.month - 1, this.state.selected_date.year);

        let day_of_week;
        let day_of_month = days_in_prev_month;
        let month;
        let year;

        if(this.state.selected_date.month > 0) {
            month = this.state.selected_date.month - 1;
            year = this.state.selected_date.year;
        } else {
            month = 11;
            year = this.state.selected_date.year - 1;
        }

        day_of_week = (this.mod(this.state.selected_date.day_of_week - this.state.selected_date.day_of_month, 7));
        if(day_of_week == 0) {
            day_of_week = 7; //idk why this glitch happens
        }
    
        this.setState(prevState => ({
            selected_date: {
                day_of_week, day_of_month, month, year
            }
        }))
        
    }

    return_month = (x) => {
        var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var thisMonth = months[x]; 
        return thisMonth;
    }

    noteButtonClick = () => {
            this.setState(prevState => ({
                class_states: {
                    ...this.state.class_states,
                    ADDING_NOTE: !prevState.class_states.ADDING_NOTE
                }
            })
        )
        // setTimeout(() => //console.log(`ADDING_NOTE: ${this.state.class_states.ADDING_NOTE}`), 1);   
        
        
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
        // //console.log("Adding....");
        let new_note = new NoteClass(this.state.user_input);
        this.state.today_notes.unshift(new_note);

        this.setState(prevState => ({ 
            user_input: '', 
            class_states: {
                ADDING_NOTE: true, 
                EMPTY_INPUT: true
            }
        }))
    }

    toggleNoteById = (id) => {
        const notes = this.state.today_notes;
        let note = notes.filter(x => x["id"] == id)[0];
        // //console.log(note.is_complete);
        note.is_complete = !note.is_complete;
        this.setState(prevState => ({ //confusing
           ...this.state
        }))
    }

    deleteNote = (id) => {
        const notes = this.state.today_notes;
        let new_notes = notes.filter(x => x["id"] != id);
        this.setState(prevState => ({ //confusing
           today_notes: new_notes
        }))    }

    handleKeyDown = (e) => {
        if(e.code == 'Enter') {
            if(!this.state.class_states.EMPTY_INPUT) {
                this.addNote()
            } else {
                this.noteButtonClick();
            }
        }
    }
    

    render() {
        return(
            <div className={'phoneBody scrollbar'} onKeyDown={() => this.handleKeyDown(event)}>
                <TopBar selectedDate={this.state.selected_date} 
                        noteCount={this.state.today_notes.length} 
                        classStates={this.state.class_states} 
                        userInput={this.state.user_input} 
                        toggleAddingNote={this.noteButtonClick} 
                        updateUserInput={() => this.updateUserInput(event)} 
                        addNote={this.addNote}
                        backDay={this.backDay}
                        forwardDay={this.forwardDay}
                        backMonth={this.backMonth}
                        forwardMonth={this.forwardMonth}/>

                <NoteBody notes={this.state.today_notes} toggleComplete={this.toggleNoteById} deleteNote={this.deleteNote}/>
            </div>
        )
    }
}

export default PhoneBody;