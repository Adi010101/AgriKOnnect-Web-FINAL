import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles,FormControl, Toolbar, Typography,
    Paper, FormHelperText , Select ,styled, MenuItem, TextField, 
     Stack, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image } from 'mui-image';
import productimg from '../assets/lettuce.png';
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
    labelItem: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#00000',
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
    },
    SubmitButton: {
        fontFamily: 'Poppins',
        margin: 1,
        color: "#FFFF",
        backgroundColor: '#388E3C'
    },
    ButtonContainer:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#00000',
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
       },
      TitleButton:{
        fontFamily: 'Poppins',
        color: '#00000',
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

export default function Checkout() {
    const navigate = useNavigate();
    const [voucher, setVoucher] = React.useState('');
    const onhandleChange = (event) => {
        setVoucher(event.target.value);
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
                      <Button onClick={() => navigate('/customer/home')}>
                          <ArrowBackIcon sx = {classes.arrowback}/>
                      </Button>
                      <Typography variant='h3' sx={classes.Header}>
                        Checkout Details
                        </Typography>
                  </Stack>
                  <Stack direction='column' spacing={2}>
                      <Box sx = {classes.illustration}>
                          <Image duration = {0} src={productimg} height= {"50hv"} width= {"50hv"}></Image>
                      </Box>    
                      <Box sx = {classes.illustration}>
                          <Typography variant='h5' sx={classes. SubHeader}>
                          Patatas
                          </Typography>
                      </Box>
                      <Box sx = {classes.illustration}>
                          <Typography variant='h5' sx={classes. SubHeader}>
                          ₱ 50.00
                          </Typography>
                      </Box>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <FormHelperText sx={classes.label}>Shipping Address</FormHelperText>
                        <Box sx={{ width: '100%', marginBottom: 1 }}>
                            <Item sx={classes.ButtonContainer}>
                                <ListItemButton onClick={() => navigate('/selectaddress')}>
                                <ListItemText primaryTypographyProps={classes.TitleButton} primary={'Brgy.Ipilan'}/>
                                <ListItemIcon><KeyboardArrowRightIcon sx={classes.ArrowRight}/></ListItemIcon>
                                </ListItemButton>
                            </Item>
                        </Box>
                        <FormHelperText sx={classes.label}>Select Payment Method</FormHelperText>
                            <Box sx={{ width: '100%', marginBottom: 1 }}>
                                <Item sx={classes.ButtonContainer}>
                                    <ListItemButton onClick={() => navigate('/paymentmethod')}>
                                    <ListItemText primaryTypographyProps={classes.TitleButton} primary={'Cash on Delivery'}/>
                                    <ListItemIcon><KeyboardArrowRightIcon sx={classes.ArrowRight}/></ListItemIcon>
                                    </ListItemButton>
                                </Item>
                            </Box>
                        <FormHelperText sx={classes.label}>Voucher</FormHelperText>
                            <Select
                            value={voucher}
                            onChange={onhandleChange}
                            displayEmpty
                            sx={classes.labelItem}
                            >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={"0"}> ₱ </MenuItem>
                        </Select>
                        <FormHelperText sx={classes.label}>Subtotal</FormHelperText>
                        <TextField
                            hiddenLabel
                            id="subtotal"
                            defaultValue="₱ 100.00"
                            sx={classes.labelItem}
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <FormHelperText sx={classes.label}>Order Amount (Fees included)</FormHelperText>
                        <TextField
                            hiddenLabel
                            id="orderamount"
                            defaultValue="₱ 100.00"
                            sx={classes.labelItem}
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                </FormControl>
                <Box sx = {classes.illustration}>
                    <Stack direction='row'>
                        <Button sx={classes.SubmitButton} aria-label="add">
                            PLACE ORDER
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </Box>
      </>
    )
}
  