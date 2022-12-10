import React from 'react';
import {Container,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel, 
  FormControl,
Autocomplete,} from '@mui/material'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import illustration from '../assets/login.png';
import { Image } from 'mui-image';
import {useNavigate} from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MuiTelInput } from 'mui-tel-input';
import { top100Films as data } from '../data/sampleData';

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
  CustomOutlineTextField: {
    marginTop: 2,
    "& .MuiOutlinedInput-root": {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& label.Mui-focused': {
        color: 'green',
      },
    }
  },
}

export default function SellerRegister() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const OnhandleChange = (newPhone) => {
    setPhone(newPhone)
  }
  const [phone, setPhone] = React.useState('')
  const navigate = useNavigate();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const options = data.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

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
              CREATE ACCOUNT
            </Typography>
            <Typography sx={classes.SubHeader} component="h1" variant="h6">
              Sign-up as a seller
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoFocus
                InputProps={{
                  className: classes.TextField,
                }}
                sx={classes.CustomTextField}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="middlename"
                label="Middle Name"
                name="middlename"
                autoFocus
                sx={classes.CustomTextField}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoFocus
                sx={classes.CustomTextField}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                sx={classes.CustomTextField}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={classes.CustomTextField}
              />
              <MuiTelInput 
              fullWidth 
              required
              id="phonenumber"
              name="phonenumber"
              defaultCountry={'PH'}
              value={phone}sx={{marginTop: 2}} onChange={OnhandleChange} onlyCountries={['PH']}
              />
              <FormControl fullWidth sx={{marginTop: 1}}>
              <InputLabel sx={{marginTop: 2,}}>Password</InputLabel>
              <OutlinedInput
                sx={classes.CustomOutlineTextField}
                margin="normal"
                required
                fullWidth
                name="password"
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              </FormControl>
              <OutlinedInput
              id="upload-script"
              type="file"
              fullWidth
              required
              sx={classes.CustomOutlineTextField}
              value={values.script}
              onChange={() => handleChange('script')}/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={classes.registerbutton}
              >
                REGISTER
              </Button>
              <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
              >
                <Typography sx={classes.SubText}>
                Already have an account?
                <Link sx={classes.Text} href="/seller/login" variant="body1">
                          {" Login here"}
                </Link>
                </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}