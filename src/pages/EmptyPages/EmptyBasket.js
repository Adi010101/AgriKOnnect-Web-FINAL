import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles, Toolbar, Typography,
    Paper, Radio, ButtonGroup,styled, Grid, ListItemIcon, 
    List, Stack, ListItem, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import { Image } from 'mui-image';
import basket from '../../assets/emptybasket.png';
import {useNavigate} from 'react-router-dom';

const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F645F',
      marginTop: 2,
    }, 
    HeaderSub: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        color: '#5F645F',
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SearchButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 10,
        p: 2,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    }
}

export default function EmptyBasket() {
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
                <Typography variant='h3' sx={classes.Header}>
                My Basket
                </Typography>
                <Stack direction='column'>
                <Box sx = {classes.illustration}>
                    <Image duration = {0} src={basket} height= {"50hv"} width= {"50hv"}></Image>
                </Box>    
                    <Typography variant='h5' sx={classes.HeaderSub}>
                    The basket is empty.
                    Try to explore items.
                    </Typography>
                <Box sx = {classes.illustration}>
                    <Button sx={classes.SearchButton} aria-label="add" onClick={() => navigate('/customer/home')}>
                        Search
                    </Button>
                </Box>
                </Stack>
            </Box>
        </Box>
    </>
  )
}
