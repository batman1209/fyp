import * as React from 'react';
import ChangeMail from './changemail';
import { any } from 'prop-types';



const axios = require('axios');
class UpdateUser extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={
            name: '',
            email:'',
            password: ''
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event: any){
        this.setState({ [event.target.name]:event.target.value })
    
    }

    handleSubmit(event:any) {
        event.preventDefault();
        axios.put('https://localhost:44310/api/Admin', this.state)
          .then(function (response:any) {
            console.log(response);
          })
          .catch(function (error:any) {
            console.log(error);
          });
       console.log(this.state);
      }
    render() {
        
        return (
            <div className="content" style={{marginTop:"80px", marginLeft:"50px"}} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <form className="form-group" onSubmit={this.handleSubmit}>
                                <div className="text-danger"></div>
                                <input type="hidden" />
                                <div className="form-group">
                                    <label className="control-label"> Name</label>
                                     <input type ="text" className="form-control" name="name" onChange={this.handleChange}/>
                                 </div>
                                <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <input type ="email" className="form-control" name="email" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label  className="control-label">Password</label>
                                    <input type ="password" className="form-control" name="password" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Gender</label>
                                    <input  className="form-control" />
                                </div><div className="form-group">
                                    <input type="submit" value="Save" className="btn btn-default" name="gender" onChange={this.handleChange}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UpdateUser;