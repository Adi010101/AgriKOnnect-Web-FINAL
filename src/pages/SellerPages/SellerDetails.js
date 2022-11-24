import React from 'react'
import { Box, CssBaseline, Button, 
    GlobalStyles, Toolbar, Typography,
    Paper, Fab, styled, ButtonGroup, 
    List, Stack, ListItem, ListItemText, ListItemIcon, Avatar} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollToTop';
import { Image } from 'mui-image';
import productimg from '../../assets/lettuce.png';
import * as BsIcon from "react-icons/bs";
import { DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddtoCartImage from '../../assets/AddtoCart.png';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F5B5B',
      marginTop: 5,
      marginLeft: 2,
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    image: {
      width: 250,
      height: 250,
      marginLeft: 10,
      marginTop: 1,
      marginBottom: 5,
    },
    sellername:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      fontSize: 45,
      marginTop: 10,
    },
    positionButton:{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 5,
      justifyContent: 'center',
    },
    basketbutton:{
      backgroundColor:'#31A05F',
      padding: 1,
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
      },
    },
    VegButton:{
      width: 500,
      fontSize: 20,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      backgroundColor: '#FFFFFF',
      borderColor: '#388E3C',
      borderRadius: 2,
      color: '#37893B',
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
        borderColor: '#FFFF',
      },
    },
    FruitsButton:{
      width: 500,
      fontSize: 20,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
      color: '#37893B',
      borderColor: '#37893B',
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
        borderColor: '#FFFF',
      },
    },
}

//Storing of tempdata
const RecentSoldList = [
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
]

export default function StoreDetails(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
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
                    <Button onClick={() => navigate('/productdetails')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                    <Typography variant='h3' sx={classes.Header}>
                    Seller Details
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={10}> 
                  <Avatar sx={classes.image}></Avatar>
                  <Typography sx={classes.sellername}>Seller</Typography>
                </Stack>
                <ButtonGroup sx={classes.positionButton}>
                  <Button sx={classes.VegButton} onClick={() => navigate('/seller/vegetables')}>Vegetables</Button>
                  <Button sx={classes.FruitsButton} onClick={() => navigate('/seller/fruits')}>Fruits</Button>
              </ButtonGroup>
                <Typography variant='h3' sx={classes.Header}>
                    Sale
                </Typography>
                  <List>
                    {RecentSoldList.map((item, index) => {
                      const { name,date, image, path} = item;
                      return (
                        <Box sx={{ width: '100%', marginBottom: 1 }}>
                          <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                            <Item key={index}>
                              <ListItem>
                                {image && <ListItemIcon>{image}</ListItemIcon>}
                                <ListItemText primary={name} secondary={date} 
                                primaryTypographyProps={classes.producttitle }
                                secondaryTypographyProps={classes.productsub}/>
                                <Button variant="contained" onClick={handleClickOpen} sx={classes.basketbutton}><BsIcon.BsBasket2Fill size={25}/></Button>
                              </ListItem>
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
       {/* Dialog for added to cart */}
       <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
            <Image duration = {0} src={AddtoCartImage}/>
          <DialogTitle id="alert-dialog-title"
          sx= {{color: '#5F5B5B',fontFamily: 'Poppins',
          fontWeight: 'bold', textAlign: 'center',fontSize: 25}}>
            {"Gotcha!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"
            sx = {{color: '#5F5B5B',fontFamily: 'Poppins',
            textAlign: 'center', fontSize: 20}} >
             Item successfully added to your basket!
            </DialogContentText>
          </DialogContent>
          <DialogActions sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button sx={{fontFamily: 'Poppins', fontWeight: 'bold', backgroundColor: '#388E3C', 
            color: '#FFFF', padding: 1,
            "&:hover": {
                color: '#FFFF',
                backgroundColor: '#388E3C',
            },}} 
            onClick={handleClose}>HOME</Button>
            <Button 
            sx={{fontFamily: 'Poppins', fontWeight: 'bold', backgroundColor: '#388E3C', 
            color: '#FFFF', padding: 1,
            "&:hover": {
                color: '#FFFF',
                backgroundColor: '#388E3C',
            },}} onClick={() => navigate('/customer/basket')} autoFocus>
              GO TO BASKET
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}