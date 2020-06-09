import React, {Component} from "react";
import ReactPlayer from "react-player";
import './StreamDisplay.css'
import {request} from "../Util/Utils";
import {API_BASE_URL} from "../Constants";

class StreamDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            streams: [],
        };
    }

    componentDidMount() {
        request({url: API_BASE_URL + "/stream/all", method: 'GET'}).then(response => {
            this.setState({streams: response})
        });
    }


    render() {
        const {streams} = this.state;
        return(
            <div className={"stream-list"}>
                {
                    streams.map(stream =>
                        <div className={"stream-item"} key={stream.username}>
                            <Stream_embed stream={stream}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

function Stream_embed(props) {
    const stream = props.stream;
    if(stream.platform === "TWITCH") {
        return <ReactPlayer className={"stream-video"} url={stream.streamURL} playing={false} volume={0}/>
    }
    if(stream.platform === "MIXER") {
        return <iframe className={"stream-video"} src={"https://mixer.com/embed/player/" + stream.username + ""} title={stream.username} />
    }
}

export default StreamDisplay;