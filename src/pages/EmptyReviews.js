import React from 'react';
import { Box, 
    Button, 
    Stack,
    styled,
    Paper,
    Typography,
} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';


const drawerWidth = 240;
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
    producttitle: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginLeft: 5,
      },
      productsub : {
        fontFamily: 'Poppins',
        marginLeft: 5,
      },
      viewbutton: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        backgroundColor:'#31A05F',
        padding: 1,
        "&:hover": {
          color: '#FFFF',
          backgroundColor: '#388E3C',
        },
    },
    Message: {
        fontFamily: 'Poppins',
        marginTop: 2,
        fontWeight: 'bold',
        color: '#000000',
    },
    SubMessage: {
        fontFamily: 'Poppins',
        color: '#000000',
    }
}

export default function EmptyReviews() {
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
                Reviews
            </Typography>
        </Stack>
        <Typography sx={classes.Message}>
        0 Review
        </Typography>
        <Typography sx={classes.SubMessage}>
        No review available
        </Typography>
    </Box>
    </Box>
  )
}
