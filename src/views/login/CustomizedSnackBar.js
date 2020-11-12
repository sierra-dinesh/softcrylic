import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

 

export default function CustomizedSnackBar({open,handleClose}) {
 
  

  
  

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please Check Your Username and Password
        </Alert>
      </Snackbar>
      
      </React.Fragment>
  );
}