import React from 'react';
import { Box, 
  Button,
  Typography,
  Toolbar,
  Stack,
  Paper, 
  styled,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,} from '@mui/material';
import { Image } from 'mui-image';
import ResponsiveDrawer from '../components/Drawer';
import LineCharts from "../components/LineChart";
import productimg from '../assets/lettuce.png';
import {useNavigate} from 'react-router-dom';

//ScreenSize
const drawerWidth = 240;

//Styles
const classes = {
  root: {
    backgroundColor: 'blue'
  },
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#5F645F',
    marginBottom: 2,
  },
  SubHeader: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#31A05F',
    marginTop: 5,
    marginBottom: 2,
  },
  SubTitle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#31A05F',
    marginTop: 2,
    marginBottom: 2,
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
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



//Storing of tempdata
const RecentSoldList = [
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    date: "January 1, 2022",
    path: '/',
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  }
];

export default function Home (props) {
  const navigate = useNavigate();
  return (
  <>
  <Box sx={{ display: 'flex' }}>
  <ResponsiveDrawer/>
  <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant='h3' sx={classes.Header}>
          Dashboard
        </Typography>
        <Box m="20px">
          <Typography variant='h5' sx={classes.SubTitle}>
              Sales Report
          </Typography>
          <Paper elevation={4} sx={{backgroundColor: '#FFFF', borderRadius: 2}}>
          <Box height="75vh" variant="outlined">
            <LineCharts/>
          </Box>
          </Paper>
        </Box>
        <Typography variant='h4' sx={classes.SubHeader}>
          Recent Sold
        </Typography>
          <List>
              {RecentSoldList.map((item, index) => {
                const { name,date, image, path} = item;
                return (
                  <Box sx={{ width: '100%', marginBottom: 1 }}>
                    <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                      <Item key={index}>
                        <ListItem>
                          {image && <ListItemIcon>{image}</ListItemIcon>}
                          <ListItemText primary={name} secondary={date} 
                          primaryTypographyProps={{ style: classes.producttitle }}
                          secondaryTypographyProps={{style: classes.productsub }}/>
                          <Button variant="contained" onClick={() => navigate('/transactions/recent')} sx={classes.viewbutton}>VIEW</Button>
                        </ListItem>
                      </Item>
                    </Stack>
                  </Box>
                );
                })}
          </List>
      </Box>
  </Box>
  </>
  );
};
