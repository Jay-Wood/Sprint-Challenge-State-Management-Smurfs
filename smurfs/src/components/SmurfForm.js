import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import {postSmurfData} from "../actions";

const postSmurfData = (obj) => {
    axios.post("http://localhost:3333/smurfs", obj)
    .then(response => {
        console.log("post success", response)
        // dispatch(postSuccess(response.data))
    })
    .catch(err => {
        console.log("post err:", err)
    })
}

class SmurfForm extends React.Component {
    state = {
        name: "", 
        age: "",
        height: ""
    };

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name.trim() && this.state.height.trim() && this.state.age.trim()) {
            console.log("handle Submit this.state", this.state);
            postSmurfData(this.state)
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            name: "", 
            age: "",
            height: ""
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter Smurf Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Smurf Height"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Smurf Age"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleInputChange}
                        />  
                    </div>
                    <button type="submit"> Add New Smurf</button>
                </form>
            </div>
        )
    }
}

export default SmurfForm;

// const mapStateToProps = state => {
//     return{
//         isLoading: state.isLoading
//     }
// }

// export default connect(
//     mapStateToProps, 
//     {postSmurfData}
// )(SmurfForm)