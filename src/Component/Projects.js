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
            <Card sx={{ maxWidth: 345, minHeight: 300, maxHeight: 330, border: '2px solid black' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                            <img src = {image} sx={{maxHeight: 300, minHeight:200}} />
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
                <CardContent sx={{bgcolor: "#E0E3C5", minHeight: 50, maxHeight: 50}}>
                    <Typography variant="body1" color="text.primary">
                       {desc}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default Projects;