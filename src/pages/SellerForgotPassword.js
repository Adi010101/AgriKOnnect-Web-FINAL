import React from 'react';
import {Container} from '@mui/material'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import illustration from '../assets/login.png';
import { Image } from 'mui-image';
import {useNavigate} from 'react-router-dom';
import { MuiTelInput } from 'mui-tel-input'

const theme = createTheme();
const classes = {
  registerbutton: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    backgroundColor: '#388E3C',
    borderRadius: 5,
    mt: 3, 
    mb: 2,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#6FCF97',
      borderColor: '#FFFF',
    },
  },
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#388E3C',
  },
  SubHeader:{
    fontFamily: 'Poppins',
    color: '#6C6D6C',
  },
  TextField:{
    color: '#388E3C'
  },
  Text:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#388E3C',
    alignItems: 'center'
  },
  SubText:{
    fontFamily: 'Poppins',
    color: '#000000',
  },
  CustomTextField: {
    "& .MuiInputLabel-root": {color: '#5F5B5B'},//styles the label
    "& .MuiOutlinedInput-root": {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& label.Mui-focused': {
        color: 'grey',
      },
    }
  },
}

export default function SellerForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const navigate = useNavigate();
    const OnhandleChange = (newPhone) => {
        setPhone(newPhone)
    }
    const [phone, setPhone] = React.useState('')
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#4DA351',
            backgroundPosition: 'center',
          }}
        >
          <Container maxWidth="sm" sx={{alignItems: 'center',marginTop:15}}>
          <Image duration = {0} src={illustration} height= {'auto'} width= {'auto'}></Image>
          </Container>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={classes.Header} component="h1" variant="h5">
              FORGOT PASSWORD
            </Typography>
            <Typography sx={classes.SubHeader} component="h1" variant="h6">
              Enter your phone number
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <MuiTelInput 
            fullWidth 
            id="phonenumber"
            name="phonenumber"
            defaultCountry={'PH'}
            value={phone}sx={classes.CustomTextField} onChange={OnhandleChange} onlyCountries={['PH']}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={classes.registerbutton}
            >
            SUBMIT
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}
