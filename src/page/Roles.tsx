import * as React from 'react';
import "../Component/sidebar/sidebar";

class Roles extends React.Component {

    render() {
        return (
            <div className="content" >
                <div className="container-fluid">
                    {/* <a href="@Url.Action("Adduser","Home")"> */}
                    <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px" }}>Admin</button>
                    <br />
                        {/* <a href="@Url.Action("Adduser","Home")"> */}
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px" }} >Teacher</button>
                        <br />
                            {/* <a href="@Url.Action("Adduser","Home")">			 */}
                            <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px" }}>TeamLead</button>
                            <br />
                                <div className="row"></div>
                                
                             
                </div>
            </div>
                    );
                }
}