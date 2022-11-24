import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles, IconButton, Toolbar, Typography,
    Paper, Fab, InputBase,styled, Grid, ListItemIcon, 
    List, Stack, ListItem, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import SearchIcon from '@mui/icons-material/Search';
import error from '../../assets/customer-error.png';
import { Image } from 'mui-image';

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
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubText:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000000',
    },
}

export default function NoSearchFound() {
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
                Hi, User!
                </Typography>
                <Typography sx={classes.SubHeader}>
                What would you buy today?
                </Typography>
                <Box>
                    <Paper component="form" elevation={1} sx={classes.SearchButton}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon />
                        </IconButton>
                        <InputBase
                        sx={{ ml: 1, flex: 1, fontFamily: 'Poppins', }}
                        placeholder="Search by item name"
                        inputProps={{ 'aria-label': 'Search' }}
                        />
                    </Paper>
                </Box>
                <Typography sx={classes.SubText}>
                0 results found
                </Typography>
                <Box sx = {classes.illustration}>
                    <Image duration = {0} src={error} height= {500} width= {500}></Image>
                </Box>  
            </Box>
        </Box>
    </>
  )
}
