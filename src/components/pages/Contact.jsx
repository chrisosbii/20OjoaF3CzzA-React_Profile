import { useState } from 'react';
import '../css/form_style.css';
import { Button, Container, Card, CardContent, Grid, TextField } from '@mui/material'

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [contactor, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <Container maxWidth="md">
            <Card>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField id="standard-basic" label="Name:" placeholder="Enter name" varient="standard" fullWidth required/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField onChange={handleInputChange} type={"email"} label="Email:" placeholder="Enter valid email" varient="standard" fullWidth required/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Message:" multiline rows={5} varient="standard" fullWidth required/>
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" varient="container" color="primary" fullWidth>submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
        
}

export default Contact;

/*
<div className="container text-center">
            <h1>Contact Me:</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={contactor}
                    name="Name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                />
                <input
                    value={email}
                    name="Email address:"
                    onChange={handleInputChange}
                    type="email"
                    placeholder=""
                />
                <input
                    value={message}
                    name="Message:"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
*/