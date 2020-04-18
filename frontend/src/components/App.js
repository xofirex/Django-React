import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import Users from './users/Users';
import Groups from './groups/Groups';
import {Provider} from 'react-redux';
import store from '../store'



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                    <Tab eventKey="users" title="Users">
                        <Users/>
                    </Tab>
                    <Tab eventKey="groups" title="Groups">
                        <Groups/>
                    </Tab>

                </Tabs>

            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));