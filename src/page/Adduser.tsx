import * as React from 'react';
//import { ReactComponent } from '*.svg';
import '../css/adduser.css';

class Adduser extends React.Component {
    render() {
        return (
            <div className="content" >
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6" style = {{paddingTop:"60px"}}>
                            <div id="ui">
                                <h1 style={{marginTop:"15px"}}>ADD ACCOUNT</h1>
                                <form className="form-group" action="#" method="post" >
                                    <label> Name:</label>
                                    <div className="name">
                                        <input type="text" name="username" className="form-control" id="uname" placeholder="Enter username " />
                                    </div>
                                    <br />
                                    <label> Email:</label>
                                    <div className="mail">
                                        <input type="email" name="email" className="form-control" id="mal" placeholder="Enter E-mail" />
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label> Password:</label>
                                            <div className="pass">
                                                <input type="password" name="pass" className="form-control" id="pwd" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label> Re-type Password:</label>
                                            <div className="pass1">
                                                <input type="password" name="pass1" className="form-control" id="pwd1" placeholder="Re-type password" />
                                            </div>
                                        </div>
                                        <br />
                                       
                                        <div  className="col-lg-12">
                                        <select className="form-control" id="sel" style = {{marginTop:"35px"}}>
                                            <option>Choose Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        </div>
                                        <br />
                                        <div  className="col-lg-12">
                                        <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block btn-lg" style = {{marginTop:"30px"}}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Adduser;


