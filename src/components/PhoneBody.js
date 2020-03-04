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
                ADDING_NOTE: false, 
                TODAY: true
            }, 

            user_input: '', 
            all_notes: [{}],
            selected_date: this.setDate(),
            key_position: {
                position: 0,
                min: 0,
                max: 0
            },
            today_notes: notes_array
        }

        this.state.all_notes = this.createNotesObject();

    }

    componentDidMount() {
    }

    createNotesObject() {
        const date = new Date();
        const day_of_week = date.getDay();
        const day_of_month = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        let key = this.return_month(month) + year;
        let all_notes = [
        {
            key
        }]
        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);
        let this_month_notes = all_notes.filter(x => x['key'] == key)[note_index];

        this_month_notes['days'] = {};

        this_month_notes['days'][this.state.selected_date.day_of_month] = [];
        this_month_notes['days'][this.state.selected_date.day_of_month] = this.state.today_notes;

        let note_1 = new NoteClass('Create Notes :)');
        this_month_notes['days'][10] = [];
        this_month_notes['days'][10].unshift(note_1);

        this_month_notes['days'][5] = [];
        this_month_notes['days'][5].unshift(note_1);

        // this.setState(prevState => ({
        //     all_notes
        // }))

        return all_notes;
    }

    setDate = () => {
        const date = new Date();
        const day_of_week = date.getDay();
        const day_of_month = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        ////console.log(`Day of week: ${day_of_week}, Day of month: ${day_of_month}, Month: ${month}, Year: ${year}`);

        // this.setState(prevState => ({
        //     selected_date: {
        //         day_of_week, day_of_month, month, year
        //     }
        // }))

        return ({
            day_of_week, day_of_month, month, year
        })
    }

    createNotesAt = (day, month, year) => {

        let all_notes = this.state.all_notes;

        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);

        let key = this.return_month(month) + year;
        let this_month_notes = all_notes.filter(x => x['key'] == key)[0];

        if(this_month_notes['days'][day] == undefined) {
            // console.log(this_month_notes);
            this_month_notes['days'][day] = [];
        } else {
            // console.log("NOTES FOUND");
        }

        this.setState(prevState => ({
            all_notes
        }))

        console.log("NOTES: ", this.state.all_notes);
    }

    createMonthAt = (month, year, forward, pos, min_value, max_value) => {
        let all_notes = this.state.all_notes;

        let position = pos;
        let min = min_value;
        let max = max_value;

        let key = this.return_month(month) + year;
        const note_index = this.notesIndex(pos, min_value);

        console.log("position:", position, " min: ", min, " max:", max);

        if(forward) {
            if(position == max){
                console.log(note_index);
                if(all_notes[note_index] == undefined) {
                    all_notes.push({});
                    all_notes[note_index]['key'] = this.return_month(month) + year;
                    all_notes[note_index]['days'] = {};
                }
            }
         } else {
            if(position == min) {
                if(all_notes[0]['key'] != this.return_month(month) + year) {
                        all_notes.unshift({});
                        all_notes[note_index]['key'] = this.return_month(month) + year;
                        all_notes[note_index]['days'] = {};
                }
            }
        }
  
        this.setState(prevState => ({
            all_notes,
            key_position: {
                ...this.state.key_position,
                position, max, min
            }
        }))

        if(forward) {
            setTimeout(() => this.createNotesAt(1, month, year), 1);
        } else {
            setTimeout(() => this.createNotesAt(this.get_days_in_month(month, year), month, year), 1);
        }
    }

    get_days_in_month = (month,year) => {
        month++;
        return new Date(year, month, 0).getDate();
    };

    isToday = (day, month, year) => {
        const date = new Date();
        if(date.getDate() == day && date.getMonth() == month && date.getFullYear() == year) {
            return true;
        } else {
            return false;
        }
    }
    

    goToToday = () => {
        const date = new Date();
        let day_of_week = date.getDay();
        let day_of_month = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        this.setState(prevState => ({
            selected_date: {
                day_of_week, day_of_month, month, year
            },
            class_states: {
                ...this.state.class_states,
                TODAY: true
            }
        }))
    }

    forwardDay = () => {
        let days_in_month = this.get_days_in_month(this.state.selected_date.month, this.state.selected_date.year);

        let day_of_week;
        let day_of_month;

        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);

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
                today_notes: this.state.all_notes[note_index]['days'][day_of_month]
            }))
        } else {
            this.forwardMonth();
        }

        let TODAY = false;

        if( this.isToday(day_of_month, this.state.selected_date.month, this.state.selected_date.year)) {
            TODAY = true;
        } else {
            TODAY = false;
        }

        this.setState(prevState => ({
            class_states: {
                ...this.state.class_states,
                TODAY
            }
        }))
        
        //console.log(`Day of week: ${this.state.selected_date.day_of_week}, Day of month: ${this.state.selected_date.day_of_month}, Month: ${this.state.selected_date.month}, Year: ${this.state.selected_date.year}`);
    }

    backDay = () => {    

        let day_of_week;
        let day_of_month; 

        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);

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
                today_notes: this.state.all_notes[note_index]['days'][day_of_month]
            }))
        } else {
            this.backMonth();
        }

        let TODAY = false;

        if( this.isToday(day_of_month, this.state.selected_date.month, this.state.selected_date.year)) {
            TODAY = true;
        } else {
            TODAY = false;
        }

        this.setState(prevState => ({
            class_states: {
                ...this.state.class_states,
                TODAY
            }
        }))


        //console.log(`Day of week: ${this.state.selected_date.day_of_week}, Day of month: ${this.state.selected_date.day_of_month}, Month: ${this.state.selected_date.month}, Year: ${this.state.selected_date.year}`);
    }

    mod = (n, m) => (
        ((n % m) + m) % m
    )

    notesIndex = (pos, min) => (
        pos + Math.abs(min)
    )

    forwardMonth = () => {
        let days_in_this_month = this.get_days_in_month(this.state.selected_date.month, this.state.selected_date.year);

        let day_of_week;
        let day_of_month = 1;
        let month;
        let year;

        let position = this.state.key_position.position + 1;
        let max = this.state.key_position.max;
        
        if(this.state.selected_date.month < 11) {
            month = this.state.selected_date.month + 1;
            year = this.state.selected_date.year;
        } else {
            month = 0;
            year = this.state.selected_date.year + 1;
        }

        if(position > max) {
            max = position;
        }
        this.createMonthAt(month, year, true, position, this.state.key_position.min, max);

        // console.log(`position: ${position}, min: ${this.state.key_position.min}, max: ${this.state.key_position.max}`);


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

        let position = this.state.key_position.position - 1;
        let min = this.state.key_position.min;

        if(this.state.selected_date.month > 0) {
            month = this.state.selected_date.month - 1;
            year = this.state.selected_date.year;
        } else {
            month = 11;
            year = this.state.selected_date.year - 1;
        }

        if(position < min) {
            min = position;
        }
        this.createMonthAt(month, year, false, position, min, this.state.key_position.max);

        // setTimeout(() => console.log(`position: ${position}, min: ${this.state.key_position.min}, max: ${this.state.key_position.max}`), 1);


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
        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);
        this.state.all_notes[note_index]['days'][this.state.selected_date.day_of_month].unshift(new_note);

        this.setState(prevState => ({ 
            user_input: '', 
            class_states: {
                TODAY: prevState.class_states.TODAY,
                ADDING_NOTE: true, 
                EMPTY_INPUT: true
            }
        }))
    }

    toggleNoteById = (id) => {
        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);
        const notes = this.state.all_notes[note_index]['days'][this.state.selected_date.day_of_month];
        let note = notes.filter(x => x["id"] == id)[0];
        // //console.log(note.is_complete);
        note.is_complete = !note.is_complete;
        this.setState(prevState => ({ //confusing
           ...this.state
        }))
    }

    deleteNote = (id) => {
        // const notes = this.state.today_notes;
        const all_notes = this.state.all_notes;
        // let new_notes = notes.filter(x => x["id"] != id);
        const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);
        let new_all_notes = all_notes;
        let new_notes = new_all_notes[note_index]['days'][this.state.selected_date.day_of_month].filter(x => x['id'] != id);
        new_all_notes[note_index]['days'][this.state.selected_date.day_of_month] = new_notes;
        console.log(new_all_notes);
        
        this.setState(prevState => ({ //confusing
           all_notes: new_all_notes
        }))    
    }

    handleKeyDown = (e) => {
        if(e.code == 'Enter') {
            if(!this.state.class_states.EMPTY_INPUT) {
                this.addNote()
            } else {
                this.noteButtonClick();
            }
        }
    }

    returnNotes = () => {
        // const note_index = this.notesIndex(this.state.key_position.position, this.state.key_position.min);
        // if(this.state.all_notes[note_index]['days'] != undefined) {
        //     return (this.state.all_notes[note_index]['days'][this.state.selected_date.day_of_month]);
        // }
        return (
            // this.state.today_notes,
            this.state.all_notes
        )
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
                        forwardMonth={this.forwardMonth}
                        goToToday={this.goToToday}/>

                <NoteBody all_notes={this.returnNotes()}
                          toggleComplete={this.toggleNoteById} 
                          deleteNote={this.deleteNote}
                          noteIndex={() => this.notesIndex(this.state.key_position.position, this.state.key_position.min)}
                          selectedDay={this.state.selected_date.day_of_month}/>
            </div>
        )
    }
}

export default PhoneBody;