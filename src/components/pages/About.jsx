import profilePic from '../images/chris_osborne.jpg';
import React from 'react';

console.log(profilePic);

function About() {
    return (
        <div>
            <h1>About Me</h1>

            <div id="profilePic">
                <img src={profilePic} alt="Chris Osborne's Picture" height="100%" width="100%">
                </img>
            </div>

            <div className="contentBox">
                <p>
                    My name is Chris Osborne and I like coding in my free time. I have created a few projects on my own.
                </p>
                <p>
                    Other then coding I enjoy road and mountain biking, jujitsu, playing with pets.  
                </p>
                <p>
                    I currently live in Wisconsin and have discovered that cheese is great. Personally I enjoy a good sharp cheader 
                </p>
           </div>
        </div>
    );
}

export default About;
  