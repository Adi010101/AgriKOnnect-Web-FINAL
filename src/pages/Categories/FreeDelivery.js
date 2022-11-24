import React from 'react';
import { Box, CssBaseline, Button, 
  GlobalStyles, IconButton, Toolbar, Typography,
  Paper, Fab, InputBase,styled, Grid, ListItemIcon, 
  List, Stack, ListItemText, ListItemButton} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import vegetables from '../../assets/vegetables.png';
import fruits from '../../assets/fruit.png';
import sale from '../../assets/sale.png';
import freedelivery from '../../assets/free-delivery.png';
import { Image } from 'mui-image';
import productimg from '../../assets/lettuce.png';
import * as BsIcon from "react-icons/bs";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollToTop';


//Styles
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
  basketbutton:{
    backgroundColor:'#31A05F',
    padding: 1,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
    },
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
}

const CategoriesButton = [
  {
    name: "Vegetables",
    path: '/vegetables',
    image: <Image duration = {0} src={vegetables} sx={classes.positionImage} height={150} width={150} />,
  },
  {
    name: "Fruits",
    path: '/fruits',
    image: <Image duration = {0} src={fruits} sx={classes.positionImage} height={150} width={150} />,
  },
  {
    name: "Sale",
    path: '/sale',
    image: <Image duration = {0} src={sale} sx={classes.positionImage} height={150} width={150} />,
  },
  {
    name: "Free Delivery",
    path: '/freedelivery',
    image: <Image duration = {0} src={freedelivery} sx={classes.positionImage} height={150} width={150} />,
  },
];
//Storing of tempdata
const BestSellerList = [
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  }
];

//List of Categories Containers
function InnerGrid() {
  const navigate = useNavigate();
  return (
    <>
    {CategoriesButton.map((item, index) => {
      const { name, image,path} = item;
        return (
          <Box>
              <Grid item xs={4} rowSpacing={1} key={index}>
                 <Button onClick={() => navigate(path)}>
                    <Box component="span" sx={{ p: 4, 
                      backgroundColor: '#31A05F',
                      borderRadius: 4,
                      width: 350,
                      height: 250, 
                      m: 3,
                      "&:hover": {
                        color: '#FFFF',
                        backgroundColor: '#388E3C',
                      }, }}>
                      {image && <ListItemIcon>{image}</ListItemIcon>}
                      {name && <Typography sx={classes.ButtonTitle}>{name}</Typography>}
                    </Box>
                  </Button>
              </Grid>
            </Box>
        );
    })}
    </>
  );
}

export default function FreeDelivery(props) {
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
        <Typography variant='h4' sx={classes.Header}>
          Categories
        </Typography>
        {/* Containers of Buttons */}
        <div style={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={0}>
              {/*Render the InnerGrid as a child item */}
              <InnerGrid />
            </Grid>
          </Grid>
        </div>
        <Typography variant='h4' sx={classes.Header}>
          Free Delivery
        </Typography>
        <List>
          {BestSellerList.map((item, index) => {
            const { name,image, priceperkg, price} = item;
            return (
              <Box sx={{ width: '100%', marginBottom: 1 }}>
                <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                  <Item key={index}>
                    <ListItemButton onClick={() => navigate('/productdetails')} alignItems="flex-start">
                      {image && <ListItemIcon>{image}</ListItemIcon>}
                      <ListItemText primary={name} secondary={<Typography
                      sx={{ display: 'inline',
                      fontFamily: 'Poppins',
                      fontWeight: 'bold',
                      color: '#000000',}}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {priceperkg}
                    </Typography>
                    } 
                      primaryTypographyProps={{ style: classes.producttitle }}
                      secondaryTypographyProps={{style: classes.productprice }}/>
                      <Button variant="contained" sx={classes.basketbutton}><BsIcon.BsBasket2Fill size={25}/></Button>
                    </ListItemButton>
                  </Item>
                </Stack>
              </Box>
            );
            })}
      </List>
      <ScrollTop {...props}>
        <Fab sx= {classes.ScrollTopButton} size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </Box>
  </Box>
  </>
  )
}