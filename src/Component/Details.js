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
          <CardContent  sx={{ bgcolor: "#313131", marginLeft:2}}>
            <Typography variant="h5"  color="white" gutterBottom>
              <p style={{fontFamily: "Georgia"}}>Hi, Iam Sarath</p>
           <p style={{fontFamily: "Georgia"}}>
            React enthusiast, welcome to my portfolio page.
            iam from India and like playing football and watching anime
            code from time to time and like to build projects.
           </p>
           <p>
              Here i have listed my skills and project that i have done  
            Feel free to email me ukm7773@gmail.com
           </p>
            </Typography>
          </CardContent>
      );
    return (
    
          <ThemeProvider theme={theme}>
          <Box >
          <Card className='Card'>{card}</Card>
            </Box>
            </ThemeProvider>

    );
}

export default Details;