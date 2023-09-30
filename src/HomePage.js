import React from "react";
import {Link} from "react-router-dom";
import "./HomePage.css";
import money from "./assets/money.png";
import analyze from "./assets/analyze.png";

function HomePage() {
    return (
        <div className="App-background">
            <div className="App-header">
                <div className={"logo-text"}>
                    <img src={money} className="logo" alt="FinTrack Logo"/>
                    <p className="Website-name">FinTrack</p>
                </div>
                <div className={"right-buttons"}>
                    <div className={"about-us"}>
                        <p className={"ab-text"}>About Us</p>
                    </div>
                    <div className={"login"}>
                        <p className={"login-text"}>Login</p>
                    </div>
                </div>
            </div>
            <div className={"welcome-header-container"}>
                <h1 className={"welcome-header-text"}>
                    Welcome To FinTrack
                </h1>
                <h2 className={"title-caption"}>Personalized, expert-crafted, reputable trading suggestions.</h2>
            </div>
            <div className={"tile-container"}>
                <div className={"tile1"}>
                    <div className={"rectangle1"}>
                        <div className="circle-container">
                            <svg
                                className="tile1-circle-content"
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                            >
                                <circle cx="60" cy="60" r="60" fill="#D9D9D9"/>
                                <image x="28" y="30" width="60" height="60" href={analyze}/>
                            </svg>
                        </div>
                        <h3 className={"ad-subheading"}>Advanced Data</h3>
                        <h4 className={"ad-caption"}>We use advanced data collection techniques to predict the best trades and positions. </h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
