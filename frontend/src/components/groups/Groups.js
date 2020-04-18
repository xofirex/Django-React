import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getGroups, deleteGroup} from "../../actions/groups";
import {Button, Table} from "react-bootstrap";
import Forms from "../groups/Form";

export class Groups extends Component{
    state = {
        isForm: false,
    };
    static propTypes = {
        groups: PropTypes.array.isRequired,
        getGroups: PropTypes.func.isRequired,
        deleteGroup: PropTypes.func.isRequired,
    };

    addGroupForm = () => {
        this.setState({
            isForm: true,
        })

    };
    hideGroupform = () => {
        this.setState({
            isForm: false,
        })

    };
    componentDidMount() {
        this.props.getGroups();
    }
    render() {
        const isForm = this.state.isForm;
        let form;
        if (isForm){
            form = <Forms/>
        }else{
            form = ""
        }
        return(
            <Fragment>
                <h2>Groups</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Groupname</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.groups.map(group => (
                        <tr key={group.id}>
                            <td>{group.id}</td>
                            <td>{group.group_name}</td>
                            <td>{group.description}</td>
                            <td><Button onClick={this.props.deleteGroup.bind(this, group.id)}  variant="danger">Delete</Button><Button variant="secondary">Edit</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Button onClick={this.addGroupForm} variant="secondary">add Group</Button>
                {form}
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    groups: state.groups.groups
});

export default connect(mapStateToProps, {getGroups, deleteGroup})(Groups);