import * as React from 'react';
import { any } from 'prop-types';
import '../css/button.css';
import { Link } from 'react-router-dom';
import fakeAuth from '../Component/private-route/fake-auth';

const axios = require('axios');
// import SweetAlert from 'sweetalert-react';
class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            teacher: []
        }
        console.log(fakeAuth.isAuthenticated)
        // this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get('https://localhost:44310/api/Admin', this.state)
            .then((response: any) => {
                var teacher = response.data
                this.setState({ teacher });
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    delete(id: Number) {
        var r = confirm("Are you sure tou wanna delete this record?");
        if (r == true) {
            axios.delete(`https://localhost:44310/api/Admin/${id}`)
                .then((res: any) => {
                    alert('Deleted');
                    axios.get('https://localhost:44310/api/Admin', this.state)
                        .then((response: any) => {
                            var teacher = response.data
                            this.setState({ teacher });
                            
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
             <div className="content" style={{ paddingTop: "70px", paddingLeft: "40px" }}>
                <div className="container-fluid">
                    <div className="row" >
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>


                                {this.state.teacher.map((obj: any,index:any) => <tr key={'mykey' + index}>
                                    <td>{obj.teacherId}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td>{obj.gender}</td>
                                    <td>
                                        <Link className="button" to={`updateuser/` + obj.teacherId}>
                                            <button type="button" className="semi-transparent-button">Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className="semi-transparent-button" onClick={() => this.delete(obj.teacherId)} style={{ marginLeft: "0px" }}>Delete</button>
                                    </td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          
        )
    }
}
export default Home;