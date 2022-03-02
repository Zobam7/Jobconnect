import React from 'react';

class Createresume extends React.Component {
    render() {
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
                                        MAKE YOUR RESUME
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <form class="w-100 border p-3 mb-4 userform" style={{ fontWeight: "600" }}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">First Name</label>
                                        <input type="text" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Last Name</label>
                                        <input type="text" class="form-control" id="inputPassword4" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Location</label>
                                        <input type="text" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Email</label>
                                        <input type="email" class="form-control" id="inputPassword4" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Job Title</label>
                                        <input type="text" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Job Type</label>
                                       <input type="text" className='form-control' placeholder='Full Time/Part Time' />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="Mobile Number">Mobile Number</label>
                                        <input type="tel" class="form-control" id="tel" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Gender</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Experince</label>
                                        <input type="text" className='form-control' placeholder='Xyrs Needed' />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Salary Range</label>
                                        <input type="text" className='form-control'/>
                                        
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Qualifications</label>
                                        <input type="text" class="form-control" id="inputEmail4" 
                                        placeholder='Separate with commas'/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Skills </label><input type="text" class="form-control" id="inputEmail4" 
                                        placeholder='Separate with commas'/>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-danger w-100">
                                    CREATE RESUME WITH JOBCONNECT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Createresume;