import React from 'react';
import { Box, 
    Typography,
    Paper,
    Toolbar,
    IconButton,
    InputBase,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ResponsiveDrawer from '../components/Drawer';

//ScreenSize
const drawerWidth = 240;
//Styles
const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue"
    },
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F645F',
      marginBottom: 5,
    },
    SearchButton: {
      fontFamily: 'Poppins',
      marginBottom: 5,
      backgroundColor: '#DCDCDC'
    },  
    Message: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000000',
    }
};


export default function NoSearchResult() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant='h3' sx={classes.Header}>
          My Products
        </Typography>
        <Box>
          <Paper component="form" elevation={1} sx={classes.SearchButton}>
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontFamily: 'Poppins', }}
              placeholder="Search product"
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Paper>
          <Typography sx={classes.Message}>
          0 results found
        </Typography>
        </Box>
    </Box>
    </Box>
  )
}
