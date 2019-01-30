import * as React from 'react';
// import logo from '../img/PUCIT-Logo';

const logo = require('../img/PUCIT-Logo.png');
class Login extends React.Component {
    render() {
        return (
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12  user-img">
                            <img src={logo} />
                            <form className="col-12" action="#" method="post">

                                <div className="form-group">
                                    <input type="text" className="form-control" id="uname" placeholder="Enter Username" />

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter Password" />

                                </div>



                                <button type="submit" className="btn"><i className="fas fa-sign-in-alt"></i>Login</button>
                            </form>
                            <div className="col-12 forgot">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;