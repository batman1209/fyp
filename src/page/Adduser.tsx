import * as React from 'react';
//import { ReactComponent } from '*.svg';
import '../css/form.css';
import { ChangeEvent } from 'react';

class Adduser extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { 
            name: '',
            email:'',
            pass: '',
            pass1:'',
            gender:'' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: any) => {
        // this.setState({field: event.target.value});
        this.setState({ [event.target.name]: event.target.value })
        console.log({[event.target.name]:event.target.value});
    }

    handleSubmit(event:any) {
       
        alert('Account has been created');
        event.preventDefault();
      }

    

    render() {
        return (
            <div className="content" >
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6" style={{ paddingTop: "60px" }}>
                            <div id="ui">
                                <h1 style={{ marginTop: "15px" }}>ADD ACCOUNT</h1>
                                <form className="form-group" method="post" onSubmit={this.handleSubmit}>
                                    <label> Name:</label>
                                    <div className="name">
                                        <input type="text" onChange={this.handleChange} name="name" className="form-control" placeholder="Enter username " required />
                                    </div>
                                    <br />
                                    <label> Email:</label>
                                    <div className="mail">
                                        <input type="email" name="email" onChange={this.handleChange} className="form-control"  placeholder="Enter E-mail" required/>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label> Password:</label>
                                            <div className="pass">
                                                <input type="password" name="pass" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label> Re-type Password:</label>
                                            <div className="pass1">
                                                <input type="password" name="pass1" onChange={this.handleChange} className="form-control" id="pwd1" placeholder="Re-type password" required/>
                                            </div>
                                        </div>
                                        <br />

                                        <div className="col-lg-12">
                                            <select className="form-control" name="gender" onChange={this.handleChange} id="sel" style={{ marginTop: "35px" }} required>
                                                <option>Choose Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <br />
                                        <div className="col-lg-12">
                                            <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "30px" }} />
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


