import React from "react";
import axios from "axios"
import Swal from "sweetalert2"
import { withRouter } from "react-router-dom";
import "./login.css"

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    email : "",
    errors: {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})

  }
  formvalid = () => {
    const { username, password,email } = this.state
    let isValid = true
    const errors = {}
    if (!username) {
      errors.usernameLength = "Username is Required"
      isValid = false
    } else if (username.trim().length < 6) {
      errors.usernameLength = "Username must be 6 or more characters"
      isValid = false
    }
    if (!password) {
      errors.passwordLength = "Password is Required"
      isValid = false
    } else if (password.trim().length < 6) {
      errors.passwordLength = "Password must be 6 or more characters"
      isValid = false
    }
    if (!email) {
      errors.email = "Email is Required"
      isValid = false
    }else if(!email.trim().includes("@")) {
      errors.email = "Email address is invalid "
      isValid = false
    }
    this.setState({ errors })
    return isValid
  }


  onSubmit = (e) => {
    e.preventDefault()
    const isValid = this.formvalid()
    if(isValid==true){

      const { username, password, email,errors } = this.state
      const post = { email, password }
      axios.post("https://reqres.in/api/login", post).then((response) => {
        console.log("Server Response loading...", response.data)
        if (response.data !== 0) {
          Swal.fire({
            title: "Success",
            text: "Signin was successful",
            icon: "success",
            confirmButtonText: "ok"
          })
          const token = response.data.token
          sessionStorage.setItem("token", token)
          sessionStorage.setItem("username", username)
          sessionStorage.setItem("email", email)
          this.props.history.push("/")
        }
      })
    }
    
  }
  render() {
    const { username, password, errors,email } = this.state
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
                    LOGIN
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <form
                onSubmit={this.onSubmit}
                className="w-75 border p-3 mb-4 justify-content-center mx-auto "
                style={{
                  fontWeight: 600,
                  boxShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="form-group forms">
                  <label htmlFor="">Username <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    
                  />
                  {errors.usernameLength && <p style={{color : "red"}}>{errors.usernameLength}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Email <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Password <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    type="password"
                    placeholder=""
                    value={password}
                    name="password"
                    onChange={this.onChange}
                  />
                  {errors.passwordLength && <p style={{color : "red"}}>{errors.passwordLength}</p>}
                </div>
                <button className="btn btn-outline-danger w-100">SIGN-IN</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
