import React from 'react'

import me from '../images/me.jpg';
import HomeOffice from '../images/home-office.jpg';
import resume from '../images/lindsay_reiner_CSresume_8.8.2022.pdf';
import '../styles/About.css';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { amber, blue, pink, red } from '@mui/material/colors';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function About() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <section className="about-container">
            <Card sx={{ maxWidth: 900 }} className="card-container box-shadow">
                <CardHeader
                    avatar={
                        <Avatar sx={{ width: 100, height: 100 }} aria-label="Lindsay Reiner" src={me}>
                        </Avatar>
                    }
                    title="Front End Web Developer"
                    subheader="Raleigh, NC"
                />
                <CardMedia
                    component="img"
                    className="me"
                    height="195"
                    image={HomeOffice}
                    alt="home office"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Web Developer with Senior Operations experience who brings strong skills
                        in customer service, communication, and documentation.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/">
                        <LinkedInIcon sx={{ color: blue[900], width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton aria-label="GitHub" href="https://github.com/lindsayreiner">
                        <GitHubIcon sx={{ color: amber[700], width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton aria-label="Email Me" href="mailto:lindsayreiner@hey.com">
                        <EmailIcon sx={{ color: pink[900], width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton aria-label="Resume Download" href={resume} download>
                        <ArticleIcon sx={{ color: red[900], width: 40, height: 40 }} />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Earned a certificate in Full Stack Web Development from the University of North Carolina
                            with newly developed skills in JavaScript, CSS, and HTML. I’m passionate
                            about developing apps that are beautiful, useful, and intuitive.
                        </Typography>


                        <Typography paragraph>
                            My extensive experience in the world of customer service brings
                            unique value to the UI/UX design, and deployment of engaging web
                            applications. Passionate about cross-functional collaboration,
                            maintaining an organized workflow, and bringing a "can do" attitude
                            to support the goals put before me and the team I am a part of. I am
                            dedicated, hardworking, and committed to continuing education. It is
                            my technical expertise, passionate engagement, inquisitive nature,
                            and highly-organized project management skill set that make me a
                            great addition to any team.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </section>
    )
}
