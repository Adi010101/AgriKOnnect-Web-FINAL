import React from 'react'
import { Box, 
  Button,
  ButtonGroup,
  Typography,
  Toolbar,
  Stack,
  Paper, 
  styled,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Fab,} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import { Image } from 'mui-image';
import productimg from '../assets/lettuce.png';
import {useNavigate} from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/ScrollToTop';

//ScreenSize
const drawerWidth = 240;

//Styles
const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));
const classes = {
Header: {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#5F645F',
},
positionButton:{
  display: 'flex',
  alignItems: 'center',
  marginBottom: 5,
  justifyContent: 'center',
},
OngoingButton:{
  width: 500,
  fontSize: 20,
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  backgroundColor: '#6FCF97',
  borderColor: '#FFFF',
  borderRadius: 2,
  color: '#FFFF',
  "&:hover": {
    color: '#FFFF',
    backgroundColor: '#388E3C',
    borderColor: '#FFFF',
  },
},
DeliveredButton:{
  width: 500,
  fontSize: 20,
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  backgroundColor: '#388E3C',
  borderRadius: 2,
  color: '#FFFF',
  borderColor: '#FFFF',
  "&:hover": {
    color: '#FFFF',
    backgroundColor: '#6FCF97',
    borderColor: '#FFFF',
  },
},
producttitle: {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  marginLeft: 5,
},
productsub: {
  fontFamily: 'Poppins',
  marginLeft: 5,
},
check: {
  color:'#31A05F',
},
ScrollTopButton:{
  color: 'white',
  backgroundColor: '#4DA351',
  "&:hover": {
    color: '#FFFF',
    backgroundColor: '#31A05F',
  },
},
}

//Storing of tempdata
const RecentSoldList = [
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
];

export default function Delivered(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar id="back-to-top-anchor"/>
        <Typography variant='h3' sx={classes.Header}>
          Transaction History
        </Typography>
        <ButtonGroup sx={classes.positionButton}>
          <Button sx={classes.OngoingButton} onClick={() => navigate('/transactions/ongoing')}>Ongoing</Button>
          <Button sx={classes.DeliveredButton} onClick={() => navigate('/transactions/delivered')}>Delivered</Button>
        </ButtonGroup>
        <List>
              {RecentSoldList.map((item, index) => {
                const { name,date, image, path} = item;
                return (
                  <Box sx={{ width: '100%', marginBottom: 1 }}>
                    <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                      <Item key={index}>
                        <ListItem>
                          {image && <ListItemIcon>{image}</ListItemIcon>}
                          <ListItemText primary={name} secondary={date} 
                          primaryTypographyProps={classes.producttitle }
                          secondaryTypographyProps={classes.productsub}/>
                          {<CheckCircleIcon/> && <ListItemIcon><CheckCircleIcon sx={classes.check}/></ListItemIcon>}
                        </ListItem>
                      </Item>
                    </Stack>
                  </Box>
                );
                })}
        </List>
      </Box>
      <ScrollTop {...props}>
        <Fab sx= {classes.ScrollTopButton} size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}

