import * as React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="content" style={{paddingTop:"70px", paddingLeft:"40px"}}>
                <div className="container-fluid">
                    <div className="row" >
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Maryum</td>
                                    <td>Siddique</td>
                                    <td>maryum@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;