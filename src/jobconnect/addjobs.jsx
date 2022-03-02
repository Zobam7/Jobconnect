import React from 'react';
import Swal from "sweetalert2"
import { withRouter } from "react-router-dom";

class Addjobs extends React.Component {
    state = {
        id : "",
        cname: "",
        location: "",
        jtitle: "",
        srange: "",
        pnumber: "",
        category: "",
        years: "",
        email: "",
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })
    }
    onSubmit =(e) => {
        e.preventDefault()
        Swal.fire({
            title: "Success",
            text: "Job Posted",
            icon: "success",
            confirmButtonText: "ok"
        })
        const job1 = this.state.jtitle;
        localStorage.setItem(job1, JSON.stringify(this.state));
        this.props.history.push("/")
    }
    render() {
        const { id,cname, location, jtitle, srange, pnumber, category, years, email } = this.state
        const jobsposted = this.state
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
                                        ADD JOBS
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <form class="w-100 border p-3 mb-4 userform" onSubmit={this.onSubmit} style={{ fontWeight: "600" }}>
                                <h4 class="mb-3 mt-3">COMPANY INFORMATION</h4>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Company Name</label>
                                        <input type="text" class="form-control" id="inputEmail4" value={cname}
                                            onChange={this.onChange}
                                            name="cname" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Job Title</label>
                                        <input type="text" class="form-control" id="inputPassword4"
                                            value={jtitle}
                                            onChange={this.onChange}
                                            name="jtitle" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Location</label>
                                        <input type="text" class="form-control" id="inputEmail4"
                                            value={location}
                                            onChange={this.onChange}
                                            name="location" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Company Email</label>
                                        <input type="email" class="form-control" id="inputPassword4"
                                            value={email}
                                            onChange={this.onChange}
                                            name="email" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Company Website</label>
                                        <input type="text" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Job Type</label>
                                        <input type="text" className='form-control' value={category} onChange={this.onChange} name='category' placeholder='Full Time/Part Time'/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="Mobile Number">Comapny Mobile Number</label>
                                        <input type="tel" class="form-control" id="tel" 
                                        value={pnumber}
                                        onChange={this.onChange}
                                        name="pnumber"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Experience</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Company Logo</label>
                                        <input type="file" className='form-control' value={years} onChange={this.onChange} name='years' placeholder='Xyrs Needed'/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Salary Range</label>
                                       <input type="text" className='form-control' value={srange} onChange={this.onChange} name='srange' />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <h5>Qualifications</h5>
                                        <textarea name="Qualifications" id="" cols="55" rows="5" style={{resize: "none"}}></textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                    <h5>Skills</h5>
                                        <textarea name="skills" id="" cols="55" rows="5" style={{resize: "none"}}></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-danger w-100">
                                    POST
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(Addjobs);
