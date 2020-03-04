import React, {Component} from 'react';
import BackButtons from '../components/BackButtons';
import ForwardButtons from '../components/ForwardButtons';

const ArrowButtons = (props) => (
    <div className='arrowButtons'>
        <ForwardButtons forwardDay={props.forwardDay} forwardMonth={props.forwardMonth}/>
        <BackButtons backDay={props.backDay} backMonth={props.backMonth}/>
    </div>
)

export default ArrowButtons;