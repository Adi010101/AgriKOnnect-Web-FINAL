import React from 'react'
import { Box, CssBaseline, Button, 
    GlobalStyles, Toolbar, Typography,
    FormHelperText, TextField, FormControl, 
    Autocomplete, Stack} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MuiTelInput } from 'mui-tel-input';
import { brgylist as data } from '../data/barangay';

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
    SubmitButton: {
        fontFamily: 'Poppins',
        marginBottom: 5,
        color: "#FFFF",
        backgroundColor: '#388E3C'
    },
    arrowback:{
        color: '#111111',
        width: 50,
        height: 50,
        marginTop: 5,
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
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default function AddAddress() {
    const navigate = useNavigate();
    const options = data.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });
    const OnhandleChange = (newPhone) => {
        setPhone(newPhone)
      }
      const [phone, setPhone] = React.useState('')
    const [brgy, setBrgy] = React.useState('');

    const handleChange = (event) => {
        setBrgy(event.target.value);
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
                    <Button onClick={() => navigate('/checkout')}>
                        <ArrowBackIcon sx = {classes.arrowback}/>
                    </Button>
                    <Typography variant='h3' sx={classes.Header}>
                    Add Shipping Address
                    </Typography>
                </Stack>
                <Stack direction='column' sx={{marginTop: 5}} spacing={5}>  
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <FormHelperText sx={classes.label}>Recepient's Name</FormHelperText>
                        <TextField
                            hiddenLabel
                            id="name"
                            defaultValue=""
                            sx={classes.labelItem}
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <FormHelperText sx={classes.label}>Phone Number</FormHelperText>
                        <MuiTelInput 
                        fullWidth 
                        id="phonenumber"
                        name="phonenumber"
                        defaultCountry={'PH'}
                        value={phone}sx={{backgroundColor:'#D9D9D9'}} onChange={OnhandleChange} onlyCountries={['PH']}
                        />
                        <FormHelperText sx={classes.label}>Barangay</FormHelperText>
                                    <Autocomplete
                                    id="grouped-demo"
                                    fullWidth
                                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={(option) => option.firstLetter}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} />}
                                    sx ={classes.labelItem}/>
                        <FormHelperText sx={classes.label}>Street/Subdivision/Building Name</FormHelperText>
                        <TextField
                            hiddenLabel
                            id="street"
                            defaultValue=""
                            sx={classes.labelItem}
                        />
                </FormControl>
                </Stack>
                <Box sx = {classes.illustration}>
                        <Button sx={classes.SubmitButton} aria-label="add">
                            SAVE 
                        </Button>
                </Box>
            </Box>
        </Box>
    </>
  )
}
