import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} style={{paddingLeft:'30%',paddingRight:'5%',
    backgroundImage: `url(${'./images/page-bg.jpg'})`}}>
    <Typography sx={{paddingTop:'10%'}}>
    <Typography sx={{color:'white', fontSize:'20px'}}>Contact ME</Typography>
            <Typography sx={{paddingTop:"20px", fontSize:'10px',paddingTop:'30px',paddingBottom:'10%',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?</Typography>
    </Typography>
      <Grid container spacing={3}>
        <Grid item xs={7} md={6} sx={{}}>
        <TextField fullWidth label="Your name" id="fullWidth"sx={{border:'1px solid white'}}/>
        </Grid>
        <Grid item xs={7} md={6} sx={{paddingTop:'20%',}}>
        <TextField fullWidth label="Email" id="fullWidth" sx={{border:'1px solid white'}}/>
        </Grid>
        <Grid item xs={10} md={14}>
        <TextField fullWidth label="Subject" id="fullWidth"sx={{border:'1px solid white'}} />
        </Grid>
        <Grid item xs={6} md={14} sx={{height:'200px'}}>
        <TextField fullWidth label="Your message*" id="fullWidth"style={{border:'1px solid white'}}/>
        </Grid>
        <Button variant="contained" color="success" sx={{marginLeft:'40%'}}>
        SENT MESSENGE
      </Button>
      </Grid>
    </Box>
    </Container>
    </React.Fragment>
  );
}