import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import { LocalGasStation } from '@material-ui/icons';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),

    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Button />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



export default function HotelDialog(props) {
    const [open, setOpen] = React.useState(props.popen);
    console.log(props)
    // const CheckBoxNone

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleParentClose = () => {
        props.closeDialog()
    }
    const onNoneChecked = (e)=>{
     console.log(e.target.value)
    }
   const onCheckBoxChange = (e)=>{
       console.log(e.target)
       console.log(e.target.value)
   }

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
            <BootstrapDialog
                onClose={handleParentClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="md"

            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleParentClose}>
                    <center>{props.item.hotelName}</center>
                    <center><h6>{props.item.city}</h6></center>
                </BootstrapDialogTitle>
                <DialogContent dividers style={{ "height": "400px", "width": "800px" }}>
                    <Typography gutterBottom align='center' >
                        <img src={props.picture} style={{ "height": "300px", "width": "600px" }}></img>
                    </Typography>
                    <Typography gutterBottom>
                    
                    </Typography>
                    <Typography gutterBottom>
     
                    </Typography>
                </DialogContent>
                <DialogActions>

                   <Link style={{"marginRight":"300px"}} to ={{pathname:"/Checkout", state:{c_id:props.c_id ,rooms:props.rooms,item:props.item }}} >
                    Proceed to Checkout
                    </Link>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
