import React from 'react';
import Swal from "sweetalert2"
import { withRouter } from "react-router-dom";

class Persoanldetails extends React.Component {
    state = {
        id : "",
        firstname: "",
        lastname: "",
        mnumber: "",
        email: "",
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })
    }
    onSubmit =(e) => {
        e.preventDefault()
        Swal.fire({
            title: "Success",
            text: "Profile Updated",
            icon: "success",
            confirmButtonText: "ok"
        })
        const user1 = this.state.firstname;
        localStorage.setItem(user1, JSON.stringify(this.state));
        this.props.history.push("/profilenav")
    }
    render() {
        const { firstname, lastname, mnumber, email } = this.state
        return (
            <>
                <form onSubmit={this.onSubmit} class="w-100 border p-3 mb-4 userform" style={{ fontWeight: "600" }}>
                    <h4 class="mb-3 mt-3">PERSONAL DETAILS</h4>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">FirstName</label>
                            <input type="email" class="form-control" id="inputEmail4" 
                            value={firstname}
                            onChange={this.onChange}
                            name="firstname"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">LastName</label>
                            <input type="text" class="form-control" id="inputPassword4" 
                            value={lastname}
                            onChange={this.onChange}
                            name="lastname" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <hr />
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Date Of Birth</label>
                            <input type="date" class="form-control" id="inputEmail4" 
                            value={email}
                            onChange={this.onChange}
                            name="email"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Gender</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="Mobile Number">Nationality</label>
                            <input type="text" class="form-control" id="tel" 
                            value={mnumber}
                            onChange={this.onChange}
                            name="nationality"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="Mobile Number">Country Code</label>
                            <input type="tel" class="form-control" id="tel" 
                            value={mnumber}
                            onChange={this.onChange}
                            name="mnumber"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Mobile Number</label>
                            <input type="tel" class="form-control" id="tel" 
                            value={mnumber}
                            onChange={this.onChange}
                            name="mnumber"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger w-100">
                        UPDATE
                    </button>
                </form>
            </>
        );
    }
}

export default withRouter(Persoanldetails);