import React from "react";
import StreamDisplay from "../StreamDisplay/StreamDisplay";


export default function Home() {
    return (
        <div className={"home-container"}>
            <div className={"container"}>
                <StreamDisplay/>
            </div>
        </div>
    );
}