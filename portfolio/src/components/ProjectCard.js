import React from 'react'

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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';

export default function ProjectCard(imageLink, title, description, role, technologies, websiteLink, gitLink) {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="Visit Repository">
                        <IconButton aria-label="add to favorites">
                            <GitHubIcon sx={{ color: amber[600], width: 35, height: 35 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Visit Project Website">
                        <IconButton aria-label="share">
                            <WebIcon sx={{ color: pink[600], width: 35, height: 35 }} />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </>
    )
}
