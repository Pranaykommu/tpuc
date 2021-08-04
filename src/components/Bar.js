import React, { useContext, useState } from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartTooltip,
  } from "@progress/kendo-react-charts";
  import "hammerjs";
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { Context as AuthContext } from '../context/AuthContext';


  export default function Bar(){
    const [show, setShow] = useState('daily');
  
const [daily] = [
    [100, 123, 234, 343, 220, 270, 40],
  ];
  const [monthly] = [
      [100, 123, 234, 343, 220, 270, 40, 234, 343, 220, 270, 40],
    ];
    const [yearly] = [
        [100, 123],
      ];
  const daily_categories = [27, 26, 25, 24, 23, 22, 22];
  const monthly_categories = ['Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug'];
  const yearly_categories = ['2021', '2020', '2019'];
const { state: { mode }, signin } = useContext(AuthContext);

      return (
          <div>
              <div style={{ height: '70px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#25252600' }}>
                    <ButtonGroup  style={{ margin: '0 auto', marginTop: 20, }} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{
                            //
                            setShow('daily');
                        }} style={{ backgroundColor: show==='daily' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252525' : '#fafafa' }}>Last 7 days</Button>
                        <Button onClick={()=>{
                            //
                            setShow('monthly');
                        }} style={{ backgroundColor: show==='monthly' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252525' : '#fafafa' }}>Monthly</Button>
                        <Button onClick={()=>{
                            //
                            setShow('yearly');
                        }} style={{ backgroundColor: show==='yearly' ? mode==='Dark Mode' ? '#252526' : '#fafafa' : mode==='Dark Mode' ? '#1e1e1e' : '#ffffff', color: mode==='Light Mode' ? '#252526' : '#f3f3f599', borderColor: mode==='Dark Mode' ? '#252525' : '#fafafa' }}>Yearly</Button>
                    </ButtonGroup>
                </div>
                <div style={{ height: '250px', width: '100%',textAlign: 'center', margin: '0 auto', justifyContent: 'center', alignItems: 'center', backgroundColor: mode==='Light Mode' ? '#F3F3F500' : '#1e1e1e00', marginBottom: 20, marginTop: 20 }}>
                    <Chart style={{ height: '100%', width: '90%',margin: '0 auto',  }}>
                        <ChartTitle color='transparent' text="Units sold" />
                        <ChartCategoryAxis >
                        <ChartCategoryAxisItem color='#4287f560'   background='transparent' type='category' autoBaseUnitSteps='fit' categories={show==='yearly' ? yearly_categories : show==='monthly' ? monthly_categories : daily_categories}>
                            <ChartCategoryAxisTitle color='#4287f500'   text={show} />
                        </ChartCategoryAxisItem>
                        </ChartCategoryAxis>
                        <ChartSeries>
                        <ChartTooltip color='red' render={()=>{
                            return (
                                <div>
                                    {show==='yearly' ? yearly_categories : show==='monthly' ? monthly_categories : daily_categories}
                                </div>
                            )
                        }} />
                        <ChartSeriesItem field='order' a size='90px' type="bar" spacing={30} color='#4287f5'  data={show==='yearly' ? yearly : show==='monthly' ? monthly : daily} />
                        </ChartSeries>
                    </Chart>
                </div>
          </div>
      )
  }