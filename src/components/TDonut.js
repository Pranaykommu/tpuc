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


  export default function TDonut(){
const test_data = [ {
  "kind": "Closed", "share": 0.375, "color": "#32a852"
}, 
{
  "kind": "Open", "share": 0.238, "color": "#ff3838"
},
{
  "kind": "Null", "share": 0.018, "color": "#4287f5"
}, 
];
const { state: { mode }, signin } = useContext(AuthContext);
const [show, setShow] = useState('Cases');

    const labelContent = (e) => e.category;
      return (
          <div>
              <div style={{ height: '70px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#25252600' }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: 20, }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('Cases');
                        }} style={{ backgroundColor: show==='Fuel' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252525' : '#fafafa' }}>   Cases   </Button>
                    </ButtonGroup>
                </div>
                <div style={{ height: '50%', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#1e1e1e00', marginBottom: 20, marginTop: 20 }}>
                    <Chart>
                        <ChartSeries>
                            <ChartSeriesItem size={50}
                                type="donut"
                                data={test_data}
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