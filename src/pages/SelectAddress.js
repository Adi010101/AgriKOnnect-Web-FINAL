import React from 'react'
import { Box, CssBaseline, Button, 
    GlobalStyles, Toolbar, Typography,
    Paper, Link, styled, ListItemIcon, 
    List, Stack, ListItem, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import location from '../assets/location.png';
import { Image } from 'mui-image';
import AddIcon from '@mui/icons-material/Add';




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
      marginLeft: 2,
    },
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#5F5B5B',
      fontSize: 25,
      marginBottom: 5,
    },
    SearchButton: {
      fontFamily: 'Poppins',
      marginBottom: 5,
      backgroundColor: '#FFFFFF'
    },
    ButtonTitle: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFF',
      textAlign: 'center'
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    producttitle:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000000',
    },
    productprice:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000000',
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

//Storing of tempdata
const AddressList = [
    {
      name: "Althea Baculi",
      address: "Brgy. Ipilan, Intertown, Tayabas",
      icon: <Image duration={0} src={location} width={50} height={50}/>
    },
];

export default function SelectAddress() {
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
                <Stack direction='row'>
                    <Button onClick={() => navigate('/checkout')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                    <Typography variant='h3' sx={classes.Header}>
                    Select Shipping Address
                    </Typography>
                </Stack>
                <List>
                    {AddressList.map((item, index) => {
                        const { name,address,icon} = item;
                        return (
                        <Box sx={{ width: '100%', marginBottom: 1 }}>
                            <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                                <Item key={index}>
                                    <ListItem alignItems="flex-start">
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={name} secondary={<Typography
                                    sx={{ display: 'inline',
                                    fontFamily: 'Poppins',
                                    color: '#000000',}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                    >
                                    {address}
                                    </Typography>
                                    } 
                                    primaryTypographyProps={{ style: classes.producttitle }}
                                    secondaryTypographyProps={{style: classes.productprice }}/>
                                     <Link sx={{color: '#37893B'}} href="/editaddress" variant="body1">
                                    {"Edit"}
                                    </Link>
                                    </ListItem>
                                </Item>
                            </Stack>
                        </Box>
                        );
                        })}
                </List>
                <Box sx = {classes.illustration}>
                    <Button sx={{borderColor: '#37893B',
                color: '#37893B',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                "&:hover": {
                    color: '#FFFF',
                    backgroundColor: '#388E3C',
                    borderColor: '#388E3C',
                },}}variant="outlined" onClick={() => navigate('/addaddress')}><AddIcon/>
                Add Address</Button>
                </Box>
            </Box>
        </Box>
    </>
  )
}