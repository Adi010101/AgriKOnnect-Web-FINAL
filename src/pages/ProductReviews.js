import React from 'react'
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';


//ScreenSize
const drawerWidth = 240;
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
      color: '#5F645F',
    },
    arrowback:{
        color: '#5F645F',
        width: 50,
        height: 50,
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
function createData(customername, productname, quantity, rating) {
    return { customername, productname, quantity, rating };
  }
  
  const rows = [
    createData('Althea Baculi', 'Pechay', 25, '4/5'),
  ];

export default function ProductReviews() {
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
            <Button onClick={() => navigate('/account/review')}>
            <ArrowBackIcon sx = {classes.arrowback}/>
            </Button>
            <Typography variant='h4' sx={classes.Header}>
                Product Reviews
            </Typography>
    </Stack>
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Quantity&nbsp;(kg)</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    </Box>
    </Box>
    )
}
