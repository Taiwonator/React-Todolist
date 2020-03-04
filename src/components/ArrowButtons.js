import React, {Component} from 'react';
import BackButtons from '../components/BackButtons';
import ForwardButtons from '../components/ForwardButtons';

const ArrowButtons = (props) => (
    <div className={`arrowButtons ${props.classStates.TODAY ? '' : 'larger'}`}>
        <ForwardButtons forwardDay={props.forwardDay} forwardMonth={props.forwardMonth}/>
        <div onClick={props.goToToday} className={`todayButton ${props.classStates.TODAY ? '' : 'todayButtonActive'}`}>
            <i className="fas fa-calendar-week" aria-hidden="true"></i>
        </div>
        <BackButtons backDay={props.backDay} backMonth={props.backMonth}/>
    </div>
)

export default ArrowButtons;