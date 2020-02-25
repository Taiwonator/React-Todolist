import React, {Component} from 'react';
import Todo from '../components/Todo';

const x = 2;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Default Title',
        };
        console.log(props);
    }

    changeTitle = (title) => {
        this.setState ({
            title
        });
        console.log("Working");
    }

    handleChange = (e) => {
        const title = e.target.value;
        this.changeTitle(title);
    }
            

    render() {
            return (
            <div>
                <h1>{this.state.title}</h1>
                <input onChange={this.handleChange} name='input_box' type='input' placeholder='Enter a title'/>
                <Todo></Todo>
            </div>
        )
    }
}

export default App;