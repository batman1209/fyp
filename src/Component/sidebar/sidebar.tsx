import * as React from 'react';
import './sidebar.css';
//import logo from "./img/login1.jpg";


const logo = require('../../img/login1.jpg');
class Sidebar extends React.Component {


    render() {
        return (
            <div className="wrapper" >
                <div className="sidebar">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            {/* <a href="@Url.Action("Admin","Home")"> */}

                            <img className="rounded-circle" src={logo} alt='...' style={{ width: "150px", height: "130px" }} />
                             <b className="text-center"> ADMIN</b>
                        </div>
                        <ul className="nav">
                            <li className="w100">
                                <a className="nav-link" href="">
                                    <i className="pe-7s-add-user"> </i>
                                    <p >ADD ACCOUNT</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="">
                                    <i className="pe-7s-pen"></i>
                                    <p>Update User</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    <i className="pe-7s-look"></i>
                                    <p>View User</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="">
                                    <i className="pe-7s-delete-user"></i>
                                    <p>delete user</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    <i className="pe-7s-user"></i>
                                    <p>teamlead</p>
                                </a>
                            </li>

                            <li>
                                <a className="nav-link" href="">
                                    <i className="pe-7s-config"></i>
                                    <p>settings</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link " href="">
                                    <i className="pe-7s-power"></i>
                                    <p>logout</p>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-default navbar-fixed">
                        <div className="container-fluid">
                            <div className="navbar-header" >
                                {/* <button type="button" className="navbar-toggle" data-toggle="collapse">
                                     <span className="sr-only">Toggle navigation</span> 
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button> */}
                                <a className="navbar-brand" href="#"><b style ={{color:"#5f5d68 "}}>PLATFORM FOR APTITUDE TEST</b></a>
                            </div>
                            <div className="collapse navbar-collapse">


                            </div>
                        </div>
                    </nav>
                    </div>
                </div>

                )
            }
        }
        export default Sidebar;
