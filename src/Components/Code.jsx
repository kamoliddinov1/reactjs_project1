import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StreamIcon from '@mui/icons-material/Stream';
import ElevenMpIcon from '@mui/icons-material/ElevenMp';

import Rasim1 from "./images/author-image.jpg"
import { Typography } from '@mui/material';
import { color } from '@mui/system';

// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} style={{paddingRight:'2%',
  backgroundImage: `url(${'./images/page-bg.jpg'})`}}>
    
        <Typography sx={{mb:'20px',marginLeft:'30%',color:'white',paddingTop:'5%'}}>
              <b style={{fontSize:'30px',}}>About Me</b>
              <p style={{fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores porro dolorem
                   sapiente nulla recusandae iusto enim dolores, laboriosam commodi asperiores porro dolorem!</p>
          </Typography>

      <Grid container spacing={{ xs: 3, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        <Grid item xs="3" sx={{ml:"5%",marginTop:'-9%'}}>
          <Item sx={{bgcolor:'#C70039'}}>
          <img style={{borderRadius:'75px'}} src={Rasim1}/><br/>
              <b style={{fontSize:'30px',color:"",}}>Relux Me</b><br/>
              <i>WEb Desinger</i><br/>
              <Button style={{marginTop:'20px',width:'100%',color:'white'}}>About Me</Button><br/>
              <Button style={{width:'100%',color:'white'}}>what I'm good at</Button><br/>
              <Button style={{width:'100%',color:'white'}}>My Work</Button><br/>
              <Button style={{width:'100%',color:'white'}}>Contact Me</Button><br/>
          </Item>
        </Grid>

        <Grid item xs={4}>
        <img style={{width:'100%',height:'100%',borderRadius:'5px',marginLeft:'5%'}} src='./images/left-image.jpg'/>
        </Grid>

        <Grid item xs={4}>
        <Typography sx={{textAlign:'start',color:'white',marginLeft:'10%'}}>
              <b style={{}}>Reflux HTML CSS Temlate</b>
              <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum. 
                 Eum nesciunt deleniti repudiandae numquam.</p>
                 <Button variant="outlined" style={{marginBottom:'20%'}}>Read More</Button>
          </Typography>
        </Grid>

        <Grid item xs="3" sx={{ml:"5%",marginTop:'-9%'}}>
          <Item sx={{bgcolor:'#C70039'}}>
          <p style={{marginTop:'45%'}}><FacebookIcon/><TwitterIcon/><ElevenMpIcon/><InstagramIcon/><StreamIcon/><RssFeedIcon/></p>
          <p style={{marginTop:'70px'}}>Copyright 2019 Reflux Design</p> 
          <p style={{marginTop:'100px'}}>by temlatemo</p> 
          </Item>
        </Grid>

        <Grid item xs={4}>
        <Typography sx={{textAlign:'start',color:'white',marginLeft:'5%'}}>
              <b style={{}}>Reflux HTML CSS Temlate</b>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum.</p>
                 <Button variant="outlined" style={{marginBottom:'20%'}}>Read More</Button>
          </Typography>
        </Grid>

        <Grid item xs={4}>
        <img style={{width:'100%',height:'100%',borderRadius:'5px',marginLeft:'3%'}} src='./images/right-image.jpg'/>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </React.Fragment>
  );
}
