import React from 'react';
import { Box, 
  Button,
  Typography,
  Paper,
  Toolbar,
  IconButton,
  InputBase,
  Fab,
  Grid,
  ListItem,
  ListItemText,
  ListItemIcon,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Image } from 'mui-image';
import AddIcon from '@mui/icons-material/Add';
import ResponsiveDrawer from '../components/Drawer';
import productimg from '../assets/lettuce.png';
import {useNavigate} from 'react-router-dom';

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
  AddButton:{
    backgroundColor: '#31A05F',
    position:'fixed',
    bottom:40,
	  right:40,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
    },
  },
  addIcon: {
    color: '#FFFF',
  },
  positionImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    duration: 0,
  },
  positionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  EditButton: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    backgroundColor:'#F5E12A',
    color: '#000000',
    padding: 1,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
    },
  },
  ProductTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  QuantityTitle: {
    fontFamily: 'Poppins',
    color: '#000000',
    textAlign: 'center'
  },

};

//Storing of tempdata
const RecentSoldList = [
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  },
  {
    name: "Pechay",
    quantity: "25 kg",
    path: '/',
    image: <Image duration = {0} src={productimg} sx={classes.positionImage} height={100} width={100} />,
  }
];

//List of Product Containers
function InnerGrid() {
  const navigate = useNavigate();
  return (
    <>
    {RecentSoldList.map((item, index) => {
      const { name,quantity, image, path} = item;
        return (
          <Grid item xs={4} key={index}>
                <Paper style={classes.paper}>
                <ListItem sx={classes.positionImage}>
                {image && <ListItemIcon>{image}</ListItemIcon>}
                </ListItem>
                <ListItem>
                <ListItemText primaryTypographyProps={classes.ProductTitle} 
                secondaryTypographyProps={classes.QuantityTitle}
                primary={name} secondary={quantity}/>
                </ListItem>
                <ListItem sx={classes.positionButton}>
                <Button variant="contained" onClick={() => navigate('/products/edit')} sx={classes.EditButton}>EDIT</Button>
              </ListItem>
              </Paper>
          </Grid>
        );
    })}
    </>
  );
}

export default function Products() {
  //navigation
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
        </Box>
        <Fab sx={classes.AddButton} aria-label="add" onClick={() => navigate('/products/add')}>
         <AddIcon sx={classes.addIcon}/>
        </Fab>
        {/* Containers of Products */}
        <div style={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              {/*Render the InnerGrid as a child item */}
              <InnerGrid />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  )
}
