import React, {Component} from "react";
import {Link} from "react-router-dom";

class AppFooter extends Component {
    render() {
        return (
            <footer className={"app-footer"}>
                <div className={"container"}>
                    <div><Link to={"/copyright"}>Copyright</Link></div>
                    <div><Link to={"/terms-of-service"}>Terms of Service</Link></div>
                        <div><Link to={"/donate"}>Donate Here</Link></div>
                </div>
            </footer>
        )
    }
}

export default AppFooter