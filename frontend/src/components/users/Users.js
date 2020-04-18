import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUsers, deleteUser} from "../../actions/users";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Forms from "./Form";

export class Users extends React.Component {
    state = {
        isForm: false,
    };
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired,
    };
    addUserForm = () => {
        this.setState({
            isForm: true,
        })

    };
    hideUserform = () => {
        this.setState({
            isForm: false,
        })

    };


    componentDidMount() {
        this.props.getUsers();

    }

    render() {

        const isForm = this.state.isForm;
        let form;
        if (isForm) {
            form = <Forms/>
        } else {
            form = ""
        }

        return (

            <Fragment>
                <h2>Users</h2>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Created</th>
                        <th>Group</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.user_name}</td>
                            <td>{user.created}</td>
                            <td>{user.group}</td>
                            <td><Button onClick={this.props.deleteUser.bind(this, user.id)}
                                        variant="danger">Delete</Button><Button variant="secondary">Edit</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Button onClick={this.addUserForm} variant="secondary">add User</Button>
                {form}
            </Fragment>
        )

    }

}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, {getUsers, deleteUser})(Users);
