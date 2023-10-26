import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import "../App.css";

const Projects = ({image,Title,desc}) => {
    return (
            <div className="project" >
            <Card sx={{ maxWidth: 345, minHeight: 350, maxHeight: 350, border: '1px solid black' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                            <img src = {image} sx={{maxHeight: 300, minHeight:300}} />
                        </Avatar>
                    }
                    title = {Title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent sx={{bgcolor: "#E0E3C5", minHeight: 60, maxHeight: 40}}>
                    <Typography variant="body1" color="text.primary">
                       {desc}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default Projects;