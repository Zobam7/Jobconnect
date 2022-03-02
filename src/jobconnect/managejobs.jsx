import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Jobrows } from './dummydata';
import Resume from "./resume"
import { Link } from 'react-router-dom';
import "./managejobs.css"
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Managejobs = () => {
    const [data,setData] = useState(Jobrows)
    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Name', headerName: 'Name', width: 200, renderCell : (params) =>{
            return (
                <div>
                    {params.row.Name}
                </div>
            )
         } },
        { field: 'location', headerName: 'Location', width: 200 },
        {
            field: 'Email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'Resume',
            headerName: 'Resume',
            width: 160,
            renderCell : (params) => {
                return (
                    <div >
                        <Link to="/resume" className='mjlinks'>View</Link>
                    </div>
                )
            }
        },
        {
            field: 'Action',
            headerName: 'DECLINE',
            width: 90,
            renderCell : (params) => {
                return (
                    <>
                        <button type="button" class="btn" data-toggle="modal" data-target="#staticBackdrop" >
                            <CancelOutlinedIcon/>
                        </button>
                        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete Application For this Job</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Note : This Action is Irreversible
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" 
                                        onClick={()=>handleDelete(params.row.id)} 
                                        data-dismiss="modal" >Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                    // <div>
                    //     {/* <Link to={"/jobdetail"+params.row.id}>
                    //     <button>EDIT</button>
                    //     </Link> */}
                    //     <DeleteOutlineIcon className='mjlinks' onClick={()=>handleDelete(params.row.id)}/>
                    // </div>
                )
            }
        },
    ];

   
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
                                    MANAGE JOBS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='d-flex align-items-center'>
                <span className='text-muted mr-1'>Role :</span><h3 style={{fontWeight: "600"}}>FRONT-END DEVELOPER</h3>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    );
}

export default Managejobs;