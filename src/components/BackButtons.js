import React, {Component} from 'react';
import BackDayButton from '../components/BackDayButton';
import BackMonthButton from '../components/BackMonthButton';

const BackButtons = () => (
    <div className='backButtons'>
        <BackMonthButton />
        <BackDayButton />
    </div>
)

export default BackButtons;