import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import Alert from 'react-s-alert';
import {ACCESS_TOKEN} from "../../Constants";
import {login} from "../../Util/Utils";
import './Login.css'

class Login extends Component {

    _isMounted = false;

    state = {
        isLoading: true
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/moderation",
                    state: {from: this.props.location}
                }}/>
        }

        return (
            <div className={"login-container"}>
                <div className={"login-content"}>
                    <h1 className={"login-title"}>Login to Streamers of Color</h1>
                    <LoginForm {...this.props} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest).then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.token);
            this.props.history.push("/moderation");
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={"form-item"}>
                    <input type={"text"} name={"username"} placeholder={"Username"} value={this.state.username} className={"form-control"} onChange={this.handleInputChange} required/>
                </div>
                <div className={"form-item"}>
                    <input type={"password"} name={"password"} placeholder={"Password"} value={this.state.password} className={"form-control"} onChange={this.handleInputChange} required/>
                </div>
                <div className={"form-item"}>
                    <button type={"submit"} className={"btn btn-block btn-primary"}>Login</button>
                </div>
            </form>
        );
    }
}

export default Login