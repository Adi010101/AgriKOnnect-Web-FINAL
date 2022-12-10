import React from 'react';
import { Box, CssBaseline, Button, 
    GlobalStyles,  Autocomplete , Toolbar,
    Paper, TextField, Avatar,styled, FormHelperText,FormControl, 
     Stack} from "@mui/material";
import CustomerResponsiveAppBar from '../../components/CustomerResponsiveAppBar';
import { DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {useNavigate} from 'react-router-dom';
import { brgylist as data } from '../../data/barangay';
import Check from '../../assets/correct.png';
import { Image } from 'mui-image';



const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F5B5B',
      marginTop: 5,
      marginLeft: 2,
    },
    SubHeader: {
      fontFamily: 'Poppins',
      color: '#5F5B5B',
      fontSize: 25,
      marginBottom: 5,
    },
    SubmitButton: {
      fontFamily: 'Poppins',
      marginBottom: 5,
      color: "#FFFF",
      backgroundColor: '#388E3C'
    },
    illustration:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    UploadImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        padding: 2,
        margin: 4,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
}

export default function EditCustomerInfo() {
    const navigate = useNavigate();
    const options = data.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
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
                <Stack direction='column'>
                    <Box sx = {classes.illustration}>
                    <Avatar
                        alt="CustomerName"
                        src=""
                        sx={{ margin: 1, backgroundColor: '#388E3C', width: 150, height: 150 }}
                    />
                    </Box>    
                    <Box sx = {classes.illustration}>
                        <Stack direction="column" spacing={1}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <FormHelperText sx={classes.label}>First Name</FormHelperText>
                                    <TextField
                                        hiddenLabel
                                        id="customername"
                                        name="firstname"
                                        defaultValue=""
                                        sx={classes.labelItem}
                                    />
                                <FormHelperText sx={classes.label}>Middle Name</FormHelperText>
                                    <TextField
                                        hiddenLabel
                                        id="customermiddlename"
                                        name="middlename"
                                        defaultValue=""
                                        sx={classes.labelItem}
                                    />
                                <FormHelperText sx={classes.label}>Last Name</FormHelperText>
                                    <TextField
                                        hiddenLabel
                                        id="customerlastname"
                                        name="lastname"
                                        defaultValue=""
                                        sx={classes.labelItem}
                                    />
                                <FormHelperText sx={classes.label}>Email</FormHelperText>
                                    <TextField
                                        hiddenLabel
                                        id="customeremail"
                                        name="email"
                                        autoComplete="email"
                                        sx={classes.labelItem}
                                    />
                            </FormControl>
                        </Stack>
                    </Box>

                        <Box sx = {classes.illustration}>
                            <Button sx={classes.SubmitButton} aria-label="add" onClick={handleClickOpen}>
                                SAVE CHANGES
                            </Button>
                        </Box>
                </Stack>
            </Box>
        </Box>  
        {/* Dialog for updated User Info */}
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
            <Image duration = {0} sx={{marginTop: 2, marginLeft: 30}} width={50} height={50} src={Check}/>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"
            sx = {{color: '#5F5B5B',fontFamily: 'Poppins',
            textAlign: 'center', fontSize: 20}} >
             Successfully saved your profile
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
            onClick={() => navigate('/customer/account')}>DONE</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
