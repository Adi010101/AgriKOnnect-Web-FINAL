import React from 'react';
import { Box, 
    Button,
    Typography,
    Toolbar,
    Stack,} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import { Image } from 'mui-image';
import Ecommerce from '../assets/e-commerce-empty.png';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;
//Styles
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F645F',
      marginBottom: 5,
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
    AddButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 10,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    }
}

export default function EmptyProductPage() {
    //navigation
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer/>
        <Box
            component="main"
            sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Typography variant='h4' sx={classes.Header}>
                Welcome, User!
            </Typography>
            <Stack direction='column'>
                <Box sx = {classes.illustration}>
                    <Image durationg = {0} src={Ecommerce} height= {"50hv"} width= {"50hv"}></Image>
                </Box>    
                    <Typography variant='h5' sx={classes.HeaderSub}>
                    You can now post your products.
                    </Typography>
                <Button sx={classes.AddButton} aria-label="add" onClick={() => navigate('/products/add')}>
                    ADD PRODUCT
                </Button>
            </Stack>
        </Box>
    </Box>
  )
}
