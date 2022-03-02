import React, { useState } from "react";
import "./browsejobs.css";
import "./Main.css"
import { Jobb } from "./dummydata"
import { Link } from "react-router-dom";

const Alljobs = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div
                className="registerpic"
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
                                    ALL AVAILABLE JOBS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alljobssearch container mt-3 mb-3">
                <div className="row">
                    <form action="">
                        <div className="form-row">
                            <div className=" form-group col-md-4 mb-0 d-flex justify-content-center align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Job Title or Company Name"

                                />
                            </div>
                            <div className=" form-group col-md-3 mb-0 d-flex justify-content-center align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder="Location"
                                />
                            </div>
                            <div className=" form-group col-md-3 mb-0 d-flex justify-content-center align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div className="allbtn form-group col-md-2 mb-0 d-flex justify-content-center align-items-center">
                                <button type="submit" class="btn btn-outline-danger w-100" onSubmit={(event) => {
                                    setSearchTerm(event.target.value)
                                }}>
                                    SEARCH
                                </button>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
            <div className="container-fluid mb-4">
                <div className="grid-container">
                    {Jobb.map((Jobb => {
                        return <div className="Jobcards bg-white " key={Jobb.id}>
                            <div className="d-flex align-content-start">
                            <span className="mb-3 p-3 tags">{Jobb.Category}</span>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <img
                                    src="images/profilepic2.png"
                                    className="card-img jobcardsimg"
                                    alt="..."
                                />
                                <h5 className="card-title">{Jobb.CompanyName}</h5>
                                <p className="card-text m-0">{Jobb.Jobtitle}</p>
                                <p className="card-text text-muted">{Jobb.location}</p>
                                <p className="card-text">
                                    <Link to={"/jobdetail" + Jobb.id} className="btn btn-outline-danger">Apply Now</Link>
                                </p>
                            </div>
                        </div>
                    }))}
                </div>
            </div>
        </>
    );
}

export default Alljobs;
