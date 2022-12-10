import React from 'react';
import { Box, 
    TableHead,
    TableRow,
    Typography,
    Toolbar,
    Paper, 
    TableContainer,
    Table,
    TableBody,
    Stack,
    Button,
    styled,} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ResponsiveDrawer from '../components/Drawer';

//ScreenSize
const drawerWidth = 240;
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#5F645F',
    },
    SubHeader:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginTop:5,
      marginBottom: 5,
      color: '#5F645F',
    },
    positionButton:{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 5,
      justifyContent: 'center',
    },
    DeliveredButton:{
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginLeft: 1,
      backgroundColor:'#F5E12A',
      color: '#000000',
      padding: 1,
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
      },
    },
    producttitle: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginLeft: 5,
    },
    productsub: {
      fontFamily: 'Poppins',
      marginLeft: 5,
    },
    transacbutton: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      backgroundColor:'#31A05F',
      padding: 1,
      "&:hover": {
        color: '#FFFF',
        backgroundColor: '#388E3C',
     },
    },
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#31A05F',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Poppins',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//Storing tempdata
function createData(id, image, productname, quantity, productprice,
  shippingfee, ordertotal, customername, deliveryaddress, modeofpayment,
  status) {
    return { id, image, productname, quantity, productprice,
      shippingfee, ordertotal, customername, deliveryaddress, modeofpayment,
      status};
  }
  
  const rows = [
    createData(1,'Image', 'Pechay', 25, 100.00, 10.00, 110.00, 'Althea Baculi',
    'Brgy.Ipilan, Tayabas City','Cash on Delivery'),
  ];

export default function OngoingTransactionDetails() {
  return (
    <Box sx={{ display: 'flex' }}>
    <ResponsiveDrawer/>
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
    <Typography variant='h4' sx={classes.Header}>
      Order Information
    </Typography>
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Quantity&nbsp;(kg)</StyledTableCell>
              <StyledTableCell align="right">Product Price</StyledTableCell>
              <StyledTableCell align="right">Shipping Fee</StyledTableCell>
              <StyledTableCell align="right">Order Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.image}</StyledTableCell>
                <StyledTableCell align="right">{row.productname}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.productprice}</StyledTableCell>
                <StyledTableCell align="right">{row.shippingfee}</StyledTableCell>
                <StyledTableCell align="right">{row.ordertotal}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    <Typography variant='h4' sx={classes.SubHeader}>
        Transaction Details
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="left">Delivery Address</StyledTableCell>
            <StyledTableCell align="left">Mode of Payment</StyledTableCell>
            <StyledTableCell align="left">Shipping Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.customername}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.customername}
              </StyledTableCell>
              <StyledTableCell align="left">{row.deliveryaddress}</StyledTableCell>
              <StyledTableCell align="left">{row.modeofpayment}</StyledTableCell> 
              <StyledTableCell align="left">
                <Button variant="contained" sx={classes.DeliveredButton}>OUT FOR DELIVERY</Button>
              </StyledTableCell>         
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
    )
}
