import React from 'react';
import { Box, 
    Button,
    Typography,
    ButtonGroup,
    Toolbar,
    TextField,
    Stack,
    FormControl,
    FormHelperText,
    MenuItem,
    Select,} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';
//ScreenSize
const drawerWidth = 240;
//Styles
const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue"
    },
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#31A05F',
      marginBottom: 5,
    },
    SecondHeader:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#31A05F',
        marginTop: 5,
        marginBottom: 2,
    },
    HeaderSub: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#31A05F',
    },
    Subtitle: {
        fontFamily: 'Poppins',
        color: '#5F5B5B',
    },
    AddImageButton:{
        color: '#00000',
        backgroundColor: '#D9D9D9',
        borderStyle: "dashed",
        padding: 10,
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    addIcon:{
        color: '#00000',
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
    stepper: {
        marginTop: 1,
        marginBottom: 1,
    },
    StepperButton: {
        backgroundColor: '#000000',
        color: '#FFFF',
        fontSize: 20,
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    number: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000000',
    },
    stepperlabel: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#5F5B5B',
        marginLeft: 1,
        marginTop: 2,
    },
    AddButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#6FCF97',
        },
        margin: 1,
    },
    EditImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    CancelButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#F22323',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#FF7D7D',
        },
        margin: 1,
    },
    positionButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    }
}

export default function EditProduct() {
    const [category, setCategory] = React.useState('');
    const [growingmethod, setMethod] = React.useState('');
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
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const onhandleChange = (event) => {
        setMethod(event.target.value);
    };


  return (
    
    <Box sx={{ display: 'flex' }}>
    <ResponsiveDrawer/>
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant='h4' sx={classes.Header}>
          Edit Product
        </Typography>
        <Stack direction="column" spacing={1}>
            <Typography variant='h5' sx={classes.SecondHeader}>
                Edit product details
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography sx={classes.label}>Select product category</Typography>
            <Select
            id = "category"
            name = "category"
            value={category}
            onChange={(e) => handleInput(e)} 
            defaultValue={productInput?.category}
            displayEmpty
            sx={classes.labelItem}
            >
                <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                <MenuItem value={"Fruits"}>Fruits</MenuItem>
            </Select>
            <Typography sx={classes.label}>Product name</Typography>
            <TextField
                hiddenLabel
                id="name"
                name = "name"
                onChange={(e) => handleInput(e)} 
                value={productInput?.name} 
                sx={classes.labelItem}
            />
            <Typography sx={classes.label}>Growing Method</Typography>
            <Select
            onChange={(e) => handleInput(e)} 
            defaultValue={productInput?.description}
            displayEmpty
            sx={classes.labelItem}
            >
                <MenuItem value={"Organic"}>Organic</MenuItem>
                <MenuItem value={"Fertilizer"}>Fertilizer</MenuItem>
            </Select>
            <Typography sx={classes.label}>Product price</Typography>
            <TextField
                hiddenLabel
                id="price"
                name = "price"
                onChange={(e) => handleInput(e)} 
                value={productInput?.price}
                sx={classes.labelItem}
            />
            <Stack direction='row'>
            <Typography sx={classes.label}>Product quantity</Typography>
            <TextField
                fullWidth
                id="quantity"
                name="quantity"
                onChange={handleInput} 
                value={productInput?.quantity}
                sx={classes.labelItem}
            />
            </Stack>
            <Stack direction='row' sx = {classes.positionButtons}>
                <Button variant="contained" sx={classes.AddButton} onClick={(e) => updateProduct(e)}>SAVE CHANGES</Button>
                <Button variant="contained" sx={classes.CancelButton} onClick={() => navigate('/products')}>CANCEL</Button>
            </Stack>
            </FormControl>
        </Stack>
    </Box>
    </Box>
  )
}