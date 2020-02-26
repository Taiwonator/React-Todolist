import React, {Component} from 'react';
import TodoList from '../components/TodoList';

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
            <TodoList></TodoList>
        )
    }
}

export default App;