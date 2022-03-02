import React from 'react';
import "./account.css";
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import Dashboard from './dashboard';
import Persoanldetails from './personaldetails';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Userdetails from './userdetails';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';



class Profile extends React.Component {
    render() {
        return (
            <>
                <div
                    className="registerpic mb-3"
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
                                        PROFILE
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-12 " >
                            <div className="userpic card text-white p-3">
                                <div>
                                   <img src="images/profilepic2.png" className="card-img rounded-2 mb-3" alt="..." 
                                   /> 
                                   <input type="file" name="file" id="file" class="inputfile" />
                                        <label for="file" className='w-25' style={{backgroundColor: "transparent", color: "#df4759", position: "absolute", bottom: "45px" , marginLeft: "-10px", outline: "none", float: "right", borderRadius: "50%"}}><PhotoCameraIcon /></label>
                                </div>
                                
                                <h5 className="text-dark">{sessionStorage.getItem("username")}</h5>
                            </div>
                            <br />
                            <div >
                                <div className='proflielistul list-group'>
                                    <NavLink className='active list-group-item list-group-item-action p-2 profilelist nav-link ' to="/">
                                        <span><AccessibilityIcon className="mr-2" /></span> USER DETAILS
                                    </NavLink>
                                    <NavLink className='list-group-item list-group-item-action p-2 profilelist nav-link ' to="/dashboard">
                                        <span><GridViewIcon className="mr-2" /></span> DASHBOARD
                                    </NavLink>

                                    <NavLink className='list-group-item list-group-item-action p-2 profilelist nav-link ' to="/persoanldetails">
                                        <span><ManageAccountsOutlinedIcon className="mr-2" /></span> EDIT PROFILE
                                    </NavLink>
                                    {/* <NavLink className='list-group-item list-group-item-action p-2 profilelist' to="/delete">
                                        <span><DeleteOutlineIcon className = "mr-2"/></span> DELETE ACCOUNT
                                    </NavLink> */}
                                    <button type="button" className="list-group-item list-group-item-action p-2 profilelist" data-toggle="modal" data-target="#staticBackdrop" >
                                        <span><DeleteOutlineIcon className="mr-2" /></span> DELETE ACCOUNT
                                    </button>
                                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">DELETION OF ACCOUNT</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Note : All Informations Will Be Lost Including Jobs Applied For & Jobs Posted
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-danger"

                                                        data-dismiss="modal"
                                                        >Understood</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Userdetails />
                            <Switch>
                                <Route exact path="/dashboard" component={() => <Dashboard props={this.state} />} />
                                <Route exact path="/persoanldetails" component={() => <Persoanldetails props={this.state} />} />
                                
                            </Switch>
                        </div>
                    </div>
                </div>
                <br />
            </>
        );
    }
}

export default withRouter(Profile);