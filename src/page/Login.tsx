import * as React from 'react';
import Auth from '../Component/private-route/Auth';
import '../css/login.css'
import { url } from 'inspector';


const axios = require('axios');
const logo = require('../img/PUCIT-Logo.png');
class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            nameError: '',
            passError: ''
        };
        this.handleChange = this.handleChange.bind(this);

        console.log(sessionStorage.getItem('token'));
        if (sessionStorage.getItem('token') != null) {
            Auth.isAuthenticated = true;
            this.props.history.push('/');
        }
    }
    // componentWillMount() {
    //     if (sessionStorage.getItem('token') != undefined) {
    //         this.props.history.push('/');
    //     }
    // }
    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validateName() {
        const { userName } = this.state;
        this.setState(
            { nameError: userName.length > 3 ? null : 'Name must contain atleast 3 characters' }
            //    passError: password.length > 3 || password  ? null : 'Password must contain atleast 6 characters'}
        )
    }

    validatePassword() {
        const { password } = this.state;
        this.setState({
            passError: password.length > 3 ? null : 'Password must contain atleast 3 characters'
        }
        )
    }

    login() {
        axios.post('https://localhost:44310/api/users/login', this.state)
            .then((response: any) => {
                console.log(response)
                var token = response.data;
                if (token) {
                    Auth.isAuthenticated = true;
                    sessionStorage.setItem('token', token)
                    this.props.history.push('/');
                }
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url(' + require('../img/login1.jpg') + ')  ',
                backgroundSize: 'cover',
                overflow: 'hidden', backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "788px"
            }}>

                <div className="modal-dialog text-center">
                    <div className="col-sm-8 main-section">
                        <div className="modal-content">
                            <div className="col-12  user-img">
                                <img src={logo} style={{ marginBottom: "10px" }} />
                                <form className="col-12">

                                    <div className="form-group">
                                        <input type="text" className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`} name="userName" value={this.state.userName} onChange={this.handleChange} onBlur={this.validateName.bind(this)} placeholder="Enter Username" />
                                        <div className="invalid-feedback">Name must be longer than 3 characters</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className={`form-control ${this.state.passError ? 'is-invalid' : ''}`} name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" onBlur={this.validatePassword.bind(this)} />
                                        <div className="invalid-feedback">Password must be longer than 3 characters</div>
                                    </div>
                                    <button type="button" className="btn" onClick={this.login.bind(this)}><i className="fas fa-sign-in-alt"></i>Login</button>
                                </form>
                                <div className="col-12 forgot">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
