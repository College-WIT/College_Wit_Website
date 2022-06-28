import React from 'react'
import { Pie } from 'recharts';
import { PieChart } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import { Tooltip } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Grid, Button } from '@mui/material';


const contributor = () => {
  const data = [
    {
      name: 'User1',
      rank: 1,
      points: 250
    },
    {
      name: 'User2',
      rank: 2,
      points: 200
    },
    {
      name: 'User3',
      rank: 3,
      points: 150
    },
    {
      name: 'User4',
      rank: 4,
      points: 100
    },
    {
      name: 'User5',
      rank: 5,
      points: 50
    },
    {
      name: 'User6',
      rank: 6,
      points: 40
    },
    {
      name: 'User7',
      rank: 7,
      points: 30
    },
    {
      name: 'User8',
      rank: 8,
      points: 20
    },
    {
      name: 'User9',
      rank: 9,
      points: 10
    },
    {
      name: 'User10',
      rank: 10,
      points: 5
    }
  ];

  return (
    <Grid sx={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '5%',
      // backgroundColor: '#353839',
      backgroundColor: '#1B1B1B',
     
    }}> 
      <Grid sx={{
        paddingBottom: '2%',
        paddingTop: '2%',
        color: 'white',
      }} > <h2 align='center'>TOP CONTRIBUTORS</h2></Grid>

      {/* ****************BARCHART*********************** */}
      <Grid sx={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        alignItems: 'center',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: '#353839',
        
        // backgroundColor: '#0cbaba',
        // backgroundColor: linearGradient('315deg', '#0cbaba 0%', '#380036 74%'),
      }}>
        <BarChart
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          width={1000}
          height={400}
          data={data}
          margin={{right: 30, left: 30, bottom: 5 }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 40, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="points" fill="#E26639" background={{ fill: '#eee' }} />
        </BarChart>
      </Grid>
      {/* ----------------------------------------------------------------------- */}

      {/* ------------------------------LEADERBOARD------------------------------ */}

      </Grid>
  )
}

export default contributor