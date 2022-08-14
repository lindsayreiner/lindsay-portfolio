import React from 'react'

import '../styles/ProjectCard.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, amber } from '@mui/material/colors';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';



export default function ProjectCard({ imageLink, title, description, role, technologies, websiteLink, gitLink }) {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="projectCard">
                <CardHeader
                    title={title}
                    subheader={role}
                />
                <IconButton sx={{ width: "100%", padding: 0 }} href={websiteLink} target="_blank">
                    <CardMedia
                        component="img"
                        height="300"
                        image={imageLink}
                        alt="Website image"
                    />
                </IconButton>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>Technologies used:</b> {technologies}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                        <b>Description:</b> {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="Visit Repository">
                        <IconButton aria-label="GitHub Repo" href={gitLink} target="_blank">
                            <GitHubIcon sx={{ color: amber[600], width: 35, height: 35 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Visit Project Website">
                        <IconButton aria-label="Website" href={websiteLink} target="_blank">
                            <WebIcon sx={{ color: pink[600], width: 35, height: 35 }} />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </>
    )
}
