
import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'changemode':
      return { ...state, mode: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return {...state, errorMessage: '', token: action.payload, profile: action.payloadp };
    case 'verify':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'getotp':
      return { ...state, verified: true };
    case 'verifyotp':
      return { ...state, vehicle: action.payload };
    case 'getbar':
     return { ...state, bar: action.payload };
    case 'getdonut':
      return { ...state, donut: action.payload };
    case 'getvehicleinfo':
      return { ...state, vehicle: action.payload };
    case 'getreport':
      return { ...state, reports: action.payload };
    case 'getcomplaintreport':
      return { ...state, complaintreport: action.payload };
    case 'modal':
      return { ...state, pmodal: action.payload };
    case 'profile':
      return { ...state, profile: action.payload };
    case 'signout':
      return { token: null, errorMessage: '' };
    case 'refreshpuc':
      return {...state, vehicle: null, verified: false };
    case 'registercomplaint':
      return {...state, vehicle: null };
    default:
      return state;
  }
};
 
const login = dispatch => async ({ username, password }) => {
  try {
    await localStorage.removeItem('token');
    const response = await tracker.post(`/login?username=${username}&password=${password}`);
   if (response.headers.authorization.length>8){
     const toke = response.headers.authorization.split('Bearer ').pop();
     console.log('toke is: ',toke );
     await localStorage.setItem('token', toke);
     dispatch({ type: 'signin', payload: toke, payloadp: response.data });
   } else {
     dispatch({
      type: 'add_error',
      payload: 'Something went wrong, try restarting the app'
    });
   }
  } catch (err) {
      console.log('there is an error', err);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong, try restarting the app'
    });
  }
};

const getOtp = dispatch => async ({ phone, vehicleNum, lat, long }) => {
  console.log(phone, vehicleNum, lat, long)
   try {
     const response = await tracker.get(`/dealer/otp`, {
      phoneNumber: "7624969274",
      vehicleRegNumber: "RJ31xd5305",
      latitude: 19.038190670441264,
      longitude: 72.86760978120125
    });
    if (response.data){
      console.log('response of getotp: ', response.data);
     dispatch({ type: 'getotp' });
    }
   } catch (err) {
       console.log('there is an error', err);
       dispatch({ type: 'getotp' }); //use this for demo, by commeting below dispatch
    // dispatch({ type: 'add_error', payload: 'Something went wrong, try restarting the app' });
   }
 };

const verifyOtp = dispatch => async ({ phone, vehicleNum, lat, long, otp }) => {
  try {
    const response = await tracker.post(`/dealer/verify-otp`, {
      phoneNumber: "7624969274",
      vehicleRegNumber: "RJ31xd5305",
      latitude: 19.038190670441264,
      longitude: 72.86760978120125,
      otp: 908510
  });
   if (response.data){
    console.log('response of verifyotp: ', response.data);
    dispatch({ type: 'verifyotp', payload: response.data });
   }
  } catch (err) {
      console.log('there is an error', err);
      let data = {
       "id": 151,
       "regNumber": "RJ31xd5305",
       "engineNumber": "4sxrh8119aah1870ftsm",
       "chasisNumber": "253vhed985qppk337",
       "regDate": "2021-06-29",
       "ownerName": "zdpxqo ittc",
       "ownerContact": "2431464248",
       "ownerEmail": "yadtj04@mbtmi.com",
       "ownerAddress": "ukn uiiq jcccwh bskdgt 812152",
       "vehicleClass": "MCWOG",
       "vehicleMake": "mcxha oetnrekp",
       "model": "caqxe xni zfqbm",
       "emissionNorms": "BSVI",
       "fuelType": "PETROL",
       "regAuthority": "ddvniu qpmhmopdbi szvd ochgp",
       "pucc": "2021-06-29",
       "insurance": "2021-06-29",
       "stolen": null
   }; // for demo
     dispatch({ type: 'verifyotp', payload: data }); //use this for demo, by commeting below dispatch
  // dispatch({ type: 'add_error', payload: 'Something went wrong, try restarting the app' });
  }
  };

  const getBar = dispatch => async ({ frequency }) => {
    try {
      const response = await tracker.get(`/dashboard/stats-time?frequency=MONTH`);
     if (response.data){
      console.log('response of getBar: ', response.data);
      dispatch({ type: 'getbar', payload: response.data });
     } else {
       dispatch({
        type: 'add_error',
        payload: 'Something went wrong, try restarting the app'
      });
     }
    } catch (err) {
        console.log('there is an error', err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong, try restarting the app'
      });
    }
    };
  

    const getDonut = dispatch => async () => {
      try {
        const response = await tracker.get(`/dashboard/stats`);
       if (response.data){
        console.log('response of getDonut: ', response.data);
        dispatch({ type: 'getDonut', payload: response.data });
       } else {
         dispatch({
          type: 'add_error',
          payload: 'Something went wrong, try restarting the app'
        });
       }
      } catch (err) {
          console.log('there is an error', err);
        dispatch({
          type: 'add_error',
          payload: 'Something went wrong, try restarting the app'
        });
      }
      };

      const getVehicleInfo = dispatch => async ({ vehicleNum }) => {
        try {
          const response = await tracker.get(`/vehicle?regNumber=RJ97rl7365`);
         if (response.data){
          console.log('response of getVehicleInfo: ', response.data.data);
          dispatch({ type: 'getvehicleinfo', payload: response.data.data });
         }
        } catch (err) {
            console.log('there is an error', err);
          dispatch({
            type: 'add_error',
            payload: 'Something went wrong, try restarting the app'
          });
        }
        };

        const getReport = dispatch => async ({ vehicleNum }) => {
          try {
            const response = await tracker.get(`/dashboard/report?startdate=2021-06-20 00:00:00&enddate=2021-07-30 00:00:00&page=0&size=10&sort=last_modified_date,desc`);
           if (response.data.content){
            console.log('response of getReport: ', response.data.content);
            dispatch({ type: 'getreport', payload: response.data.content });
           } else {
             dispatch({
              type: 'add_error',
              payload: 'Something went wrong, try restarting the app'
            });
           }
          } catch (err) {
              console.log('there is an error', err);
            dispatch({
              type: 'add_error',
              payload: 'Something went wrong, try restarting the app'
            });
          }
          };

          const getComplaintReport = dispatch => async ({ vehicleNum }) => {
            try {
              const response = await tracker.get(`/complaint/report?startdate=2021-06-20 00:00:00&enddate=2021-07-30 00:00:00&page=0&size=10&sort=last_modified_date,desc`);
             if (response.data.complaints.content){
              console.log('response of getReport: ', response.data.complaints.content);
              dispatch({ type: 'getcomplaintreport', payload: response.data.complaints.content });
             } else {
               dispatch({
                type: 'add_error',
                payload: 'Something went wrong, try restarting the app'
              });
             }
            } catch (err) {
                console.log('there is an error', err);
              dispatch({
                type: 'add_error',
                payload: 'Something went wrong, try restarting the app'
              });
            }
            };

            const registerComplaint = dispatch => async ({ vehicleNum, name, contact, email }) => {
              try {
                const response = await tracker.post(`complaint/register`, { vehicleNumber: vehicleNum, complaineeName: name, complaineeContact: contact, complaintComments: email  });
               if (response.data){
                console.log('response of registercomplaint: ', response.data);
                dispatch({ type: 'registercomplaint' });
               }
              } catch (err) {
                  console.log('there is an error', err);
                  dispatch({ type: 'registercomplaint' }); //use this for demo, by commeting below dispatch
               // dispatch({ type: 'add_error', payload: 'Something went wrong, try restarting the app' });
              }
              };

              const closeComplaint = dispatch => async ({ vehicleNum }) => {
                try {
                  const response = await tracker.post(`complaint/close`, { vehicleNumber: vehicleNum });
                 if (response.data){
                  console.log('response of closecomplaint: ', response.data);
                  dispatch({ type: 'closecomplaint', payload: response.data });
                 } else {
                   dispatch({
                    type: 'add_error',
                    payload: 'Something went wrong, try restarting the app'
                  });
                 }
                } catch (err) {
                    console.log('there is an error', err);
                  dispatch({
                    type: 'add_error',
                    payload: 'Something went wrong, try restarting the app'
                  });
                }
                };
        
   

const pucModal = dispatch => async () => {
  dispatch({ type: 'modal', payload: true });
 };

 const refreshPuc = dispatch => async () => {
  dispatch({ type: 'refreshpuc' });
 };
           
    
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};


     
const signout = dispatch => async () => {
  await localStorage.removeItem('token');
  dispatch({ type: 'signout' });
  };


  const changeToDarkMode = dispatch => async () => {
    dispatch({ type: 'changemode', payload: 'Dark Mode' })
  };

  const changeToLightMode = dispatch => async () => {
    dispatch({ type: 'changemode', payload: 'Light Mode' })
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, getOtp, getDonut, getVehicleInfo, refreshPuc, getReport, getComplaintReport, registerComplaint, closeComplaint, verifyOtp, getBar, pucModal, signout, clearErrorMessage, changeToDarkMode, changeToLightMode },
  { token: null, donut: null, bar: null, vehicle: null, reports: null, complaintreport: null, verified: false, errorMessage: '', profile: null, mode: 'Dark Mode', pmodal: false }
);

