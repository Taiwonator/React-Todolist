import React, {Component} from 'react';
import BackButtons from '../components/BackButtons';
import ForwardButtons from '../components/ForwardButtons';

const ArrowButtons = () => (
    <div className='arrowButtons'>
        <ForwardButtons />
        <BackButtons />
    </div>
)

export default ArrowButtons;