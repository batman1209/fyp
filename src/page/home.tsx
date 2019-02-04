import * as React from 'react';
import { any } from 'prop-types';
import '../css/button.css';
import { Link } from 'react-router-dom';

const axios = require('axios');
class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            teacher: []
        }
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

    render() {
        return (
            <div className="content" style={{ paddingTop: "70px", paddingLeft: "40px" }}>
                <div className="container-fluid">
                    <div className="row" >
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>


                                {this.state.teacher.map((obj: any) => <tr>
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
                                        <Link className="nav-link" to="updateuser">
                                            <button type="button" className="semi-transparent-button" style={{ marginLeft: "0px" }}>Delete</button>
                                        </Link>
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