import React from 'react';
import { Box, 
    Button, 
    Stack,
    TextField, 
    Container,
    Avatar, 
    Typography } from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 1,
    },
    label: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginTop: 2,
    },
    UserDetailsText:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    EditButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 1,
        margin: 2,
        width: 200,
        padding: 1,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    }
}
export default function UserInfo() {
    const navigate = useNavigate();
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
                Contact Information
            </Typography>
        </Stack>
        <Box sx={classes.IconPosition}>
            <Avatar alt="User-Profile-Image" sx={classes.Icon} src={<AccountCircleIcon/>}/>
        </Box>
        <Stack direction="column" sx={classes.TextPosition}>
            <Container maxWidth="sm">
                <Box component="form">
                    <Typography sx={classes.label}>
                        Name
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="Russell P. Barnes"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                    <Typography sx={classes.label}>
                        Birthdate
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="March 18, 2000"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                    <Typography sx={classes.label}>
                        Gender
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="Male"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                    <Typography sx={classes.label}>
                        Email
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="russell.barnes@agri.com"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                    <Typography sx={classes.label}>
                        Phone Number
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="09123323424"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                    <Typography sx={classes.label}>
                        Address
                    </Typography>
                    <TextField
                    id="standard-read-only-input"
                    defaultValue="Ipilan, Tayabas City"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                    />
                </Box>
            </Container>
            <Button sx={classes.EditButton} aria-label="add" onClick={() => navigate('/account/edit/personalInformation')}>
                    EDIT
            </Button>
        </Stack>
        </Box>
    </Box>
  )
}
