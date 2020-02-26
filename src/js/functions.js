var task_button_container = document.getElementById("task_button_container");
        var task_button = document.getElementById("task_button");
        var top_bar = document.getElementById("top_bar");
        var note_body = document.getElementById("note_body")
        var input = document.getElementById("input");

        var inital_date = new Date();
        var date_selected = inital_date;
        var week_day = return_week_day(date_selected.getDay());
        var num_day = date_selected.getDate();
        var month = return_month(date_selected.getMonth());
        var year = date_selected.getFullYear();
        var month_year = month+year;

        export function foo () {
            alert("alert");
            return "output";
        }

        export function foo2() {
            alert("alert2");
            return "output2";
        }

        export const returnNoteStruct = () => {
            return note_struct;
        }

        function set_date() {
            week_day = return_week_day(date_selected.getDay());
            num_day = date_selected.getDate();
            month = return_month(date_selected.getMonth());
            year = date_selected.getFullYear();

            document.getElementById("week_day").innerHTML = `${week_day}, <span id="num_day">${return_month_day(num_day)}</span>`;
            document.getElementById("month").innerHTML = `${month} <span style="font-weight: 300">${year}</span>`;
        }

        // set_date();

        function return_week_day(x) {
            var day;
            switch(x) {
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                    break;
                case 0:
                    day = "Sunday";
                    break;
                default:
                    break;
            }
            return day;
        }

        function return_month_day(x) {
            var out;
            if(x == 1 || x == 21 || x == 31) {
               out = x + "st"; 
            } else if (x == 2 || x == 22 || x == 32) {
                out = x + "nd";
            } else if (x == 3 || x == 23) {
                out = x + "rd";
            } else {
                out = x + "th";
            }
            return out;
        }

        function return_month(x) {
            var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            var thisMonth = months[x]; 
            return thisMonth;
        }

        // task_button.onclick = function(){
        //     button_click();
        // }

        // document.getElementById("input").addEventListener("keyup", function(event) {
        //     if (event.keyCode === 13) {
        //         event.preventDefault();
        //         button_click();
        //     }
        // });

        function button_click() {
            change_colour();
            if(!top_bar.classList.contains("add-note")) {
                top_bar.classList.add("add-note")
            } else {
                if(task_button_container.classList.contains("empty-input")) {
                    top_bar.classList.remove("add-note");
                    task_button_container.classList.remove("empty-input");
                } else {
                    add_note_to_DOM(create_note(input.value));
                    top_bar.classList.remove("add-note");
                    task_button_container.classList.remove("empty-input");
                    input.value = "";
                }
            }
            num_of_tasks();
        }

        //Recalculate no. notes
        // num_of_tasks();
        function num_of_tasks(){
            no = document.getElementsByClassName("note").length - 1;
            // if(!top_bar.classList.contains("add-note")) {
            //     if(no == 1) {
            //         document.getElementById("num_of_tasks").setAttribute('data-value', no + " Task");
            //     } else if (no == 0) {
            //         document.getElementById("num_of_tasks").setAttribute('data-value', "0 Tasks");
            //     } else {
            //         document.getElementById("num_of_tasks").setAttribute('data-value', no + " Tasks");
            //     }
            // } else {
                document.getElementById("num_of_tasks").setAttribute('data-value', no);
            // }
        }

        //Change colour of input box if the input is empty
        function change_colour(){
            if (input.value.length == 0) {
                task_button_container.classList.add("empty-input");
            } else {
                task_button_container.classList.remove("empty-input");
            }
        }
  
        var note_struct = [
            {
                key: month+year, 
                days: {}
            }
        ]

        //
        var months_array = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var month_selector = inital_date.getMonth();
        var year_selected = year;
        var day_selected = inital_date.getDate();

        function add_days(days) {
            date_selected = new Date(date_selected.getTime() + days*24*60*60*1000);
        }

        function set_inital_day () {
            date_selected = inital_date;
        }

        // var key_array = [months_array[month_selector] + year_selector];
        var current_key = months_array[month_selector] + year_selected;
        var position = 0;
        var min = 0, max = 0;

        var note_selected = return_current_day_notes();

        function return_current_day_notes() {
            console.log(position + Math.abs(min));
            return note_struct[position + Math.abs(min)]["days"][day_selected];
        }

        function return_day_notes (day, month, year) {
            for (var i = 0; i < note_struct.length; i++) {
                if(note_struct[i]["key"] == month+year) {
                    let month_obj = note_struct[i];
                    if ( Object.keys(month_obj["days"]).includes(day.toString()) ) {
                        return month_obj["days"][day];
                    } else {
                        console.log("No notes");
                        return [];
                    }
                }
            }
        }

        function toggle_note_by_id(id) {
            for(var i = 0; i < note_struct.length; i++) {
                let days = note_struct[i]["days"];
                let day_keys = Object.keys(days);
                for(var j = 0; j < day_keys.length; j++) {
                    let notes = days[day_keys[j]];
                    for (var k = 0; k < notes.length; k++) {
                        let note = notes[k];
                        if( note["id"] == id.toString() ) {
                            console.log(note);
                            if(note["is_complete"] == "false") {
                                note["is_complete"] = "true";
                            } else {
                                note["is_complete"] = "false";
                            }
                        }
                    }
                }
            }
        }

        var init_note_struct = () => {
            if(note_struct[position + Math.abs(min)]["days"][day_selected] == undefined) {
                note_struct[position + Math.abs(min)]["days"][day_selected] = [];
            } 
        }

        init_note_struct();

        function go_to_today_button() {
            if(day_selected == inital_date.getDate() && year_selected == inital_date.getFullYear() && year_selected == inital_date.getFullYear()) {
                console.log("This is today");
                // document.getElementById("today_button").style = "display:none !important";
                document.getElementById("today_button").style = "width: 0px; height: 0px; opacity: 0";
                document.getElementById("arrow_buttons").style = "width: 135px";
            } else {
                // document.getElementById("today_button").style = "display:block !important";
                document.getElementById("today_button").style = "width: 50px; height: 50px; opacity: 1";
                document.getElementById("arrow_buttons").style = "width: 155px";
            }
        }

        // go_to_today_button()

        function go_to_today() {
            let today_day = inital_date.getDate();
            let today_month = inital_date.getMonth();
            let today_year = inital_date.getFullYear();
            console.log(months_array[today_month]);
            delete_day_notes_in_DOM();
            add_day_notes_in_DOM(today_day, months_array[today_month], today_year);
            set_inital_day();
            set_date();
            day_selected = today_day;
            month_selector = today_month;
            year_selected = today_year;
            position = 0;
            go_to_today_button();
            num_of_tasks();
        }

        function back_month() {
            position -= 1;
            add_days(-day_selected)
            if (month_selector != 0) {
                month_selector -= 1;
            } else {
                month_selector = 11;
                year_selected -= 1;
            }
            
            if(position < min) {
                min = position;
                // key_array.unshift(months_array[month_selector] + year_selector);
                note_struct.unshift({
                    key: months_array[month_selector] + year_selected,
                    days: {}
                });
            } 
            let days_key = get_days_in_month(month_selector, year_selected
); 
            if(note_struct[position + Math.abs(min)]["days"][days_key] == undefined) {
                note_struct[position + Math.abs(min)]["days"][days_key] = [];
            }
            current_key = months_array[month_selector] + year_selected;
            day_selected = days_key;
            console.log(note_struct + " " + day_selected);
            set_date();
            update_day_notes_in_DOM()
        }

        function forward_month() {
            position += 1;
            add_days((get_days_in_month(month_selector, year_selected) - day_selected) + 1)
            if (month_selector != 11) {
                month_selector += 1;
            } else {
                month_selector = 0;
                year_selected += 1;
            }

            if(position > max) {
                max = position;
                // key_array.push(months_array[month_selector] + year_selector);
                note_struct.push({
                    key: months_array[month_selector] + year_selected, 
                    days: {}
                });
            } 
            if(note_struct[position + Math.abs(min)]["days"][1] == undefined) {
                note_struct[position + Math.abs(min)]["days"][1] = []; 
            } 
            current_key = months_array[month_selector] + year_selected;
            day_selected = 1;
            console.log(note_struct + " " + day_selected);
            set_date();
            update_day_notes_in_DOM()
        }

        function back_day() {
            if(day_selected == 1) {
                back_month();
                return null;
            } else {
                day_selected--;
                if(note_struct[position + Math.abs(min)]["days"][day_selected] == undefined) {
                    note_struct[position + Math.abs(min)]["days"][day_selected] = [];
                }
           }
           add_days(-1)
           set_date();
           update_day_notes_in_DOM()
        }

        function forward_day() {
            if(day_selected == get_days_in_month(month_selector, year_selected)) {
                forward_month();
                return null;
            } else {
                day_selected++;
                if(note_struct[position + Math.abs(min)]["days"][day_selected] == undefined) {
                    note_struct[position + Math.abs(min)]["days"][day_selected] = [];
                }
           }
           add_days(1)
           set_date();
           update_day_notes_in_DOM()
        }

        document.onkeydown = checkKey;
        function checkKey(e) {

            e = e || window.event;
            if (e.keyCode == '37') {
              back_day();
            }
            else if (e.keyCode == '39') {
              forward_day();
            }

        }

        var today_notes = []; // Holds notes from today

    
        var get_days_in_month = (month,year) => {
            month++;
            return new Date(year, month, 0).getDate();
        };

        class Note {
            constructor(id, text, time, is_complete) {
                this.id = id;
                this.text = text;
                this.time = time;
                this.is_complete = is_complete;
            }
        }

        function getTime() {
            var time = new Date();
            return (time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
        }

        // Note creation
        var id_count = 0;
        function create_note(text){
            let note = new Note(id_count, text, getTime(), false);
            id_count += 1;
            note_struct[position + Math.abs(min)]["days"][day_selected].push(note);
            // console.log(all_notes);
            return note;
        }

        function add_note_to_DOM(note){
            var DOM_note = document.getElementById("template_note");
            var clone = DOM_note.cloneNode(true);

            let content = clone.childNodes[1]; //Retrieves content
            let left = (content.childNodes[1]) //Left
            let right = (content.childNodes[3]) //Right
            let time = right.childNodes[1];
            let checkbox1 = left.childNodes[1];
            let checkbox2 = left.childNodes[3];

            clone.id = note.id;
            clone.style = "display: flex !important";

            if(note.is_complete != "false") {
                if(clone.classList.contains("complete")) { 
                    clone.classList.remove("complete");
                    checkbox1.checked = false; 
                }
            } else {
                clone.classList.add("complete");
                checkbox1.checked = true;
            }
            left.innerHTML = note.text;
            time.innerHTML = note.time;

            left.appendChild(checkbox1);
            left.appendChild(checkbox2);

            if(note_body.innerHTML == "") {
                note_body.appendChild(clone);
            } else {
                note_body.insertBefore(clone, note_body.childNodes[0]);
            }
        }
        //

        function toggle_checkbox(){
            var target = event.target;
            let note = ((target.parentNode).parentNode).parentNode;
            note.classList.toggle("complete"); 
            toggle_note_by_id(note.id);      
        }

        function delete_note(){
            var target = event.target;
            var note = (((target.parentNode).parentNode).parentNode).parentNode;
            var note_id = note.id;
            for (var i = 0; i < note_struct[position + Math.abs(min)]["days"][day_selected].length; i++) {
                if (note_struct[position + Math.abs(min)]["days"][day_selected][i].id == note_id) {
                    note_struct[position + Math.abs(min)]["days"][day_selected].splice(i, 1);
                }
            }
            // console.log(all_notes);
            if(note.id != "note_body"){
                note.remove(); //Stops the body from being deleted
            }
            num_of_tasks();
                   
        }

        function delete_day_notes_in_DOM(){
            note_body.innerHTML = "";
        }

        function add_day_notes_in_DOM(day, month, year) {
            let day_notes = return_day_notes(day, month, year);
            for(var i = 0; i < day_notes.length; i++) {
                add_note_to_DOM(day_notes[i]);
            }
        }

        function update_day_notes_in_DOM() {
            delete_day_notes_in_DOM();
            add_day_notes_in_DOM(day_selected, months_array[month_selector], year_selected);
            num_of_tasks();
            go_to_today_button();
        }