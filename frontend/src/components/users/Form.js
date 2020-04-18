import React, {Component, Fragment} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUser} from "../../actions/users";
import {getGroups} from "../../actions/groups";



export class Forms extends Component {
    state = {
        user_name: "",
        group: "5",
    };

    static propTypes = {
        addUser: PropTypes.func.isRequired,
        groups: PropTypes.array.isRequired,
        getGroups: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getGroups();
    };

    onChange = e => this.setState({
            [e.target.name]:
            e.target.value

        }
    );
    onSelect = e => {
        this.setState({
                [e.target.name]:
                e.target.value,
            }
        );
    };

    onSubmit = e => {
        e.preventDefault();
        const {user_name, group} = this.state;
        const user = {user_name, group};
        this.props.addUser(user);

    };

    render() {
        const {user_name, group} = this.state;
        return (
            <Fragment>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter USERNAME"
                                      name="user_name"
                                      onChange={this.onChange}
                                      value={user_name}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Groups</Form.Label>
                        <Form.Control as="select"
                                      custom
                                      name="group"
                                      onChange={this.onSelect}
                                      value={this.state.group}
                        >
                            {this.props.groups.map(group => (<option
                                value={group.id}
                                key={group.id}
                            >{group.group_name}</option>))}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    groups: state.groups.groups
});


export default connect(mapStateToProps, {addUser, getGroups})(Forms)
