import React from 'react'
import { Box, CssBaseline, Button, 
    GlobalStyles,IconButton, Toolbar, Typography,
    Paper, ListItemAvatar, InputBase,styled, Grid, ListItemIcon, 
    List, Stack, ListItemButton, ListItemText, Avatar, Divider} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image } from 'mui-image';
import productimg from '../../assets/lettuce.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

  
  
//Styles
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
  
const classes = {
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#000000',
      fontWeight: 'bold',
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000000',
      marginLeft: 5,
    },
    rate:{
        fontFamily: 'Poppins',
        color: '#000000',
        marginLeft: 1,
    },
    comment:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 5,
    },
    productprice:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000000',
    },
    SubmitButton: {
        fontFamily: 'Poppins',
        margin: 1,
        color: "#FFFF",
        backgroundColor: '#388E3C'
    },
    VisitButton:{
        fontFamily: 'Poppins',
        marginLeft: 15,
        color: "#FFFF",
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#4DA351',
           },
    },
    ViewAllButton:{
        color: "#388E3C",
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#4DA351',
           },
    },
}

//Storing of tempdata
const ReviewsList = [
    {
      name: "Althea Baculi",
      comment: "nice",
    },
    {
        name: "Althea Baculi",
        comment: "nice",
    },
];
  
export default function ProductDetails() {
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
                    <Button onClick={() => navigate('/customer/home')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                </Stack>
                <Stack direction='column' spacing={2}>
                    <Box sx = {classes.illustration}>
                        <Image duration = {0} src={productimg} height= {"50hv"} width= {"50hv"}></Image>
                    </Box>    
                    <Box sx = {classes.illustration}>
                        <Typography variant='h5' sx={classes. SubHeader}>
                        Patatas
                        </Typography>
                    </Box>
                    <Typography variant='h5' sx={classes. SubHeader}>
                        Product Category:
                    </Typography>
                    <Typography variant='h6' sx={classes.productprice}>
                        Vegetable
                    </Typography>
                    <Divider/>
                    <Typography variant='h5' sx={classes.SubHeader}>
                        Growing Method:
                    </Typography>
                    <Typography variant='h6' sx={classes.productprice}>
                        Organic
                    </Typography>
                    <Divider/>
                        <Typography variant='h5' sx={classes.SubHeader}>
                            Price
                        </Typography>
                        <Typography variant='h6' sx={classes.productprice}>
                            P 50.00
                        </Typography>
                        <Divider/>
                        <Typography variant='h5' sx={classes.SubHeader}>
                            Quantity
                        </Typography>
                        <Typography variant='h6' sx={classes.productprice}>
                            24 kilogram
                        </Typography>
                    <Divider/>
                    <Stack direction='row' spacing={5}>
                        <Avatar sizes='normal'></Avatar>
                        <Typography variant='h6' sx={classes.productprice}>
                            Seller Name
                        </Typography>
                        <Button sx={classes.VisitButton} onClick={() => navigate('/sellerdetails')}>
                            VISIT
                        </Button>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <Typography variant='h5' sx={classes.productprice}>
                            Reviews
                        </Typography>
                        <IconButton sx={classes.ViewAllButton} onClick={() => navigate('/allreviews')}>
                        <ArrowForwardIosIcon/>
                        </IconButton>
                    </Stack>
                    <List>
                        {ReviewsList.map((item, index) => {
                            const { name,comment, image} = item;
                            return (
                            <Box sx={{ width: '100%', marginBottom: 1 }}>
                                <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                                <Item key={index}>
                                    <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sizes='normal'>{image}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={comment} 
                                    primaryTypographyProps={{ style: classes.name }}
                                    secondaryTypographyProps={{style: classes.comment }}/>
                                    </ListItemButton>
                                </Item>
                                </Stack>
                            </Box>
                            );
                            })}
                    </List>
                    <Box sx = {classes.illustration}>
                        <Stack direction='row'>
                            <Button sx={classes.SubmitButton} aria-label="add" onClick={() => navigate('/customer/home')}>
                                ADD TO BASKET
                            </Button>
                            <Button sx={classes.SubmitButton} aria-label="add" onClick={() => navigate('/customer/home')}>
                                BUY NOW
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    </>
  )
}
