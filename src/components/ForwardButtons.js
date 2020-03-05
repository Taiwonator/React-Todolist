import React, {Component} from 'react';
import ForwardDayButton from '../components/ForwardDayButton';
import ForwardMonthButton from '../components/ForwardMonthButton.js';

const ForwardButtons = (props) => (
    <div className='forwardButtons'> 
        <ForwardDayButton forwardDay={props.forwardDay} />
        <ForwardMonthButton forwardMonth={props.forwardMonth}/>
    </div>
)

export default ForwardButtons;