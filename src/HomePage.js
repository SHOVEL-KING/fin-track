import React from "react";
import './HomePage.css'
import money from "./assets/money.png"
function HomePage() {
    return (
        <div className={"App-background"}>
            <div className={"App-header"}>
                <img src={money} className={"Main-logo"} alt={"FinTrack Logo"}/>
                <h1 className={"Website-name"}>FinTrack</h1>
            </div>
            <div className={"Advanced-data-background"}>

            </div>
        </div>

    );
}

export default HomePage;