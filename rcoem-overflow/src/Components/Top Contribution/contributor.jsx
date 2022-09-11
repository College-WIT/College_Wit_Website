import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { Grid, Typography } from '@mui/material';

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

    <Grid container sx={{
      justifyContent:"center",
      padding:"30px",
      border:"3px solid black"
    }}>

    
    <List
    sx={{
      width: '60%',
      borderRadius:"10px",
      bgcolor: 'background.paper',
      border:"1px solid black"
    }}
  >
    <ListItem>
      <ListItemAvatar>
      <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.PDYcGdkYLGK7JNULCKd9jgHaHa?pid=ImgDet&rs=1" />
      </ListItemAvatar>
      <Typography  sx={{
        fontFamily:"monospace"
      }}>Lorem Ipsum
      </Typography>
    </ListItem>

    <Divider variant="inset" component="li" />
    
    <ListItem>
      <ListItemAvatar>
      <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />
      </ListItemAvatar>
      <Typography sx={{
        fontFamily:"monospace"
      }}>Lorem Ipsum</Typography>
    </ListItem>

    <Divider variant="inset" component="li" />

    <ListItem>
      <ListItemAvatar>
      <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.PDYcGdkYLGK7JNULCKd9jgHaHa?pid=ImgDet&rs=1" />
      </ListItemAvatar>
      <Typography  sx={{
        fontFamily:"monospace"
      }} >Lorem Ipsum</Typography>
    </ListItem>

  </List>
  </Grid>
  )
}

export default contributor