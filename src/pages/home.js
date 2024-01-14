import "../styles/home.css";
import React from 'react';
import { Link } from "react-router-dom";
import promoIcon from "../assets/promotion.png";
import friendIcon from "../assets/friends.png";
import calIcon from "../assets/calendar.png";
import fastIcon from "../assets/fast-time.png";
import infIcon from "../assets/infinite.png";
import recIcon from "../assets/social-media.png";
import tvIcon from "../assets/tv.png";
import friendsPicture from "../assets/watchwithfriends.jpg";


function Home() {

    return (
        <>
            <header className="hero_section">
                <p>Consume Content with Your Friends and Plan Your Discussions</p>

                <img src={friendsPicture} alt={"Friends watching TV"}/>
            </header>

            <div className="steps_sect">
                <p className="sect_title">It's as Simple as 1, 2, 3</p>
                <p className="sect_blurb">Start watching something in a couple of minutes as 
                    opposed to mindlessly scrolling through streaming platforms 
                    for something to watch.
                </p>

                <div className="steps">

                    <div className="benefit_square">
                        <img src={friendIcon} alt="Friends Icon"/>
                        <p className="b_title">Create a WatchList</p>

                        <p className="b_content">Add up to 10 people to your WatchList. 
                            Your WatchList is a private community hub where your group
                             can contribute content that they recommend.</p>
                    </div>

                    <div className="benefit_square">
                        <img src={tvIcon} alt="TV icon"/>
                        <p className="b_title">Add Your Content</p>

                        <p className="b_content">Add different pieces of content ranging from TV shows to
                             Feature-Length Movies. We will help you find where you can watch it.</p>
                    </div>

                    <div className="benefit_square">
                        <img src={calIcon} alt="Calendar Icon" />
                        <p className="b_title">Plan Your Discussions</p>

                        <p className="b_content">After everyone has watched something, everyone will be prompted 
                            to input their availability so that you can discuss it!</p>
                    </div>
                </div>



            </div>
            <div className="centered">
                <div className="benefits_sect">

                    <div className="benefit">
                        <img src={promoIcon} alt="Megaphone Icon"/>
                        <p>Never Accidentally Spoil Again</p>
                    </div>

                    <div className="benefit">
                        <img src={recIcon} alt="Recommend Icon"/>
                        <p>Recommend Content to Your Friends</p>
                    </div>

                    <div className="benefit">
                        <img src={fastIcon} alt="Clock Fast Icon"/>
                        <p>Talk about Content as it releases</p>
                    </div>

                    <div className="benefit">
                        <img src={infIcon} alt="Infinity Clock Icon"/>
                        <p>Always Have Something to Watch</p>
                    </div>

                </div>
            </div>

            <div className="join_section">
                <Link to="/join">Join Now!</Link>
            </div>
        </>
        
    )
}

export default Home