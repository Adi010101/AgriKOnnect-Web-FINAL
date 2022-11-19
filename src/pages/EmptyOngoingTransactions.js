import React from 'react';
import { Box, 
    Button,
    ButtonGroup,
    Typography,
    Toolbar,} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import {useNavigate} from 'react-router-dom';

//ScreenSize
const drawerWidth = 240;
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
      backgroundColor: '#388E3C',
      borderColor: '#FFFF',
      borderRadius: 2,
      color: '#FFFF',
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#6FCF97',
        borderColor: '#FFFF',
      },
    },
    DeliveredButton:{
      width: 500,
      fontSize: 20,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      backgroundColor: '#6FCF97',
      borderRadius: 2,
      color: '#FFFF',
      borderColor: '#FFFF',
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
        borderColor: '#FFFF',
      },
    },
    Message: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000000',
    },
    SubMessage: {
        fontFamily: 'Poppins',
        color: '#000000',
    }
}

export default function EmptyOngoingTransactions() {
    const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
    <ResponsiveDrawer/>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <Typography variant='h3' sx={classes.Header}>
        Transaction History
      </Typography>
      <ButtonGroup sx={classes.positionButton}>
        <Button sx={classes.OngoingButton} onClick={() => navigate('/transactions/ongoing/empty')}>Ongoing</Button>
        <Button sx={classes.DeliveredButton} onClick={() => navigate('/transactions/delivered/empty')}>Delivered</Button>
      </ButtonGroup>
        <Typography sx={classes.Message}>
        0 Transaction
        </Typography>
        <Typography sx={classes.SubMessage}>
        No transaction available
        </Typography>
    </Box>
    </Box>
  )
}
