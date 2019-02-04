import * as React from 'react';
import ChangeMail from './changemail';
import { any } from 'prop-types';



const axios = require('axios');
class UpdateUser extends React.Component<any, any> {
    constructor(props:any){
        super(props);

    }

    // handleChange(Event event){
    
    // }
    render() {
        
        return (
            <div className="content" style={{marginTop:"80px", marginLeft:"50px"}} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <form className="form-group">
                                <div className="text-danger"></div>
                                <input type="hidden" />
                                <div className="form-group">
                                    <label className="control-label"> Name</label>
                                     <input type ="text" className="form-control" />
                                 </div>
                                <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <input type ="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label  className="control-label">Password</label>
                                    <input type ="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Gender</label>
                                    <input  className="form-control" />
                                </div><div className="form-group">
                                    <input type="submit" value="Save" className="btn btn-default" />
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