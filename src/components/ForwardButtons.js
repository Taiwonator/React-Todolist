import React, {Component} from 'react';
import ForwardDayButton from '../components/ForwardDayButton';
import ForwardMonthButton from '../components/ForwardMonthButton.js';

const ForwardButtons = () => (
    <div className='forwardButtons'> 
        <ForwardDayButton />
        <ForwardMonthButton />
    </div>
)

export default ForwardButtons;