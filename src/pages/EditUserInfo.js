import React from 'react';
import { Box, 
    FormControl, 
    Button, 
    InputLabel, 
    Select,
    MenuItem,
    Stack,
    TextField, 
    Avatar, 
    Typography } from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
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
    Icon:{
        width: 200,
        height: 200,
        margin: 1,
    },
    UploadImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 10,
        padding: 2,
        margin: 4,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    DetailsText:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign:'left',
        marginTop: 2,
    },
    IconPosition:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EditButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
        margin: 10,
    }
}

export default function EditUserInfo() {
    const navigate = useNavigate();
    const [brgy, setBrgy] = React.useState('');
    const [value, setValue] = React.useState(dayjs('2022-04-07'));

    const handleChange = (event) => {
        setBrgy(event.target.value);
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
            <Button onClick={() => navigate('/account/personalInformation')}>
            <ArrowBackIcon sx = {classes.arrowback}/>
            </Button>
            <Typography variant='h4' sx={classes.Header}>
                Contact Information
            </Typography>
        </Stack>
        <Box sx={classes.IconPosition}>
            <Avatar alt="User-Profile-Image" sx={classes.Icon} src={<AccountCircleIcon/>}/>
        </Box>
        <Box sx={classes.IconPosition}>
            <input placeholder=" " name="image" type="file"/>
        </Box>
        <Stack direction="column">
                        <Typography sx={classes.DetailsText}>
                            NAME
                        </Typography>
                        <TextField
                        id="outlined-uncontrolled"
                        label=""
                        variant='standard'
                        defaultValue="Russell P. Barnes"
                        />
                        <Typography sx={classes.DetailsText}>
                            BIRTHDATE
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        disableFuture
                        id="standard-size-normal"
                        variant='standard'
                        label=""
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                        <FormControl variant="standard">
                            <Typography sx={classes.DetailsText}>
                                GENDER
                            </Typography>
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={brgy}
                            onChange={handleChange}
                            label="BARANGAY"
                            sx={classes.TextFieldPosition}
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                         <Typography sx={classes.DetailsText}>
                            EMAIL
                        </Typography>
                        <TextField
                        id="outlined-uncontrolled"
                        label=""
                        variant='standard'
                        defaultValue="russell.barns@agri.com"
                        />
                         <Typography sx={classes.DetailsText}>
                            PHONE NUMBER
                        </Typography>
                        <TextField
                        id="outlined-uncontrolled"
                        label=""
                        variant='standard'
                        defaultValue="091234567890"
                        />
                        <FormControl variant="standard">
                            <Typography sx={classes.DetailsText}>
                            BARANGAY
                            </Typography>
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={brgy}
                            onChange={handleChange}
                            label="BARANGAY"
                            sx={classes.TextFieldPosition}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                <Button sx={classes.EditButton} aria-label="add" onClick={() => navigate('/account/edit/personalInformation')}>
                        SAVE CHANGES
                </Button>
            </Stack>
        </Box>
    </Box>
  );
}

