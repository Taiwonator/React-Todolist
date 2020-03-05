import React, {Component} from 'react';
import BackDayButton from '../components/BackDayButton';
import BackMonthButton from '../components/BackMonthButton';

const BackButtons = (props) => (
    <div className='backButtons'>
        <BackMonthButton backMonth={props.backMonth}/>
        <BackDayButton backDay={props.backDay}/>
    </div>
)

export default BackButtons;