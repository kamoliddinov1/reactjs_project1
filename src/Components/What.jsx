import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SettingsIcon from '@mui/icons-material/Settings';
import GestureIcon from '@mui/icons-material/Gesture';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100%',color:'white' }} style={{paddingLeft:'30%',paddingRight:'5%',backgroundImage: `url(${'./images/page-bg.jpg'})`}} >
           <Typography style={{paddingTop:'10%'}}>
               <b>What I'm goot at?</b>
               <p style={{fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?
                    laborum optio provident? Vel possimus molestiae iste ab quidem?</p>
           </Typography>

      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop:'7%'}}>
        <Grid  item xs={6} sx={{opacity:'0.1',color:'red'}} >
          <Item sx={{textAlign:'Start',}}>
              <Typography sx={{}}>
              <EmojiObjectsIcon/><br/>
              <b style={{}}>HTML5&CSS3 </b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} style={{bgcolor:'none',opacity:'0.1'}}>
          <Item sx={{textAlign:'Start'}}>
          <Typography>
              <CodeOffIcon/><br/>
              <b>Creatie Ideas</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{textAlign:'Start'}} style={{bgcolor:'none',opacity:'0.1'}}>
          <Typography>
              <SettingsIcon/><br/>
              <b>Easy Customize</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} style={{bgcolor:'none',opacity:'0.1'}}>
          <Item sx={{textAlign:'Start'}}>
          <Typography>
              <GestureIcon /><br/>
              <b>Admin Dashboard</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
      </Container>
    </React.Fragment>
  );
}

