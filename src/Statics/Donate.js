import React, {Component} from 'react';
import {BAIL_FUND_DONATE, BLACK_LIVES_MATTER_DONATE, MY_DONATE, SUPPORT_BLACK_OWNED} from "../Constants";

class Donate extends Component {

    render() {
        return(
            <div className={"Donate-Links"}>
                <div className={"Black-Lives-Matter"}>
                    <div>Donate to Black Lives Matter!</div>
                    <a href={BLACK_LIVES_MATTER_DONATE}>Donate!</a>
                </div>
                <div className={"Bail-Funds"}>
                    <div>Donate to your local Bail Fund!</div>
                    <a href={BAIL_FUND_DONATE}>Donate!</a>
                </div>
                <div className={"Other-Business"}>
                    <div>Donate or support other POC owned Businesses</div>
                    <a href={SUPPORT_BLACK_OWNED}>Support Black Owned</a>
                </div>
                <div className={"My-Donate"}>
                    <div>If you would really like to donate to the website, please donate here. Anything not used to cover costs (Domain Costs, Server Hosting, Electricity) will be donated to one of the above charity organizations.</div>
                    <a href={MY_DONATE}>Donate to Me!</a>
                </div>
            </div>
        )
    }
}

export default Donate