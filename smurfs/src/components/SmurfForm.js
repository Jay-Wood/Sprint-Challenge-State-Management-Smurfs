import React, { useState } from "react";


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
            console.log(this.state);
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

    /*const [newSmurfName, setNewSmurfName] = useState("")
    const [newSmurfHeight, setNewSmurfHeight] = useState("")
    const [newSmurfAge, setNewSmurfAge] = useState("")
    const [newSmurf, setNewSmurf] = useState(
        {
            name: "",
            age: "",
            height: null
        }
    )
    const handleInputChange = e => {
        setNewSmurf({
            [e.target.name]: e.target.value
        });
    }
    const handleNameChanges = e => {
        setNewSmurfName(e.target.value) 
    }
    const hangleHeightChanges = e => {
        setNewSmurfHeight(e.target.value)
    }
    const hangleAgeChanges = e => {
        setNewSmurfAge(e.target.value)
    } */

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