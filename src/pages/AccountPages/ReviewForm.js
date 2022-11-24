import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles,  Rating, Toolbar, Typography,
    Paper, TextField, InputBase,styled, Grid, ListItemIcon, 
    List, Stack, ListItem, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image } from 'mui-image';
import productimg from '../../assets/lettuce.png';


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
      marginLeft: 2,
    },
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#5F5B5B',
      fontSize: 25,
      marginBottom: 5,
    },
    SubmitButton: {
      fontFamily: 'Poppins',
      marginBottom: 5,
      color: "#FFFF",
      backgroundColor: '#388E3C'
    },
    ButtonTitle: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFF',
      textAlign: 'center'
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    producttitle:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000000',
    },
    productprice:{
      fontFamily: 'Poppins',
      color: '#000000',
    },
}

export default function ReviewForm() {
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
                    <Button onClick={() => navigate('/toreview')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                    <Typography variant='h3' sx={classes.Header}>
                    Write Review
                    </Typography>
                </Stack>
                <Stack direction='column'>
                    <Box sx = {classes.illustration}>
                        <Image duration = {0} src={productimg} height= {"50hv"} width= {"50hv"}></Image>
                    </Box>    
                    <Box sx = {classes.illustration}>
                        <Typography variant='h5' sx={classes.producttitle}>
                        Patatas
                        </Typography>
                    </Box>
                    <Box sx = {classes.illustration}>
                        <Typography variant='h5' sx={classes.productprice}>
                        5kg
                        </Typography>
                    </Box>
                    <Box sx = {classes.illustration}>
                        <Rating name="no-value" value={null} />
                    </Box>
                    <Box sx = {classes.illustration}>
                        <Typography sx={classes.productprice}>
                        What's your product experience?
                        </Typography>
                    </Box>
                    <Box sx = {classes.illustration}>
                        <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows="3"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        sx={{backgroundColor: '#D9D9D9'}}
                        />
                    </Box>
                        <Box sx = {classes.illustration}>
                        <Button sx={classes.SubmitButton} aria-label="add" onClick={() => navigate('/customer/home')}>
                            SUBMIT
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Box>  
    </>
  )
}
