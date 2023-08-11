import { Container, Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import dogParkPic from '../images/DogParkPic.png';
import sparkPic from '../images/sparkPainting.png';
import timerPic from '../images/timer.jpg';
import fillerPic from '../images/filler.jpg';
import filler2Pic from '../images/green_bars.jpg'

export default function Portfolio() {
    return (
        <Container maxWidth="lg">
            <h1>
                Portfolio:
            </h1>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justify:"center" }}>
                <Card sx={{ minWidth: 500, padding: 5, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={sparkPic}
                        alt="Spark Concepts"
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            height: "150px",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            paddingBottom: "20px",
                            },
                        }}
                        >
                        <Typography gutterBottom variant="h5" component="div">
                            Spark Concepts{" "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is a 

                            GitHub Link: 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="http://sparkmyconcepts.com">Live Link</Button>
                        <Button size="small" href="https://github.com/bswiley/Spark_Concepts">Github</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 500, padding: 5, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={dogParkPic}
                        alt="dog park finder"
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            height: "150px",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            paddingBottom: "20px",
                            },
                        }}
                        >
                        <Typography gutterBottom variant="h5" component="div">
                            Dogs Gone Wild!{" "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is a dog park finder using google maps and local storage.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://trevor-mcguire.github.io/Project-1/">Live Link</Button>
                        <Button size="small" href="https://github.com/trevor-mcguire/Project-1/">Github</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: 500, padding: 5, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={timerPic}
                        alt="Shareable timer"
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            height: "150px",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            paddingBottom: "20px",
                            },
                        }}
                        >
                        <Typography gutterBottom variant="h5" component="div">
                            TimeShare{" "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is a basic HTML page that can be used as a timer.

                            You can send the link to the page to another person and they can see a timer with the same start, lap, and stop times.

                            Use case is for like track meets or if you want to send someone a time when something started.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://chrisosbii.github.io/timeshare/">Live Link</Button>
                        <Button size="small" href="https://github.com/chrisosbii/timeshare/">Github</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 500, padding: 5, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={filler2Pic}
                        alt="Random ID Generator"
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            height: "150px",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            paddingBottom: "20px",
                            },
                        }}
                        >
                        <Typography gutterBottom variant="h5" component="div">
                            Random ID Generator{" "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is a basic HTML page that generates a random string based on an inputed length value.

                            It will also repeat the task as many times as specified and print them out to the page.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://chrisosbii.github.io/random_id_generator/">Live Link</Button>
                        <Button size="small" href="https://github.com/chrisosbii/random_id_generator/">Github</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 500, padding: 5, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={fillerPic}
                        alt="Random ID Generator"
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            height: "150px",
                            },
                        }}
                    />
                    <CardContent
                        sx={{
                            "@media screen and (max-width: 600px)": {
                            paddingBottom: "20px",
                            },
                        }}
                        >
                        <Typography gutterBottom variant="h5" component="div">
                            Other Example project{" "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is just another card

                            Git Hub Link: 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="#">Live Link</Button>
                        <Button size="small" href="#">Github</Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
  }