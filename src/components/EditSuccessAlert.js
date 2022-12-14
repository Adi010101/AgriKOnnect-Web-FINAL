import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function EditSuccessAlert() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="success">
              Contact Information Changed Successfully!
            </Alert>
          </Stack>
      )
    }
    