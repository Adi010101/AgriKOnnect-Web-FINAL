import React from 'react';
import { Box, 
    Button, 
    Stack,
    styled,
    Paper,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Fab} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import { Image } from 'mui-image';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import productimg from '../assets/lettuce.png';
import {useNavigate} from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/ScrollToTop';


const drawerWidth = 240;
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
      color: '#5F645F',
      marginTop: 1,
      marginLeft: 2,
    },
    arrowback:{
        color: '#5F645F',
        width: 50,
        height: 50,
    },
    IconPosition:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon:{
        width: 200,
        height: 200,
        margin: 1,
    },
    TextPosition:{
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 1,
    },
    label: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginTop: 2,
    },
    producttitle: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginLeft: 5,
      },
      productsub : {
        fontFamily: 'Poppins',
        marginLeft: 5,
      },
      viewbutton: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        backgroundColor:'#31A05F',
        padding: 1,
        "&:hover": {
          color: '#FFFF',
          backgroundColor: '#388E3C',
        },
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
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      comment: "Fast transaction.",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      comment: "Fast transaction.",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
    {
      name: "Pechay",
      reviews: "12",
      path: "/account/review/product",
      image: <Image duration = {0} src={productimg} height={50} width={50} />,
    },
];



export default function Reviews(props) {
    const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar id="back-to-top-anchor"/>
        <Stack direction='row'>
            <Button onClick={() => navigate('/account')}>
            <ArrowBackIcon sx = {classes.arrowback}/>
            </Button>
            <Typography variant='h4' sx={classes.Header}>
                Reviews
            </Typography>
        </Stack>
        <List>
              {RecentSoldList.map((item, index) => {
                const { name,reviews, image,path} = item;
                return (
                  <Box sx={{ width: '100%', marginBottom: 1 }}>
                    <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                      <Item key={index}>
                        <ListItemButton onClick={() => navigate(path)}>
                          {image && <ListItemIcon>{image}</ListItemIcon>}
                          <ListItemText primary={name} secondary={reviews} 
                          primaryTypographyProps={{ style: classes.producttitle }}
                          secondaryTypographyProps={{style: classes.productsub }}/>
                        </ListItemButton>
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
