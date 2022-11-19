import React from 'react';
import { Box, 
  Typography,
  Toolbar,
  Paper, } from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import {useNavigate} from 'react-router-dom';
import EmptyLineChart from '../components/EmptyLIneChart';

//ScreenSize
const drawerWidth = 240;

//Styles
const classes = {
  root: {
    backgroundColor: 'blue'
  },
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#5F645F',
    marginBottom: 2,
  },
  SubHeader: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#31A05F',
    marginTop: 5,
    marginBottom: 2,
  },
  SubTitle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#31A05F',
    marginTop: 2,
    marginBottom: 2,
  },
};

export default function EmptyHome (props) {
  return (
  <>
  <Box sx={{ display: 'flex' }}>
  <ResponsiveDrawer/>
  <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant='h3' sx={classes.Header}>
          Dashboard
        </Typography>
        <Box m="20px">
          <Typography variant='h5' sx={classes.SubTitle}>
              Sales Report
          </Typography>
          <Paper elevation={4} sx={{backgroundColor: '#FFFF', borderRadius: 2}}>
          <Box height="75vh" variant="outlined">
            <EmptyLineChart/>
          </Box>
          </Paper>
        </Box>
        <Typography variant='h4' sx={classes.SubHeader}>
          Recent Sold
        </Typography>
      </Box>
  </Box>
  </>
  );
};
