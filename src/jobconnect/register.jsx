import React from "react";
import axios from "axios"
import Swal from "sweetalert2"
import "./register.css";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    errors: "",

  
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })
  }
  formValidation = () => {
    const { username, password, email, confirmPassword } = this.state
    let isValid = true
    const errors = {}
    if (!username) {
      errors.usernameLength = "Username is Required"
      isValid = false
    } else if (username.trim().length < 6) {
      errors.usernameLength = " Username must be 6 or more characters"
      isValid = false
    }
    if (!email) {
      errors.email = "Email is Required"
      isValid = false
    } else if (!email.trim().includes("@")) {
      errors.email = "Email address is invalid "
      isValid = false
    }
    if (!password) {
      errors.passwordLength = "Password is Required"
      isValid = false
    } else if (password.trim().length < 6) {
      errors.passwordLength = "Password must be 6 or more characters"
      isValid = false
    }
    if (!confirmPassword) {
      errors.passwordLength2 = "Password is Required"
      isValid = false
    } else if (confirmPassword !== password) {
      errors.passwordLength2 = "Password do not match"
      isValid = false
    }
    this.setState({ errors })
    return isValid
  }
  onSubmit = (e) => {
    e.preventDefault()
    const isValid = this.formValidation()
    console.log("onSumbit event being fired")
    if (isValid == true) {
      const { username, password, email, confirmPassword, errors, loading } = this.state
      const post = { username, password, email, confirmPassword }
      axios.post("https://reqres.in/api/users", post).then((response) => {
        console.log("Server Response loading...", response.data)
        if (response.data !== 0) {
          Swal.fire({
            title: "Success",
            text: "Signup was successful",
            icon: "success",
            confirmButtonText: "ok"
          })
          this.props.history.push("/login")
        }
      })
    }
  }
  render() {
    const { username, password, email, confirmPassword, errors } = this.state
    return (
      <>
        <div
          className="registerpic mb-5"
          style={{ backgroundImage: `url(images/background9.jpg)` }}
        >
          <div className="mask rgba-gradient align-items-center">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div
                  className="textbg col-md-6 white-text text-center text-md-center wow fadeInLeft justify-content-center align-items-center"
                  data-wow-delay="0.3s"
                >
                  <h1
                    className="h1-responsive font-weight-bold mt-4"
                    style={{ color: "black" }}
                  >
                    CREATE ACCOUNT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="col-12 col-md-6 mx-auto">
            <div className="row justify-content-center">
              <form
                className="w-75  border p-3 mb-4"
                style={{ fontWeight: "600" }}
                onSubmit={this.onSubmit}
                style={{
                  fontWeight: 600,
                  boxShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="form-row">
                  <div className="form-group col-md-6 mb-0">
                    <label for="inputEmail4">Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      value={username}
                      onChange={this.onChange}
                      name="username" />
                    {errors.usernameLength && <p style={{ color: "red" }}>{errors.usernameLength}</p>}
                  </div>
                  <div className="form-group col-md-6 mb-0">
                    <label for="inputPassword4">Email <span className="text-danger">*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputPassword4"
                      value={email}
                      onChange={this.onChange}
                      name="email"
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputpassword">Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputpassword"
                    placeholder=""
                    value={password}
                    onChange={this.onChange}
                    name="password"
                  />
                  {errors.passwordLength && <p style={{color : "red"}}>{errors.passwordLength}</p>}
                </div>
                <div className="form-group">
                  <label for="inputpassword">Confirm Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputpassword"
                    placeholder=""
                    value={confirmPassword}
                    onChange={this.onChange}
                    name="confirmPassword"
                  />
                  {errors.passwordLength2 && <p style={{ color: "red" }}>{errors.passwordLength2}</p>}

                </div>
                <div className="form-group">
                  <label for="Mobile Number">Mobile Number <span className="text-danger">*</span></label>
                  <input type="tel" className="form-control" id="tel" />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-danger w-100"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
