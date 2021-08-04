import React, { useContext, useState } from 'react';

import { Context as AuthContext } from '../context/AuthContext';
import { FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles, Button, FilledInput, Grid } from '@material-ui/core';
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
      marginTop: 30,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  export default function Complaint(){
      
const { state: { mode, vehicle }, signin, getVehicleInfo , registerComplaint} = useContext(AuthContext);
const [show, setShow] = useState('Fuel');
const [vehicleNumber, setvehicleNumber] = useState('');

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
                                <InputLabel style={{ color: mode==='Light Mode' ? '#252526' : '#fafafa99', borderColor: '#FAFAFA' }} htmlFor="outlined-adornment-password">Vehicle Number</InputLabel>
                                <FilledInput
                                    style={{ backgroundColor: mode==='Light Mode' ? '#fafafa' : '#252526', color: mode==='Light Mode' ? '#252526' : '#fafafa' }}
                                    id="outlined-adornment-password"
                                    type='text'
                                    value={vehicleNumber}
                                    autoComplete={false}
                                    autoCorrect={false}
                                    onChange={(e)=>setvehicleNumber(e.target.value)}
                                    labelWidth={80}
                                />
                                </FormControl>
                </div>
                {vehicleNumber!=null && vehicleNumber.length>1 ?
                <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            <Button onClick={async()=>{
                              getVehicleInfo({ vehicleNumber })
                            }} style={{ backgroundColor:mode==='Light Mode' ? '#f3f3f5' :   '#7f7f7f', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '100%', height: '40px', marginTop: 20 }}>Fetch</Button>
                </div> : null}
                <div style={{ width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#ffffff' : '#1e1e1e', marginBottom: 20, marginTop: 20 }}>
                  <div className="input-group" style={{ margin: '0 auto', width: '90%', textAlign: 'center', }}>
                            <Grid style={{ marginTop: 1 }} container spacing={3}>
                                <Grid item xs={4}>
                                    <Button disabled onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30 }}>{vehicle!=null ? vehicle.ownerName : 'Name'}</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button disabled onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30 }}>{vehicle!=null ? vehicle.ownerContact : 'Phone Number'}</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button disabled onClick={()=>{
                                        //
                                    }} style={{ backgroundColor: mode==='Dark Mode' ? '#252526'  : '#fafafa', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', width: '100%', marginTop: 30 }}>{vehicle!=null ? vehicle.ownerEmail : 'Email'}</Button>
                                </Grid>
                            </Grid>
                  </div>
                </div>
              <div className="input-group" style={{ margin: '0 auto', width: '95%', textAlign: 'center', flexDirection: 'row', }}>
                <TextField
                style={{ backgroundColor: '#ffffff40', color: '#ffffff', width: '100%' }}
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={9}
                  
                  defaultValue="Type your comments here..."
                  variant="outlined"
                />
              </div>
                <div className="input-group" style={{ margin: '0 auto', width: '35%', textAlign: 'center', flexDirection: 'row' }}>
                            <Button onClick={async()=>{
                              if(vehicle && vehicle.ownerEmail && vehicle.ownerContact && vehicle.ownerName)
                              await registerComplaint({ vehicleNumber, name:  vehicle.ownerName, contact: vehicle.ownerContact, email: vehicle.ownerEmail })
                              alert('Registered Succesfully')
                              setvehicleNumber('')
                            }} style={{ backgroundColor:mode==='Light Mode' ? '#f3f3f5' :   '#7f7f7f', borderColor:mode==='Light Mode' ? '#FAFAFA' : '#252526', width: '100%', height: '40px', marginTop: 20 }}>Submit</Button>
                        </div>
          </div>
      )
  }