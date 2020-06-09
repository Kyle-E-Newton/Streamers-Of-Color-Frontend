import React, {Component} from "react";
import {requestUserPlatURL} from "../Util/Utils";
import {API_BASE_URL} from "../Constants";
import './Report.css'

class Report extends Component{

    constructor(props) {
        super(props);
        this.state = {
            streamer: "",
            platform: "",
            incidentURL: "",
        }

        this.handleChangeText       = this.handleChangeText.bind(this);
        this.handleChangeSelect     = this.handleChangeSelect.bind(this);
        this.handleChangeURL        = this.handleChangeURL.bind(this);
        this.sendReport             = this.sendReport.bind(this);
    }

    sendReport() {
        return requestUserPlatURL({
            url: encodeURI(API_BASE_URL + "/report/new"),
            method: 'POST'
        }, this.state.streamer, this.state.platform, this.state.incidentURL).then(response => console.log(response)).then(this.props.history.push("/"));
    }

    handleChangeText(event) {
        this.setState({streamer: event.target.value});
    }

    handleChangeURL(event) {
        this.setState({incidentURL: event.target.value});
    }

    handleChangeSelect(event) {
        this.setState({platform: event.target.value});
    }

    render() {
        return (
            <form className={"report-form"} onSubmit={this.sendReport}>
                <label>Streamer Name: </label><input className={"report-form-name"} type={"text"} onChange={this.handleChangeText}/>
                <select className={"report-form-platform"} onChange={this.handleChangeSelect}>
                    <option value={"default"}>Platform</option>
                    <option value={"twitch"}>Twitch.tv</option>
                </select>
                <label>Incident URL: </label><input className={"report-form-url"} type={"text"} onChange={this.handleChangeURL}/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        );
    }
}

export default Report