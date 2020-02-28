import React, {Component} from 'react';
import TopBarText from '../components/TopBarText';
import Widgets from '../components/Widgets';

const TopBar = () => (
    <div className='topBar'>
        <TopBarText />
        <Widgets />
    </div> 
)

export default TopBar;