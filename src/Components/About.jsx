import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SettingsIcon from '@mui/icons-material/Settings';
import GestureIcon from '@mui/icons-material/Gesture';



import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StreamIcon from '@mui/icons-material/Stream';
import ElevenMpIcon from '@mui/icons-material/ElevenMp';

import Rasim1 from "./images/portfolio-01.jpg"
import Rasim2 from "./images/portfolio-02.jpg"
import Rasim3 from "./images/portfolio-03.jpg"
import Rasim4 from "./images/portfolio-04.jpg"
import Rasim5 from "./images/portfolio-05.jpg"
import Rasim6 from "./images/portfolio-06.jpg"

import Avatar from '@mui/material/Avatar';
import { height } from '@mui/system';

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



const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography sx={{bgcolor:'#C70039',paddingTop:'10%',textAlign:'center'}}>
      <Avatar alt="Travis Howard" src="/images/author-image.jpg" sx={{width:'50%',height:'50%',marginLeft:'25%'}} />
          {/* <img style={{borderRadius:'75%',width:'75%',paddingTop:'20%'}} src={'./images/author-image.jpg'}/><br/> */}
              <b style={{fontSize:'30px',color:"",}}>Relux Me</b><br/>
              <i>WEb Desinger</i><br/>
              <Button style={{marginTop:'20%',width:'100%',color:'white'}}>About Me</Button><br/>
              <Button style={{width:'100%',color:'white'}}>what I'm good at</Button><br/>
              <Button style={{width:'100%',color:'white'}}>My Work</Button><br/>
              <Button style={{width:'100%',color:'white'}}>Contact Me</Button><br/>
              <p style={{marginTop:'15%'}}><FacebookIcon/><TwitterIcon/><ElevenMpIcon/><InstagramIcon/><StreamIcon/><RssFeedIcon/></p>
          <p style={{marginTop:'15%'}}>Copyright 2019 Reflux Design</p> 
          <p style={{marginTop:'45%'}}>by temlatemo</p> 
          </Typography>
    </div>
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',backgroundImage: `url(${'./images/page-bg.jpg'})` }}>
      <CssBaseline />
      <AppBar sx={{background:'none'}}
      
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' , },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      {/* BIRINCHI SAHIFA    BIRINCHI SAHIFA    BIRINCHI SAHIFA     BIRINCHI SAHIFA       BIRINCHI SAHIFA*/}
      
      <Box sx={{marginTop:'',padding:'5%',textAlign:'center'}}>
    
        <Typography sx={{mb:'5%',color:'white'}}>
              <b style={{fontSize:'30px',}}>About Me</b>
              <p style={{fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quidem asperiores porro dolorem, laboriosam commodi asperiores porro dolorem ,sit amet consectetur
                   sapiente nulla recusandae iusto enim dolores, laboriosam commodi asperiores porro dolorem!</p>
          </Typography>

      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6}>
        <img style={{width:'100%',height:'100%',borderRadius:'5px'}} src='./images/left-image.jpg'/>
        </Grid>

        <Grid item xs={6}>
        <Typography sx={{textAlign:'start',color:'white',marginLeft:'10%'}}>
              <b style={{}}>Reflux HTML CSS Temlate</b>
              <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum. 
                 Eum nesciunt deleniti repudiandae numquam 
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum. 
                 Eum nesciunt deleniti repudiandae numquam.</p>
                 <Button variant="outlined" style={{marginBottom:'20%'}}>Read More</Button>
          </Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography sx={{textAlign:'start',color:'white',marginLeft:'5%'}}>
              <b style={{}}>Reflux HTML CSS Temlate</b>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum 
                 Nihil eius doloremque sed natus recusandae corrupti facilis consectetur eaque cum ipsum. 
                 Eum nesciunt deleniti repudiandae numquam.</p>
                 <Button variant="outlined" style={{marginBottom:'20%'}}>Read More</Button>
          </Typography>
        </Grid>

        <Grid item xs={6}>
        <img style={{width:'100%',height:'100%',borderRadius:'5px'}} src='./images/right-image.jpg'/>
        </Grid>
      </Grid>
    </Box>


        {/* IKKINCHI SAHIFA    IKKINCHI SAHIFA     IKKINCHI SAHIFA      IKKINCHI SAHIFA       IKKINCHI SAHIFA      IKKINCHI SAHIFA */}
    
     <Box sx={{marginTop:'',padding:'5%',color:'white'}}>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Typography style={{paddingTop:'5%'}}>
               <b>What I'm goot at?</b>
               <p style={{fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?
                    laborum optio provident? Vel possimus molestiae iste ab quidem?</p>
           </Typography>
        <Grid  item xs={6} sx={{opacity:'0.2'}}>
          <Item sx={{textAlign:'Start',color:'blue'}}>
              <Typography sx={{}}>
              <EmojiObjectsIcon/><br/>
              <b style={{}}>HTML5&CSS3 </b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo
                  vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} style={{bgcolor:'none',opacity:'0.2'}}>
          <Item sx={{textAlign:'Start',color:'blue'}}>
          <Typography>
              <CodeOffIcon/><br/>
              <b>Creatie Ideas</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo
                  vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{textAlign:'Start',color:'blue',opacity:'0.2'}}>
          <Typography>
              <SettingsIcon/><br/>
              <b>Easy Customize</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo
                  vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{textAlign:'Start',color:'blue',opacity:'0.2'}}>
          <Typography>
              <GestureIcon /><br/>
              <b>Admin Dashboard</b><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Tempora, vero placeat optio magni eum porro iste molestiae accusantium sequi quo
                  vero placeat optio magni eum porro iste molestiae accusantium sequi quo.</p>
                  </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>

    {/* UCINCHI QISMI                   UCINCHI QISMI                UCINCHI QISMI                  UCINCHI QISMI          */}


    <Box sx={{marginTop:'',padding:'5%'}}>
        <Typography sx={{color:'white',}}>
            <Typography sx={{color:'white', fontSize:'20px'}}>My Work</Typography>
            <Typography sx={{paddingTop:"20px", fontSize:'10px',color:'wheat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?</Typography>
            <Typography sx={{paddingTop:"50px"}}>All   <b>People    Nature    Animals</b></Typography>
        </Typography>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{opacity:''}}>
        {imag.map((imag, id) => (
          <Grid item xs={6} key={id} style={{bgcolor:'none'}}>
            <img src={imag.img} alt="" style={{height:'100%',width:'100%',borderRadius:'3px'}}/>

          </Grid>
        ))}
      </Grid>
    </Box>

    {/* torTINCH QISMI                  TORTINCHI QISMI                UCINCHI QISMI                  UCINCHI QISMI          */}
     
    <Box sx={{marginTop:'',padding:'5%'}}>
    <Typography sx={{paddingTop:'10%'}}>
    <Typography sx={{color:'white', fontSize:'20px'}}>Contact ME</Typography>
            <Typography sx={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?
                    Et vero error laborum optio provident? Vel possimus molestiae iste ab quidem?</Typography>
    </Typography>
      <Grid container spacing={3} >
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
  

    {/* torTINCH QISMI                  TORTINCHI QISMI                UCINCHI QISMI                  UCINCHI QISMI          */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
