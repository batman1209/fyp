import * as React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Component/sidebar/sidebar';

class ChangeName extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { 
            name1:'',
            name2:'' };
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
            <div className="row">
             <div className="content col-lg-2">
                 <Sidebar />
                </div>
                <div className="col-lg-10">
            <div className="content" style={{backgroundColor:"rgba(255, 255, 255, 0.96)"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6" style = {{paddingTop:"60px"}}>
                            <div id="ui">
                                <h1 style={{marginTop:"20px"}}>Change Name</h1>
                                <form className="form-group" action="settings.cshtml" method="post" onSubmit={this.handleSubmit}>
                                  <div className="row">
                                  <div className="col-lg-12">
                                    <label> Current UserName:</label>
                                    <div className="name">
                                        <input type="text" name="name1"  onChange={this.handleChange} className="form-control" id="uname" placeholder="Enter username " />
                                    </div>
                                    </div>

                                    <br />
                                    <div className="col-lg-12">
                                    <label> New UserName:</label>
                                    <div className="name">
                                        <input type="text" name="name2" onChange={this.handleChange} className="form-control" id="uname1" placeholder="Enter username " />
                                    </div>
                                    </div>
                                    <br />
                                    <div className="col-lg-12" style ={{marginTop:"20px"}}>
                                    <button type="submit" name="submit" onChange={this.handleChange} className="btn btn-primary btn-block btn-lg" > Done </button>
                                    </div>
                                    <br />
                                    <div className="col-lg-12">
                                    <Link className="nav-link" to="../settings">
                                    <button type="submit" className="btn btn-primary btn-block btn-lg"> Cancel</button>
                                    </Link>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ChangeName;