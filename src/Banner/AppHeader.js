import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './AppHeader.css'
import poclogo from '../Logo/POCLogo.png'

class AppHeader extends Component {
    render() {
        return (
            <header className={"app-header"}>
                <div className={"container"}>
                    <div className={"app-branding"}>
                        <Link to={"/"} className={"app-title"}><img className={"poc-logo"} src={poclogo}/></Link>
                    </div>
                    <div className={"app-options"}>
                        <nav className={"app-nav"}>
                            <ul>
                                <li>
                                    <NavLink to={"/submit"}>Submit a Streamer!</NavLink>
                                    <NavLink to={"/report"}>Report Abuse</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;