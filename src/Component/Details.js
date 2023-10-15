import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, lime } from '@mui/material/colors';
import "../App.css";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

const Details = () =>{
    const card = (
          <CardContent  sx={{ bgcolor: "#7AB2CA", opacity:0.8}}>
            <Typography variant="h2"  color="#000000" gutterBottom>
              Hi, Iam Sarath
            </Typography>
            <Typography variant="h4" component="div">
            React enthusiast, welcome to my portfolio page.
            iam from India and like playing football and watching anime
            code from time to time and like to build projects.
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Here i have listed my skills and project that i have done  
            </Typography>
            <Typography variant="body2">
            Feel free to email me ukm7773@gmail.com
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
      );
    return (
    
          <ThemeProvider theme={theme}>
          <Box color>
          <Card className='Card'>{card}</Card>
            </Box>
            </ThemeProvider>

    );
}

export default Details;