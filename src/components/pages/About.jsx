import profilePic from '../images/chris_osborne.jpg';
import React from 'react';
import { Avatar, Container, Box } from '@mui/material'

console.log(profilePic);

function About() {
    return (
        <Container maxWidth="md">
            
                <h1>About Me</h1>

                <Avatar
                    alt="Chris Osborne"
                    src={profilePic}
                    sx={{ width: 200, height: 200 }}
                />
            
            <Box >
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
            </Box >
        </Container>
        
    );
}

export default About;
  