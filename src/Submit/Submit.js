import React, {Component} from "react";
import {requestUserPlat} from "../Util/Utils";
import {API_BASE_URL} from "../Constants";

class Submit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            streamer: "",
            platform: "",
        }

        this.handleChangeText       = this.handleChangeText.bind(this);
        this.handleChangeSelect     = this.handleChangeSelect.bind(this);
        this.sendStreamer           = this.sendStreamer.bind(this);
    }

    sendStreamer() {
        return requestUserPlat({
            url: encodeURI(API_BASE_URL + "/stream/new"),
            method: 'POST'
        }, this.state.streamer, this.state.platform).then(response => console.log(response)).then(this.props.history.push("/"));
    }

    handleChangeText(event) {
        this.setState({streamer: event.target.value});
    }

    handleChangeSelect(event) {
        this.setState({platform: event.target.value});
    }

    render() {
        return (
            <form className={"submit-form"} onSubmit={this.sendStreamer}>
                <label>Streamer Name: <input className={"submit-form-name"} type={"text"} onChange={this.handleChangeText}/></label>
                <select className={"submit-form-platform"} onChange={this.handleChangeSelect}>
                    <option value={"default"}>Platform</option>
                    <option value={"twitch"}>Twitch.tv</option>
                </select>
                <input type={"submit"} value={"Submit"}/>
            </form>
        );
    }
}

export default Submit