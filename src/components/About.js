import React, { Component } from 'react';
import ProfileImage from '../images/profil.png'

class About extends Component {
    render() {
        return (
            <div className="about">
                    
                <div className="aboutContainer">
                    <div className="about-profile-image" style={{ backgroundImage: "url(" + ProfileImage + ")" }}></div>

                    Jobber til daglig hos fotoknudsen, så interessen for bilder har jeg med meg både i jobben og privat. På denne siden legger jeg ut noen av bildene jeg selv har tatt.
                    Skulle det være noe, så er det bare å ta kontakt på: Eskil@Klepaker.no
                </div>


            </div>
        );
    }
}

export default About;
