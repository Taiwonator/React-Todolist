import React, {Component} from 'react';

class TopBarText extends Component {
    constructor(props) {
        super(props);
    }

    return_week_day = (x) => {
        let day;
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
            case 7:
                day = "Sunday";
                break;
            default:
                break;
        }
        return day;
    }

    return_month_day = (x) => {
        let out;
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

    return_month = (x) => {
        var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var thisMonth = months[x]; 
        return thisMonth;
    }

    render() {
        return (
            <div className='topBarText'>
                <h2>{this.return_week_day(this.props.selectedDate.day_of_week)}, <span>{this.return_month_day(this.props.selectedDate.day_of_month)}</span></h2>
                <h3>{this.return_month(this.props.selectedDate.month)} <span>{this.props.selectedDate.year}</span></h3>
            </div>
        )
    }
}

export default TopBarText;