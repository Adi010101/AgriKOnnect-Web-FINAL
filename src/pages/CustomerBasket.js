import React from 'react';
import { Box, CssBaseline, Button, 
  GlobalStyles, Toolbar, Typography,
  Paper, Radio, ButtonGroup,styled, Grid, ListItemIcon, 
  List, Stack, ListItem, ListItemText} from "@mui/material";
import CustomerResponsiveAppBar from '../components/CustomerResponsiveAppBar';
import { Image } from 'mui-image';
import productimg from '../assets/lettuce.png';
import {useNavigate} from 'react-router-dom';

const classes = {
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#5F645F',
    marginTop: 2,
  },
  stepper: {
    marginTop: 1,
    marginBottom: 1,
  },
  StepperPlusButton: {
      backgroundColor: '#388E3C',
      color: '#FFFF',
      fontSize: 20,
      "&:hover": {
          color: '#FFFF',
          backgroundColor: '#31A05F',
      },
  },
  StepperMinusButton: {
    backgroundColor: '#F22323',
    color: '#FFFF',
    fontSize: 20,
    "&:hover": {
        color: '#FFFF',
        backgroundColor: '#FF7D7D',
    },
},
  number: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F5B5B',
      backgroundColor: '#FFF59D',
  },
  stepperlabel: {
      fontFamily: 'Poppins',
      fontSize: 15,
      color: '#5F5B5B',
      marginLeft: 1,
      marginTop: 2,
  },
  checkoutbutton:{
    marginBottom: 2,
    marginTop: -1,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#FFFF',
    backgroundColor:'#31A05F',
    padding: 1,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
    },
  },
  TextTotal:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2,
  },
  TextAmount:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2,
    marginRight: 5,
  },
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//Storing of tempdata
const BasketList = [
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  },
  {
    name: "Pechay",
    priceperkg: "Php.40.00/kg",
    image: <Image duration = {0} src={productimg} height={50} width={50} />,
  }
];


export default function CustomerBasket() {
  const [count, setCount] = React.useState(0);
  const navigate = useNavigate();

    const IncNum = () => {
        setCount(count + 1);
      };
    const DecNum = () => {
        if (count > 0) setCount(count - 1);
        else {
          setCount(0);
          alert("min limit reached");
        }
    };
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
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
              <Typography variant='h3' sx={classes.Header}>
                My Basket
              </Typography>
              <List>
                {BasketList.map((item, index) => {
                  const { name,image, priceperkg, price} = item;
                  return (
                    <Box sx={{ width: '100%', marginTop: 1,marginBottom: 1 }}>
                      <Stack direction={{ xs: "column-reverse"}}  spacing={10}>
                        <Item key={index}>
                          <ListItem alignItems="flex-start">
                            <Radio {...controlProps('c')} color="success" />
                            {image && <ListItemIcon>{image}</ListItemIcon>}
                            <ListItemText primary={name} secondary={<Typography
                            sx={{ display: 'inline',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            color: '#000000',}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {priceperkg}
                          </Typography>
                          } 
                            primaryTypographyProps={{ style: classes.producttitle }}
                            secondaryTypographyProps={{style: classes.productprice }}/>
                            <Stack direction='row'>
                              <ButtonGroup sx= {classes.stepper} size="small" aria-label="small button group">
                              <Button sx={classes.StepperPlusButton} onClick={IncNum}>+</Button>
                                  <Button sx = {classes.number}>{count}</Button>
                                  <Button sx={classes.StepperMinusButton} onClick={DecNum}>-</Button>
                              </ButtonGroup>
                              <Typography sx={classes.stepperlabel}> 
                                  kg
                              </Typography>
                            </Stack>
                          </ListItem>
                        </Item>
                      </Stack>
                    </Box>
                  );
                  })}
              </List>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                }}
              >
                <Item> 
                  <Stack direction='row'>
                    <Stack direction='row'>
                    <Typography sx={classes.TextTotal}> 
                        Subtotal: 
                    </Typography>
                    <Typography sx={classes.TextAmount}> 
                        ₱ 0.00
                    </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction='row'>
                    <Typography sx={classes.TextTotal}> 
                        Shipping Fee:
                    </Typography>
                    <Typography sx={classes.TextAmount}> 
                       ₱ 0.00
                    </Typography>
                    <Button sx={classes.checkoutbutton}>Checkout</Button>
                  </Stack>
                </Item>
              </Box>
            </Box>
        </Box>
    </>
  )
}
