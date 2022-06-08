import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Rasim1 from "./images/portfolio-01.jpg"
import Rasim2 from "./images/portfolio-02.jpg"
import Rasim3 from "./images/portfolio-03.jpg"
import Rasim4 from "./images/portfolio-04.jpg"
import Rasim5 from "./images/portfolio-05.jpg"
import Rasim6 from "./images/portfolio-06.jpg"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';
const imag =[
    {
        id:1,
        img: Rasim1,

    },
    {
        id:2,
        img: Rasim2,

    },
    {
        id:3,
        img: Rasim3,

    },
    {
        id:4,
        img: Rasim4,

    },
    {
        id:5,
        img: Rasim5,

    },
    
    {
        id:6,
        img: Rasim6,

    },
    
    
]




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} style={{paddingLeft:'30%',paddingRight:'5%',
    backgroundImage: `url(${'./images/page-bg.jpg'})`,paddingTop:'10%'}}>
        <Typography sx={{color:'white',}}>
            <Typography sx={{color:'white', fontSize:'20px'}}>My Work</Typography>
            <Typography sx={{paddingTop:"20px", fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?</Typography>
            <Typography sx={{paddingTop:"50px"}}><a color=''>All   </a><b>People    Nature    Animals</b></Typography>
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{opacity:''}}>
        {imag.map((imag, id) => (
          <Grid item xs={6} key={id} style={{bgcolor:'none'}}>
            {/* <Box ><img src={imag.img} /></Box> */}
            <img src={imag.img} alt="" style={{height:'250',width:'100%',borderRadius:'3px'}}/>

          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </React.Fragment>
  );
}







