import React from 'react';
import { Box, CssBaseline, Button, 
  GlobalStyles, IconButton, Toolbar, Typography,
  Divider, ListItemButton,styled, Grid, ListItemIcon, 
  List, Stack, Paper, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import * as FaIcon from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
//Icons
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RateReviewIcon from '@mui/icons-material/RateReview';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const classes = {
  root: {
    flexGrow: 1
  },
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#5F5B5B',
    marginTop: 5,
  },
  position:{
    display: 'flex',
    alignItems: 'center',
      justifyContent: 'center',
  },
  ButtonTitle:{
    fontFamily: 'Poppins',
    color: '#5F5B5B',
  },
  buttonhover:{
    "&:hover": {
      backgroundColor: '#F4F4F4',
    },
  },
  Icon: {
    "&:hover": {
      color: '#FFFF',
    },
  },
  ButtonContainer:{
    fontFamily: 'Poppins',
    backgroundColor:'#FFFF',
    padding: 1,
    "&:hover": {
    color: '#FFFF',
    backgroundColor: '#388E3C',
   },
  },
  ArrowRight:{
    marginLeft: 20,
    "&:hover": {
      color: '#FFFF',
    },
  },
}

const CategoriesButton = [
  {
    name: "To Pay",
    path: '/topay',
    image: <IoIcons.IoWallet size={50}/>,
  },
  {
    name: "To Ship",
    path: '/toship',
    image: < MdIcons.MdLocalShipping size={50}/>,
  },
  {
    name: "To Receive",
    path: '/toreceive',
    image: < GrIcons.GrDropbox size={50}/>,
  },
  {
    name: "To Review",
    path: '/toreview',
    image: < MdIcons.MdRateReview size={50}/>,
  },
];

  //Storing of data for buttons
  const ButtonList = [
    {
      name: "Recent Transactions",
      path: '/customer/account/recenttransactions',
      icon: <ReceiptLongIcon sx={classes.Icon}/>,
      backicon: <KeyboardArrowRightIcon sx={classes.ArrowRight}/>,
    },
    {
      name: "Coupon/Discounts",
      path: '/customer/account/discounts',
      icon: <ConfirmationNumberIcon sx={classes.Icon}/>,
      backicon: <KeyboardArrowRightIcon sx={classes.ArrowRight}/>,
    },
    {
      name: "Review",
      path: '/customer/account/review',
      icon: <RateReviewIcon sx={classes.Icon}/>,
      backicon: <KeyboardArrowRightIcon sx={classes.ArrowRight}/>,
    },
    {
      name: "Logout",
      path: '/',
      icon: <LogoutIcon sx={classes.Icon}/>,
      backicon: <KeyboardArrowRightIcon sx={classes.ArrowRight}/>,
    },
  ];

//List of To pages
function InnerGrid() {
  const navigate = useNavigate();
  return (
    <>
    {CategoriesButton.map((item, index) => {
      const { name, image,path} = item;
        return (
          <Box>
              <Grid item xs={4} rowSpacing={1} key={index}>
                 <Button sx = {classes.buttonhover} onClick={() => navigate(path)}>
                      <Box component="span" sx={{ p: 4, 
                        backgroundColor: '#F4F4F4',
                        borderRadius: 4,
                        boxShadow: 10,
                        width: 190,
                        height: 120, 
                        m: 15,
                        "&:hover": {
                          color: '#FFFF',
                          backgroundColor: '#388E3C',
                        }, }}>
                        <Stack direction='row'>
                          {image && <ListItemIcon>{image}</ListItemIcon>}
                          {name && <Typography sx={classes.ButtonTitle}>{name}</Typography>}
                        </Stack>
                      </Box>
                  </Button>
              </Grid>
            </Box>
        );
    })}
    </>
  );
}

export default function CustomerAccount() {
  const navigate = useNavigate();
  return (
    <>
    <CssBaseline />
      <GlobalStyles
        styles={{
        body: { backgroundColor: "#F4F4F4" },
        }}
      />
      <CustomerResponsiveAppBar/>
      <Box component="main" sx={{ p: 3 }}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar id="back-to-top-anchor"/>
          <Box sx={classes.position}>
            <IconButton  onClick={() => navigate('/customer/editaccount')}>
              <Box sx={{backgroundColor: '#D9D9D9', p: 5}}>
                <FaIcon.FaUserEdit color = {'#388E3C'} size={100}/>
              </Box>
            </IconButton>
          </Box>
          <Box sx={classes.position}>
              <Typography variant='h3' sx={classes.Header}>
                User!
              </Typography>
          </Box>
          <Box sx={classes.position}>
              <Typography sx={classes.SubHeader}>
                User@gmail.com
              </Typography>
          </Box>
           {/* Containers of Buttons */}
           <div style={classes.root}>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={0}>
                  {/*Render the InnerGrid as a child item */}
                  <InnerGrid />
                </Grid>
              </Grid>
            </div>
            <Divider/>
            {/* Buttons for transactions, discounts etc.. */}
            <List>
              {ButtonList.map((item, index) => {
                const { name,backicon, icon, path} = item;
                return (
                  <Box sx={{ width: '100%', marginBottom: 1 }}>
                    <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                      <Item sx={classes.ButtonContainer} key={index}>
                        <ListItemButton onClick={() => navigate(path)}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText primaryTypographyProps={classes.TitleButton} primary={name}/>
                          {backicon && <ListItemIcon>{backicon}</ListItemIcon>}
                        </ListItemButton>
                      </Item>
                    </Stack>
                  </Box>
                );
                })}
          </List>
        </Box>
      </Box>
    </>
  )
}
