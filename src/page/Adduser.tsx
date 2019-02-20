import * as React from 'react';
//import { ReactComponent } from '*.svg';
import '../css/form.css';
import Sidebar from '../Component/sidebar/sidebar';

const axios = require('axios');

class Adduser extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            teacherId: 0,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            question: [],
            nameError: '',
            passError: '',
            emailError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }
    componentWillMount() {
        if (this.props.match.params.id != undefined) {
            axios.get('https://localhost:44310/api/Users/' + this.props.match.params.id)
                .then((response: any) => {
                    this.setState({
                        teacherId: response.data.teacherId,
                        name: response.data.name,
                        email: response.data.email,
                        password: response.data.password,
                        confirmPassword: response.data.confirmPassword,
                        gender: response.data.gender,
                        role: response.data.role,
                        question: []
                    });
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.validateName())
    }

    handlePasswordChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.validatePassword())

    }



    validateName() {
        const { name } = this.state;
        this.setState(
            { nameError: name.length > 3 ? null : 'Name must contain atleast 3 characters' }
            //    passError: password.length > 3 || password  ? null : 'Password must contain atleast 6 characters'}
        )
    }

    validatePassword() {
        const { password } = this.state;
        this.setState({
            passError: password.length > 6 ? null : 'Password must contain atleast 6 characters'
        }
        )
    }

    validateEmail(email: any) {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
        const result = pattern.test(email);
        if (result === true) {
            this.setState({
                emailError: false,
                email: email
            })
        } else {
            this.setState({
                emailError: true
            })
        }
        // email = $('email');
        // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // if (filter.test(email.value)) {
        //   // Yay! valid
        //  return '';
        // }
        // else
        //   return 'invalid email';
    }
    handleSubmit(event: any) {
        event.preventDefault();
        if (this.props.match.params.id != undefined) {
            const { password, confirmPassword } = this.state
            if (password !== confirmPassword) {
                alert('passwords do not match')
            }
            else {
                axios.put(`https://localhost:44310/api/Users/${this.props.match.params.id}`, this.state)
                    .then((response: any) => {
                        this.props.history.push('/');
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });
            }
        } else {
            const { password, confirmPassword, name } = this.state
            if (password !== confirmPassword) {
                alert('passwords do not match')

            }
            else {
                axios.post('https://localhost:44310/api/Users/', this.state)
                    .then((response: any) => {
                        console.log(response);
                        alert('User has been added successfully')
                    })
                    .catch(function (error: any) {
                        console.log(error);
                        alert('Sorry! Your request can not be processed at the moment')
                    });
            }


        }

    }

    render() {
        return (
            <div className="row">
                <div className=" col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="content" >
                        <div className="container-fluid">
                            <div className="row" >
                                <div className="col-lg-3"> </div>
                                <div className="col-lg-6" style={{ paddingTop: "30px" }}>
                                    <div id="ui">
                                        {this.props.match.params.id != undefined ? <h1 style={{ marginTop: "15px" }}>EDIT ACCOUNT</h1> : <h1 style={{ marginTop: "15px" }}>ADD ACCOUNT</h1>}

                                        <form className="form-group" method="post" onSubmit={this.handleSubmit} autoComplete="off">
                                            <label> Name:</label>
                                            <div className="name">
                                                <input type="text"
                                                    onChange={this.handleChange}
                                                    name="name"
                                                    value={this.state.name}
                                                    className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                                                    placeholder="Enter username " required
                                                    onBlur={this.validateName.bind(this)} />
                                                <div className="invalid-feedback">Name must be longer than 3 characters</div>
                                            </div>
                                            <br />
                                            <label> Email:</label>
                                            <div className="mail">
                                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter E-mail" required />
                                                <div className="invalid-feedback">Email is invalid</div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label> Password:</label>
                                                    <div className="pass">
                                                        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} className={`form-control ${this.state.passError ? 'is-invalid' : ''}`} id="pwd" placeholder="Enter password" required onBlur={this.validatePassword.bind(this)} />
                                                        <div className="invalid-feedback">Password must be longer than 6 characters</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label> Re-type Password:</label>
                                                    <div className="pass1">
                                                        <input type="password" name="confirmPassword" value={this.state.pass1} onChange={this.handleChange} className="form-control" id="pwd1" placeholder="Re-type password" required />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} id="sel" style={{ marginTop: "35px" }} required>
                                                        <option>Choose Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                                <br />
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="role" value={this.state.role} onChange={this.handleChange} id="sel" style={{ marginTop: "35px" }} required>
                                                        <option>Role</option>
                                                        <option>Admin</option>
                                                        <option>Teacher</option>
                                                        <option>TeamLead</option>
                                                    </select>
                                                </div>
                                                <br />
                                                <div className="col-lg-12">
                                                    {/* <Link className="nav-link" to="/"> */}
                                                    <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "20px" }} />
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Adduser;


