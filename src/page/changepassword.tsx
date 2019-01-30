import * as React from 'react';
import {Link} from 'react-router-dom';

class ChangePass extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { 
            pass:'',
            pass1:'',
            pass2:''
         };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: any) => {
        // this.setState({field: event.target.value});
        this.setState({ [event.target.name]: event.target.value })
        console.log({[event.target.name]:event.target.value});
    }

    handleSubmit(event:any) {
        alert('Your changes are saved');
        event.preventDefault();
      }
    render() {
        return (
            <div className="content" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6" style = {{paddingTop:"60px"}}>
                            <div id="ui">
                                <h1 style={{marginTop:"20px"}}>Change Password</h1>
                                <form className="form-group" action="settings.cshtml" method="post" onSubmit={this.handleSubmit}>
                                    <label> Current Password:</label>
                                    <div className="pass">
					                 <input type="password"  name="pass" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" /> 
                                    </div>
                                    <br />
                                    <label> New Password:</label>
                                    <div className="pass">
					                 <input type="password"  name="pass1" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" /> 
                                    </div>
                                    <br />
                                    <label> Confirm Password:</label>
                                    <div className="pass">
					                 <input type="password"  name="pass2" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" /> 
                                    </div>
                                    
                                    <br />
                                    <input type="submit" name="submit" value="DONE" className="btn btn-primary btn-block btn-lg" />
                                    <br />
                                    <div className="col-lg-12">
                                    <Link className="nav-link" to="../settings">
                                    
                                    <button type="button" className="btn btn-primary btn-sm btn-block">  Cancel</button>
                                    </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        )
    }
}
export default ChangePass;