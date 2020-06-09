import React, { Component } from "react";
import {Link, NavLink, Redirect} from "react-router-dom";
import './ModerationHeader.css'

class ModerationHeader extends Component {
    render() {
        return (
            <header className={"app-header"}>
                <div className={"container"}>
                    <div className={"app-branding"}>
                        <Link to={"/moderation"} className={"app-title"}>Home</Link>
                    </div>
                    <div className={"app-options"}>
                        <nav className={"app-nav"}>
                            {
                                this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <a onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul>
                                        <li>
                                            <NavLink to={"/login"}>Login</NavLink>
                                        </li>
                                    </ul>
                                )
                            }
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default ModerationHeader;