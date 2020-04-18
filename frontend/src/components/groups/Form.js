import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addGroup} from "../../actions/groups";

export class Forms extends Component {
    state = {
        group_name: '',
        description: '',

    };

    static propTypes = {
        addGroup: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]:
        e.target.value
            }
    );

    onSubmit = e => {
        e.preventDefault();
        const {group_name, description } = this.state;
        const group = {group_name , description};
        this.props.addGroup(group);
    }

    render() {
        const { group_name, description } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Groupname</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter Groupname"
                                  name = "group_name"
                                  onChange={this.onChange}
                                  value={group_name}

                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Group description</Form.Label>
                    <Form.Control type="text"
                                  placeholder="description"
                                  name = "description"
                                  onChange={this.onChange}
                                  value={description}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default connect(null, { addGroup })(Forms);