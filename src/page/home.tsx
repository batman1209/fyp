import * as React from 'react';
import { any } from 'prop-types';
import '../css/button.css';
import { Link } from 'react-router-dom';
import fakeAuth from '../Component/private-route/Auth';
import Sidebar from '../Component/sidebar/sidebar';

const axios = require('axios');
// import SweetAlert from 'sweetalert-react';
class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: []
        }
        // console.log(fakeAuth.isAuthenticated)
        // this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get('https://localhost:44310/api/Users', this.state)
            .then((response: any) => {
                var user = response.data
                this.setState({ user });
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    delete(id: Number) {
        var r = confirm("Are you sure tou wanna delete this record?");
        if (r == true) {
            axios.delete(`https://localhost:44310/api/Users/${id}`)
                .then((res: any) => {
                    alert('Deleted');
                    axios.get('https://localhost:44310/api/Users', this.state)
                        .then((response: any) => {
                            var user = response.data
                            this.setState({ user });

                        })
                        .catch((error: any) => {
                            console.log(error);
                        });
                })
        } else {

        }
    }



    render() {
        return (
            <div className="row"> 
                <div className="content col-md-2">
                    <Sidebar />
                </div>
                <div className="content col-md-10 " style={{ marginTop: "90px", paddingLeft:"20px" }}>
                    <div className="container-fluid">
                        <div className="" >
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                         <th>gender</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {this.state.user.map((obj: any, index: any) => <tr key={'mykey' + index}>
                                        <td>{obj.userId}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.password}</td>
                                        <td>{obj.gender}</td>
                                        <td>{obj.roleId}</td>
                                        <td>
                                            <Link className="button" to={`Adduser/` + obj.userId}>
                                                <button type="button" className="semi-transparent-button">Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button type="button" className="semi-transparent-button" onClick={() => this.delete(obj.userId)} style={{ marginLeft: "0px" }}>Delete</button>
                                        </td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;