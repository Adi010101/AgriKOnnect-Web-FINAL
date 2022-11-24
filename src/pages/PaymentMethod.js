import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles,FormControl, Toolbar, Typography,
    Paper, Radio ,styled,
     Stack, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image } from 'mui-image';
import cod from '../assets/cash-on-delivery.png';
import gcash from '../assets/gcash.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//Styles
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
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#000000',
      fontWeight: 'bold',
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#5F5B5B',
        marginLeft: 0,
        marginTop: 1,
    },
    SubmitButton: {
        fontFamily: 'Poppins',
        margin: 1,
        color: "#FFFF",
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#4DA351',
            },
    },
    ButtonContainer:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#00000',
        backgroundColor: '#FFFF',
        borderColor: '#D9D9D9',
       },
      TitleButton:{
        fontFamily: 'Poppins',
        color: '#000000',
        "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
        },
      },
      ArrowRight:{
        marginLeft: 20,
        "&:hover": {
          color: '#FFFF',
        },
      },
}
export default function PaymentMethod() {
    const navigate = useNavigate();
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [selectedMethod, setSelectedMethod] = React.useState('a');

    const onhandleChange = (event) => {
        setSelectedMethod(event.target.value);
    };
    const OncontrolProps = (item) => ({
        checked: selectedMethod === item,
        onChange: onhandleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

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
                      <Button onClick={() => navigate('/customer/home')}>
                          <ArrowBackIcon sx = {classes.arrowback}/>
                      </Button>
                      <Typography variant='h3' sx={classes.Header}>
                        PaymentMethod
                        </Typography>
                  </Stack>
                  <Box sx = {classes.illustration}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Box sx={{ width: '100%', marginBottom: 1 }}>
                                <Item sx={classes.ButtonContainer}>
                                    <ListItemButton>
                                    <Image duration={0} src={gcash} width={100}/>
                                    <ListItemText primaryTypographyProps={classes.TitleButton} primary={' Gcash e-wallet'}/>
                                    <ListItemIcon><Radio {...controlProps('c')} color="success" /></ListItemIcon>
                                    </ListItemButton>
                                </Item>
                            </Box>
                                <Box sx={{ width: '100%', marginBottom: 1 }}>
                                    <Item sx={classes.ButtonContainer}>
                                        <ListItemButton>
                                            <Image duration={0} src={cod} width={50} height={50}/>
                                        <ListItemText primaryTypographyProps={classes.TitleButton} primary={'Cash on Delivery'}/>
                                        <ListItemIcon> <Radio {... OncontrolProps('c')} color="success" /></ListItemIcon>
                                        </ListItemButton>
                                    </Item>
                                </Box>
                    </FormControl>
                </Box>
                <Box sx = {classes.illustration}>
                    <Stack direction='row'>
                        <Button sx={classes.SubmitButton} aria-label="add">
                            CONFIRM
                        </Button>
                    </Stack>
                </Box>
                </Box>
            </Box>
    </>
  )
}
