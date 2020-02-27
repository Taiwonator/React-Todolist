import React, {Component} from 'react';
import '../styles/index.scss'
import PhoneBody from '../components/PhoneBody';

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <PhoneBody/>
        )
    }
}

export default App;