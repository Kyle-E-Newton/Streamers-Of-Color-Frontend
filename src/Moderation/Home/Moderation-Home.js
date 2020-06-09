import React, {Component} from "react";
import ModerationHeader from "../ModerationHeader/ModerationHeader";
import './Moderation-Home.css'
import {getCurrentUser, request, requestUserPlat, requestUserPlatURL} from "../../Util/Utils";
import {ACCESS_TOKEN, API_BASE_URL} from "../../Constants";

class ModerationHome extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            approvals: [],
            reports: [],
            currentUser: null,
            authenticated: false
        };

        this.approveRequest = this.approveRequest.bind(this);
        this.rejectRequest = this.rejectRequest.bind(this);
        this.removeReportLink = this.removeReportLink.bind(this);
        this.removeReport = this.removeReport.bind(this);
        this.removeStreamer = this.removeStreamer.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);

    }


    componentDidMount() {
        this._isMounted = true;

        this.loadCurrentlyLoggedInUser()

        //Get Approvals
        request({url: API_BASE_URL + "/moderation/all", method: 'GET'}).then(response => {
            if(this._isMounted) {
                this.setState({approvals: response})
            }
        });

        //Get Reports
        request({url: API_BASE_URL + "/report/all", method: 'GET'}).then(response => {
            if(this._isMounted) {
                this.setState({reports: response})
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    approveRequest = (username, platform) => {
        console.log("approve")
        //Route: /moderation/approval
        requestUserPlat({url: API_BASE_URL + "/moderation/approve", method: 'POST'}, username, platform)
    }

    rejectRequest(username, platform) {
        console.log("reject")
        //Route: /moderation/reject
        requestUserPlat({url: API_BASE_URL + "/moderation/reject", method: 'POST'}, username, platform)
    }

    removeReportLink(username, platform, url) {
        console.log("remove report link")
        //Route: /moderation/url
        requestUserPlatURL({url: API_BASE_URL + "/moderation/url", method: 'DELETE'}, username, platform, url)
    }

    removeReport(username, platform) {
        console.log("remove report")
        //Route: /moderation/report
        requestUserPlat({url: API_BASE_URL + "/moderation/report", method: 'DELETE'}, username, platform)
    }

    removeStreamer(username, platform) {
        console.log("remove streamer")
        //Route: /moderation/stream
        requestUserPlat({url: API_BASE_URL + "/moderation/stream", method: 'DELETE'}, username, platform)
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
    }

    loadCurrentlyLoggedInUser() {
        getCurrentUser().then(response => {
            this.setState({
                currentUser: response,
                authenticated: true
                });
        });
    }


    render() {
        const {approvals, reports} = this.state;
        return(
            <header className={"app-header"}>
                <div className={"app-header"}>
                    <ModerationHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                </div>
                <div className={"moderation-home"}>
                    <div className={"split moderation-approval"}>
                        <div className={"centered"}>
                            <div className={"moderation-label"}>Approve new Streamers</div>
                            <div className={"moderation-approval-list"}>
                                {
                                    approvals.map(approval =>
                                        <div className={"approval-item"}>
                                            <div className={"approval-name"}>{approval.username}</div>
                                            <div className={"approval-url"}>{approval.streamURL}</div>
                                            <button type={"submit"} onClick={() => this.approveRequest(approval.username, approval.platform)}>Approve</button>
                                            <button type={"submit"} onClick={() => this.rejectRequest(approval.username, approval.platform)}>Reject</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"split moderation-report"}>
                        <div className={"centered"}>
                            <div className={"moderation-label"}>Handle User Reports</div>
                            <div className={"moderation-report-list"}>
                                {reports.map(report =>
                                    <div className={"report-item"}>
                                        <div className={"report-name"}>{report.username}</div>
                                        <div className={"report-url-list"}>
                                            {
                                                report.incidentURL.map(incident =>
                                                    <a className={"report-url-list-item"} href={incident} >{incident}<button type={"submit"} onClick={() => this.removeReportLink(report.username, report.platform, incident)}>Remove Report Link</button></a>
                                                )
                                            }
                                        </div>
                                        <button type={"submit"} onClick={() => this.removeStreamer(report.username, report.platform)}>Remove Streamer</button>
                                        <button type={"submit"} onClick={() => this.removeReport(report.username, report.platform)}>Remove Report</button>
                                    </div>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>
            </header>
        )
    }
}

export default ModerationHome;