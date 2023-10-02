import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./HomePage.css";
import money from "./assets/money.png";
import analyze from "./assets/analyze.png";
import target from "./assets/target.png";
import ease from "./assets/united.png";


function HomePage() {
    // const [isClicked, setIsClicked] = useState(false);
    //
    // const handleDivClick = () => {
    //     setIsClicked(true);
    // }

    return (
        <div className="App-background">
            <div className="App-header">
                <Link to={"/"} style={{textDecoration: 'none' }}>
                    <div className={"logo-text"}>
                        <img src={money} className="logo" alt="FinTrack Logo"/>
                        <p className="Website-name">FinTrack</p>
                    </div>
                </Link>
                <div className={"right-buttons"}>
                    <div className={"about-us"}>
                        <p className={"ab-text"}>About Us</p>
                    </div>
                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                        <div className={"login"}>
                            <p className={"login-text"}>Login</p>
                        </div>
                    </Link>
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
                        <div className="circle-container1">
                            <svg
                                className="tile-circle-content"
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                            >
                                <circle cx="60" cy="60" r="60" fill="#D9D9D9"/>
                                <image x="30" y="30" width="60" height="60" href={analyze}/>
                            </svg>
                        </div>
                        <h3 className={"subheading"}>Advanced Data</h3>
                        <h4 className={"caption"}>We use advanced data collection techniques to predict the best trades and positions. </h4>
                    </div>
                </div>
                <div className={"tile2"}>
                    <div className={"rectangle2"}>
                        <div className="circle-container2">
                            <svg
                                className="tile-circle-content"
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                            >
                                <circle cx="60" cy="60" r="60" fill="#D9D9D9"/>
                                <image x="30" y="30" width="60" height="60" href={target}/>
                            </svg>
                        </div>
                        <h3 className={"subheading"}>Unique Advice</h3>
                        <h4 className={"caption"}>Our recommendations are always personalized to your taste and trading style. </h4>
                    </div>
                </div>
                <div className={"tile3"}>
                    <div className={"rectangle3"}>
                        <div className="circle-container3">
                            <svg
                                className="tile-circle-content"
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                            >
                                <circle cx="60" cy="60" r="60" fill="#D9D9D9"/>
                                <image x="31" y="28" width="60" height="60" href={ease}/>
                            </svg>
                        </div>
                        <h3 className={"subheading"}>Unique Advice</h3>
                        <h4 className={"caption"}>Our recommendations are always personalized to your taste and trading style. </h4>
                    </div>
                </div>
            </div>
            <div className={"get-started-container"}>
                <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                    <div className={"get-started-button"}>
                        <h1 className={"get-started-text"}>Get Started</h1>
                    </div>
                </Link>
            </div>
            <div className={"app-footer"}>
                <div className={"footer"}></div>
            </div>
        </div>
    );
}

export default HomePage;
