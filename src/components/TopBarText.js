import React, {Component} from 'react';

class TopBarText extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='topBarText'>
                <h2>Thursday, <span>27th</span></h2>
                <h3>February <span>2020</span></h3>
            </div>
        )
    }
}

export default TopBarText;