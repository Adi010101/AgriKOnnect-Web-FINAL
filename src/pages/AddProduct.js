import React from 'react';
import { Box, 
    Button,
    Typography,
    ButtonGroup,
    Toolbar,
    TextField,
    Stack,
    FormControl,
    Alert,
    FormHelperText,
    MenuItem,
    Select,
    InputAdornment,
    Grid,
    ListItem,
    ListItemText,
    ListItemIcon,} from '@mui/material';
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
            backgroundColor: '#388E3C',
        },
        margin: 1,
    },
    CancelButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
        margin: 1,
    },
    UploadImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    positionButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    }
}
export default function AddProduct() {
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
          Add new Product
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button sx = {classes.AddImageButton} component="label">
                <AddIcon sx={classes.addIcon}/>
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Stack direction="column">
                <Button sx = {classes.UploadImageButton} component="label">
                    Upload product image
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Typography sx={classes.Subtitle}>
                    Upload an image of your product
                </Typography>
            </Stack>
        </Stack>
        <Stack direction="column" spacing={1}>
            <Typography variant='h5' sx={classes.SecondHeader}>
                Add product details
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <FormHelperText sx={classes.label}>Select product category</FormHelperText>
            <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            sx={classes.labelItem}
            >
                <MenuItem value="">
                <em>Category</em>
                </MenuItem>
                <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                <MenuItem value={"Fruits"}>Fruits</MenuItem>
            </Select>
            <FormHelperText sx={classes.label}>Product name</FormHelperText>
            <TextField
                hiddenLabel
                id="productname"
                defaultValue=""
                sx={classes.labelItem}
            />
            <FormHelperText sx={classes.label}>Growing Method</FormHelperText>
            <Select
            value={growingmethod}
            onChange={onhandleChange}
            displayEmpty
            sx={classes.labelItem}
            >
                <MenuItem value="">
                <em>Organic</em>
                </MenuItem>
                <MenuItem value={"Organic"}>Organic</MenuItem>
                <MenuItem value={"Fertilizer"}>Fertilizer</MenuItem>
            </Select>
            <FormHelperText sx={classes.label}>Product price</FormHelperText>
            <TextField
                hiddenLabel
                id="productprice"
                defaultValue=""
                sx={classes.labelItem}
            />
            <Stack direction='row'>
            <FormHelperText sx={classes.label}>Product quantity</FormHelperText>
            <ButtonGroup sx= {classes.stepper} size="small" aria-label="small button group">
            <Button sx={classes.StepperButton} onClick={IncNum}>+</Button>
                <Button sx = {classes.number}>{count}</Button>
                <Button sx={classes.StepperButton} onClick={DecNum}>-</Button>
            </ButtonGroup>
            <Typography sx={classes.stepperlabel}> 
                kg
            </Typography>
            </Stack>
            <Stack direction='row' sx = {classes.positionButtons}>
                <Button variant="contained" sx={classes.AddButton}>ADD PRODUCT</Button>
                <Button variant="contained" sx={classes.CancelButton} onClick={() => navigate('/products')}>CANCEL</Button>
            </Stack>
            </FormControl>
        </Stack>
    </Box>
    </Box>
  )
}
