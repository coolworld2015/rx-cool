import React, {Component} from 'react';
import AppContainer from './appContainer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: true
        };

        window.appConfig = {
            access_token: '',
            url: 'http://coolworld.herokuapp.com/',
            audit: {
                refresh: true,
                items: [],
                item: {}
            } 
        };
    }

    onLogin() {
        console.log('onLogin');
        this.setState({isLoggedIn: true});
    }

    onLogOut() {
        console.log('onLogOut');
        this.setState({isLoggedIn: false});
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <AppContainer />
            )
        } else {
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            )
        }
    }
}

export default App;