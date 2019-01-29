import * as React from 'react';
import {Link} from 'react-router-dom';

class ChangeMail extends React.Component {
    render() {
        return (
            <div className="content" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6" style = {{paddingTop:"60px"}}>
                            <div id="ui">
                                <h1>SETTINGS</h1>
                                <form className="form-group" action="settings.cshtml" method="post" >
                                    <label> Current Email:</label>
                                    <div className="name">
                                        <input type="text" name="username" className="form-control" id="uname" placeholder="Enter username " />
                                    </div>
                                    <br />
                                    <label> New Email:</label>
                                    <div className="name">
                                        <input type="text" name="username" className="form-control" id="uname1" placeholder="Enter username " />
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

export default ChangeMail;
// import * as React from 'react';
// import { Link } from 'react-router-dom';

// class ChangeMail extends React.Component {
//     render() {
//         return (


//             <div className="content" >
//                 <div className="container-fluid">
//                     <div className="row" >
//                         <div className="col-lg-3"></div>
//                          <div className="col-lg-6">
//                             <div id="ui">
//                                 <h1>SETTINGS</h1>
//                                 <form className="form-group" action="settings.cshtml" method="post" >
//                                     <label> Current Email:</label>
//                                     <div className="mail">
//                                         <input type="email" name="email" className="form-control" id="Email" placeholder="Enter E-mail"> </input>
//                                     </div>
//                                     <br />

//                                     <label> New Email:</label>
//                                     <div className="mail">
//                                         <input type="email" name="email" className="form-control" id="Email1" placeholder="Enter E-mail"></input>
//                                     </div>
                                   
//                                     <br />
//                                     <input type="submit" name="submit" value="DONE" className="btn btn-primary btn-block btn-lg"></input>
//                                     <br />
//                                     <Link className="nav-link" to="../settings"></Link>
//                                     <button type="button" className="btn btn-primary btn-sm btn-block">   Cancel</button>

//                                 </form>
//                             </div>

//                         </div>

//                         <div className="col-lg-3"></div>
//                     </div>
//                 </div>

//             </div>

//         )
//     }
// }
// export default ChangeMail;