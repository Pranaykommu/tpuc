import React, { useContext, useState } from 'react';

import { Context as AuthContext } from '../context/AuthContext';
import { FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles, Button, FilledInput } from '@material-ui/core';
import { SingleBedOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(0),
    },
    textField: {
      width: '100%',
      marginTop: 160,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  export default function Credits(){
      
const { state: { mode }, signin } = useContext(AuthContext);
const [show, setShow] = useState('Fuel');
const [credit, setCredit] = useState(100);

const classes = useStyles();
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#FAFAFA',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#FAFAFA',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: mode==='Light Mode' ? '#FAFAFA' : '#252526',
        },
        '&:hover fieldset': {
          borderColor: '#FAFAFA',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FAFAFA',
        },
      },
    },
  })(TextField);
    const labelContent = (e) => e.category;
      return (
          <div>
              <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row', }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Quantity</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={credit}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setCredit(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>
                </div>
                <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            <Button onClick={async()=>{
                              alert('payment link is sent to operator')
                            }} style={{ backgroundColor:mode==='Light Mode' ? '#f3f3f5' :   '#7f7f7f', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '100%', height: '40px', marginTop: 20 }}>Pay ₹ {credit*200}</Button>
                        </div>
                <div style={{ height: '50%', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F5' : '#1e1e1e', marginBottom: 20, marginTop: 20 }}>
                    
                </div>
          </div>
      )
  }