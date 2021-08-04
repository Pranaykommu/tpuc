import React, { useContext, useState } from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import "hammerjs";
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { Context as AuthContext } from '../context/AuthContext';


  export default function Donut(){
      const fuel_data = [ {
        "kind": "Petrol", "share": 0.175, "color": "#ff9c2b"
    }, 
    {
        "kind": "Diesel", "share": 0.238, "color": "#ff2bc6"
    },
    {
        "kind": "CNG", "share": 0.118, "color": "#c6ff2b"
    }, 
];
const test_data = [ {
  "kind": "Pass", "share": 0.375, "color": "#32a852"
}, 
{
  "kind": "Fail", "share": 0.238, "color": "#ff3838"
},
{
  "kind": "Null", "share": 0.018, "color": "#4287f5"
}, 
];
const vehicle_data = [ {
  "kind": "BSI", "share": 0.175, "color": "#832bff"
}, 
{
  "kind": "BSVI", "share": 0.238, "color": "#2bffdf"
},
{
  "kind": "BSV", "share": 0.118, "color": "#c6ff2b"
}, 
{
  "kind": "BSIV", "share": 0.118, "color": "#a89532"
}, 
{
  "kind": "BSII", "share": 0.118, "color": "#c6ff2b70"
}, 
{
  "kind": "BSIII", "share": 0.118, "color": "#ff3838"
}, 
];
const { state: { mode }, signin } = useContext(AuthContext);
const [show, setShow] = useState('Fuel');

    const labelContent = (e) => e.category;
      return (
          <div>
              <div style={{ height: '70px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#25252600' }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: 20, }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('Fuel');
                        }} style={{ backgroundColor: show==='Fuel' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252525' : '#fafafa' }}>   Fuel   </Button>
                        <Button onClick={()=>{
                            //
                            setShow('Test Result');
                        }} style={{ backgroundColor: show==='Test Result' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252526' : '#fafafa' }}>Test Result</Button>
                        <Button onClick={()=>{
                            //
                            setShow('Vehicle');
                        }} style={{ backgroundColor: show==='Vehicle' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252526' : '#fafafa' }}> Emission Norms </Button>
                    </ButtonGroup>
                </div>
                <div style={{ height: '50%', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#1e1e1e00', marginBottom: 20, marginTop: 20 }}>
                    <Chart>
                        <ChartSeries>
                            <ChartSeriesItem size={50}
                                type="donut"
                                data={show==='Fuel' ? fuel_data : show==='Vehicle' ? vehicle_data : test_data}
                                categoryField="kind"
                                field="share">
                                <ChartSeriesLabels
                                color="#f3f3f5"
                                background='none'
                                content={labelContent}
                                />
                            </ChartSeriesItem>
                            </ChartSeries>
                        <ChartLegend visible={false} />
                    </Chart>
                </div>
          </div>
      )
  }