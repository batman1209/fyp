import * as React from 'react';
import { any } from 'prop-types';
import '../css/button.css';
import { Link } from 'react-router-dom';

const axios = require('axios');
// import SweetAlert from 'sweetalert-react';
class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            teacher: []
        }
        // this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get('https://localhost:44310/api/Admin', this.state)
            .then((response: any) => {
                console.log(response);
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
            axios.delete(`https://localhost:44310/api/Teachers/${id}`)
                .then((res: any) => {
                    alert('Deleted');
                    axios.get('https://localhost:44310/api/Admin', this.state)
                        .then((response: any) => {
                            console.log(response);
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


                                {this.state.teacher.map((obj: any) => <tr>
                                    <td>{obj.teacherId}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td>{obj.gender}</td>
                                    <td>
                                        <Link className="nav-link" to="updateuser">
                                            <button type="button" className="semi-transparent-button">Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        {/* <Link className="nav-link" to="deleteuser">
                                            
                                        </Link> */}
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