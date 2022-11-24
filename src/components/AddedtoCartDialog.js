import React from 'react';
import Button from '@mui/material/Button';
import { DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddtoCartImage from '../assets/AddtoCart.png';
import { Image } from 'mui-image';
import {useNavigate} from 'react-router-dom';


export default function AddedtoCartDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const navigate = useNavigate();

  
    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
            <Image duration = {0} src={AddtoCartImage}/>
          <DialogTitle id="alert-dialog-title"
          sx= {{color: '#5F5B5B',fontFamily: 'Poppins',
          fontWeight: 'bold', textAlign: 'center',fontSize: 25}}>
            {"Gotcha!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"
            sx = {{color: '#5F5B5B',fontFamily: 'Poppins',
            textAlign: 'center', fontSize: 20}} >
             Item successfully added to your basket!
            </DialogContentText>
          </DialogContent>
          <DialogActions sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button sx={{fontFamily: 'Poppins', fontWeight: 'bold', backgroundColor: '#388E3C', 
            color: '#FFFF', padding: 1,
            "&:hover": {
                color: '#FFFF',
                backgroundColor: '#388E3C',
            },}} 
            onClick={() => navigate('/customer/home')}>HOME</Button>
            <Button 
            sx={{fontFamily: 'Poppins', fontWeight: 'bold', backgroundColor: '#388E3C', 
            color: '#FFFF', padding: 1,
            "&:hover": {
                color: '#FFFF',
                backgroundColor: '#388E3C',
            },}} onClick={() => navigate('/customer/basket')} autoFocus>
              GO TO BASKET
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }