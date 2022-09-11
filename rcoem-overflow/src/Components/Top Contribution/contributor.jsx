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
import * as animationData from '../../Assets/leader.json'
import Lottie from 'react-lottie';


const contributor = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (

    <Grid container sx={{
      justifyContent: "center",
      border: "3px solid black"
    }}>

      <Grid sx={{
        padding: "0px",

      }}>
        <Lottie options={defaultOptions}
          height='70%'
          width='70%'
        />

        <Typography sx={{
          alignItems: "center",
          textAlign: "center",
          fontFamily: "monospace",
          paddingTop: "20px",
          fontSize: "50px"
        }}
        >
          Leaderboard
        </Typography>
      </Grid>

      <List
        sx={{
          position: "relative",
          top: "-40px",
          width: '60%',
          borderRadius: "10px",
          bgcolor: 'background.paper',
          border: "1px solid black"
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard"
              src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
            <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography>
          </Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.bSDSLgaJWARNzNTKh3CjDAHaHa?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }} >Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard"
              src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography>
          </Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.bSDSLgaJWARNzNTKh3CjDAHaHa?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }} >Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard"
              src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography>
          </Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }}>Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.bSDSLgaJWARNzNTKh3CjDAHaHa?pid=ImgDet&rs=1" />
          </ListItemAvatar>
          <Typography sx={{
            fontFamily: "monospace"
          }} >Lorem Ipsum
          <Typography sx={{
              position:"relative",
              top:"-32px",
              left:"500px",
              // textAlign:"right",
              fontFamily: "monospace",
              // paddingTop: "20px",
              fontSize: "20px"
            }}
            >
              50 Points
            </Typography></Typography>
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
      </List>
    </Grid>
  )
}

export default contributor