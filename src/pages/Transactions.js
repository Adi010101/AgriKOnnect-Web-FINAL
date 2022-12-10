import React from 'react';
import { Box, 
    Button,
    ButtonGroup,
    Typography,
    Toolbar,
    Paper, 
    styled,
    Table,
    TableHead,
    TableRow,
    TableContainer,
    TableBody,
    Fab,} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ResponsiveDrawer from '../components/Drawer';
import {useNavigate} from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/ScrollToTop';

//ScreenSize
const drawerWidth = 240;

//Styles
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
    marginBottom: 5,
    color: '#5F645F',
  },
  positionButton:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  OngoingButton:{
    width: 500,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    backgroundColor: '#6FCF97',
    borderColor: '#FFFF',
    borderRadius: 2,
    color: '#FFFF',
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
      borderColor: '#FFFF',
    },
  },
  DeliveredButton:{
    width: 500,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    backgroundColor: '#6FCF97',
    borderRadius: 2,
    color: '#FFFF',
    borderColor: '#FFFF',
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#388E3C',
      borderColor: '#FFFF',
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
  ScrollTopButton:{
    color: 'white',
    backgroundColor: '#4DA351',
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#31A05F',
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
function createData(customername, productname, quantity, rating,comment) {
    return { customername, productname, quantity, rating,comment };
  }
  
  const rows = [
    createData('Althea Baculi', 'Pechay', 25, '4/5','fast transactions.'),
  ];

export default function Transactions(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar id="back-to-top-anchor"/>
        <Typography variant='h3' sx={classes.Header}>
          Transactions
        </Typography>
        <ButtonGroup sx={classes.positionButton}>
          <Button sx={classes.OngoingButton} onClick={() => navigate('/transactions/ongoing')}>Ongoing</Button>
          <Button sx={classes.DeliveredButton} onClick={() => navigate('/transactions/delivered')}>Delivered</Button>
        </ButtonGroup>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Quantity&nbsp;(kg)</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
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
                <StyledTableCell align="right">{row.productname}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.rating}</StyledTableCell>
                <StyledTableCell align="right">{row.comment}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      <ScrollTop {...props}>
        <Fab sx= {classes.ScrollTopButton} size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}
