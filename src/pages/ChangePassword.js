import React from 'react';
import { Box, 
    FormControl, 
    Button, 
    InputLabel, 
    Input, 
    Stack,
    InputAdornment, 
    IconButton, 
    Typography } from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F645F',
      marginTop: 1,
      marginLeft: 2,
    },
    arrowback:{
        color: '#5F645F',
        width: 50,
        height: 50,
    },
    IconPosition:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon:{
        width: 200,
        height: 200,
        margin: 1,
    },
    TextPosition:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 1,
    },
    label: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 1,
        textAlign: 'left',
    },
    EditButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 1,
        margin: 9,
        width: 200,
        padding: 1,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    }
}

export default function Password() {
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

    return (
        <Box sx={{ display: 'flex' }}>
          <ResponsiveDrawer/>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Stack direction='row'>
                <Button onClick={() => navigate('/account')}>
                <ArrowBackIcon sx = {classes.arrowback}/>
                </Button>
                <Typography variant='h4' sx={classes.Header}>
                    Password
                </Typography>
            </Stack>
            <Stack direction="column" sx={classes.TextPosition}>
                <Box component="form" onSubmit={(e) => updatePassword(e)}>
                    <Typography sx={classes.label}>
                    NEW PASSWORD
                    </Typography>
                    <Box sx={{ m: 1, width: '25ch',display: 'flex',
                    alignItems: 'center', }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password"></InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={'password'}
                        onChange={(e) => handleInput(e)} 
                        defaultValue={errorInput[0]?.password}
                    />
                    </Box>
                </Box>
                <Button sx={classes.EditButton} aria-label="add">
                        SAVE CHANGES
                </Button>
            </Stack>
            </Box>
        </Box>
    )
}
    