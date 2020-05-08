import React, { Component } from 'react';
import axios from 'axios';
 
export default class DeleteTodo extends Component {
 
    componentDidMount() {
        axios.delete('http://localhost:4000/todos/delete'+this.props.match.params.id)
            .then(res => console.log(res.data));
        alert("Record successfully Deleted..")
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Record delete successfully</p>
            </div>
        )
    }
}