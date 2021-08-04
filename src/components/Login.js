import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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
      width: '300px',
    },
  }));
export default function Login(){
  const { state: { mode }, login } = useContext(AuthContext);


    const [interfaceNumber, setInterfaceNumber] = useState(null);
    const [endpointIn, setEndpointIn] = useState(null);
    const [endpointOut, setEndpointOut] = useState(null);
    const [username, setUsername] = useState('');
    const [modal, setModal] = useState(false);
   const [otp, setOtp] = useState('');
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState('')
    console.log('mode from login is', mode);
    const [showPassword, setShowPassword] = useState(false);
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
    return(
        <div className='login-form'>
            <div style={{ height: '1000px', width: '100%', backgroundColor: mode==='Light Mode' ? '#FAFAFA' : '#252526', margin: '0 auto' }}>
                <div style={{ height: '650px', width: '400px', margin: '0 auto', }}>
                    <div style={{ height: '150px', width: '100%', flexDirection: 'row', backgroundColor: mode==='Light Mode' ? '#FAFAFA' :  '#252526', }}>
                        <div style={{ height: '100%', width: '150px', margin: '0 auto' }}>
                            <img
                            alt=""
                            src='https://www.tapeit.in/assets/images/logoNew1.png'
                            width="60%"
                            height="30%"
                            style={{ marginTop: 50, marginLeft: 30 }}
                        />
                        </div>
                    </div>
                    <div style={{ height: '500px', width: '100%', backgroundColor: mode==='Light Mode' ? '#FFFFFF' :  '#3E3E3E', }}>
                        <h2 style={{ color:mode==='Light Mode' ? '#000000' :   '#ffffff', }}>Get Started</h2>
                        <h3 style={{ color:mode==='Light Mode' ? '#00000099' :   '#ffffff99', }}>Enter your Auto user name and password</h3>
                        <div className="input-group" style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: 30 }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: '#252526', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">User name</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#FAFAFA' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={username}
                                    autoComplete='none'
                                    onChange={(e)=>setUsername(e.target.value)}
                                    labelwidth={80}
                                />
                                </FormControl>
                        </div>
                        <div className="input-group" style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: 30 }}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant='filled'>
                                <InputLabel style={{ color: '#252526', borderColor: '#FAFAFA',  }} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#FAFAFA' }}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    autoComplete='none'
                                    onChange={(e)=>setPassword(e.target.value)}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=>setShowPassword(!showPassword)}
                                        onMouseDown={(e)=> e.preventDefault()}
                                        edge="end"
                                        >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelwidth={70}
                                />
                                </FormControl>
                        </div>
                        <div style={{ margin: '0 auto', marginTop: '30px', width: '300px', textAlign: 'center' }}>
                        <Button onClick={()=>{
                           login({ username, password })
                        }} style={{ backgroundColor:mode==='Light Mode' ? '#7F7F7F' :   '#252526', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '300px', height: '40px', }}>Continue</Button>
                        <div style={{ fontSize: '13px', color:mode==='Light Mode' ? '#000000' :   '#ffffff', marginTop: '10px' }} className="text-center">By continuing, you agree to <span style={{ fontSize: '13px', color:mode==='Light Mode' ? '#000000' :   '#ffffff', textDecorationLine: 'underline' }} onClick={()=>{
                            //
                            alert('t&c')
                        }}>T&C</span> & <span style={{ fontSize: '13px', color: mode==='Light Mode' ? '#000000' :  '#ffffff', textDecorationLine: 'underline' }} onClick={()=>{
                            //
                            alert('pp')
                        }}>Privacy Policy</span></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


