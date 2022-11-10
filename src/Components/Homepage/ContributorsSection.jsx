import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Avatar, Divider, List, ListItemIcon, Typography } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaGithubSquare } from "react-icons/fa"
import GitHubIcon from '@mui/icons-material/GitHub';
import MediaCard from './card.jsx';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#3C3938',
    ...theme.typography.body2,
    margin: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    height: 100,
    width: "100%"
}));

export default function Contributors() {
    return (
        // <div>
        //     <Grid container justifyContent="center" sx={{ paddingBottom: 5 }}>
        //         <Typography sx={{
        //             fontFamily:"monospace",
        //             fontSize:"50px"
        //         }}> Top Contributors </Typography>
        //     </Grid>



        //     <Grid container justifyContent='center'>
        //         <Grid item  xs={9}>


        //          <Grid container spacing={0}  sx={{
        //         border:"1px solid black",
        //         borderRadius:"10px"

        //     }}> 
        //          <Grid xs={11}>  

        //           <Card sx={{

        //                 // margin:"10px",

        //                 backgroundColor: '#3C3938',
        //                 borderRadius:"10px 0 0 10px",
        //                 color:"white"
        //             }}>
        //                 <CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left',
        //                     fontSize:"20px"
        //                 }}
        //                     avatar={
        //                         <Avatar sx={{
        //                             height: 60,
        //                             width: 60
        //                         }} variant="square"
        //                             alt="Remy Sharp"
        //                             src="https://cdn.dribbble.com/users/1472631/screenshots/4680345/avatar.png"
        //                         />

        //                     }
        //                     title={
        //                        <Typography sx={{
        //                         fontFamily:"monospace",
        //                         fontSize:"25px",
        //                         color:"white"
        //                        }}>
        //                         Antonio

        //                        </Typography>
        //                     }
        //                 /><CardContent sx={{
        //                     width: "90%",
        //                     position:"relative",
        //                     left:"70px",
        //                     top:"-30px"
        //                 }}>
        //                     <Typography variant="body2" color="white" sx={{
        //                         fontFamily: "monospace",}}>
        //                         This impressive paella is a perfect party dish and a fun meal to cook
        //                         together with your guests. Add 1 cup of frozen peas along with the mussels,
        //                         if you like.
        //                     </Typography>
        //                 </CardContent>
        //             </Card>
        //             </Grid>

        //             <Grid justifyContent="center" xs={1} sx={{
        //                 borderRadius:"0 10px 10px 0",
        //                 backgroundColor: '#3C3938',
        //                 padding:"10px",
        //                 justifyContent:"center",

        //             }}>
        //                 <List>
        //                     <ListItemIcon>
        //                       <LinkedInIcon sx={{
        //                         color:"white",
        //                         height:"50px",
        //                         width:"50px"

        //                       }}/>
        //                     </ListItemIcon>
        //                     <ListItemIcon>
        //                       <GitHubIcon sx={{
        //                         color:"white",
        //                         height:"50px",
        //                         width:"50px"

        //                       }}/>
        //                     </ListItemIcon>
        //                 </List>

        //             </Grid>

        //             </Grid>

        //             <Card sx={{
        //                 margin:"10px",
        //                 border:"1px solid black"
        //             }}>
        //                 <CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left',
        //                 }}
        //                     avatar={
        //                         <Avatar sx={{
        //                             height: 60,
        //                             width: 60
        //                         }} variant="square"
        //                             alt="Remy Sharp"
        //                             src="https://cdn.dribbble.com/users/1472631/screenshots/4680345/avatar.png"
        //                         />

        //                     }
        //                     title="Antonio"

        //                 /><CardContent sx={{
        //                     width: "90%",
        //                     position:"relative",
        //                     left:"70px",
        //                     top:"-30px"
        //                 }}>
        //                     <Typography variant="body2" color="Black" sx={{
        //                         fontFamily: "monospace",}}>
        //                         This impressive paella is a perfect party dish and a fun meal to cook
        //                         together with your guests. Add 1 cup of frozen peas along with the mussels,
        //                         if you like.
        //                     </Typography>
        //                 </CardContent>
        //             </Card>



        //             <Card sx={{
        //                 margin:"10px",
        //                 border:"1px solid black"
        //             }}>
        //                 <CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left',
        //                 }}
        //                     avatar={
        //                         <Avatar sx={{
        //                             height: 60,
        //                             width: 60
        //                         }} variant="square"
        //                             alt="Remy Sharp"
        //                             src="https://cdn.dribbble.com/users/1472631/screenshots/4680345/avatar.png"
        //                         />

        //                     }
        //                     title="Antonio"

        //                 /><CardContent sx={{
        //                     width: "90%",
        //                     position:"relative",
        //                     left:"70px",
        //                     top:"-30px"
        //                 }}>
        //                     <Typography variant="body2" color="Black" sx={{
        //                         fontFamily: "monospace",}}>
        //                         This impressive paella is a perfect party dish and a fun meal to cook
        //                         together with your guests. Add 1 cup of frozen peas along with the mussels,
        //                         if you like.
        //                     </Typography>
        //                 </CardContent>
        //             </Card>



        //     </Grid>
        // </Grid>

        // </div >


        //     <div>



        //     <Box sx={{
        //         flexGrow: 1,
        //         px: 5,
        //     }}>
        //         <Grid container spacing={4} justifyContent='center'>
        //             <Grid item xs={5} >
        //             <Item>
        //                 <CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left',}}
        //                     avatar={
        //                         <Avatar
        //                         sx={{
        //                             height: 60,
        //                             width:60}}

        //                             alt="Remy Sharp"
        //                             src="https://cdn0.iconfinder.com/data/icons/education-and-school-filled-outline-1/128/Primary_school_student_study_school_girl_avatar_child-1024.png"
        //                         />
        //                     }
        //                     title="Item"
        //                 />
        //                 </Item>
        //                 <Item><CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left'}}
        //                     avatar={
        //                         <Avatar
        //                         sx={{
        //                             height: 60,
        //                             width:60}}

        //                             alt="Remy Sharp"
        //                             src="https://cdn0.iconfinder.com/data/icons/education-and-school-filled-outline-1/128/Primary_school_student_study_school_girl_avatar_child-1024.png"
        //                         />
        //                     }
        //                     title="Item"
        //                 /></Item>
        //                 <Item><CardHeader sx={{
        //                     alignItems: 'left',
        //                     textAlign: 'left',
        //                     }}
        //                     avatar={
        //                         <Avatar
        //                             sx={{
        //                                 height: 60,
        //                                 width:60}}

        //                             alt="Remy Sharp"
        //                             src="https://cdn0.iconfinder.com/data/icons/education-and-school-filled-outline-1/128/Primary_school_student_study_school_girl_avatar_child-1024.png"
        //                         />
        //                     }
        //                     title="Item"
        //                 /></Item>
        //                 {/* <Item>Item</Item>
        //                 <Item>Item</Item> */}
        //             </Grid>

        //         </Grid>
        //     </Box>
        // </div>
        <Grid container  sx={{
            height: "auto",
        }}>
            <Grid container  justifyContent="center" >
                <Typography sx={{
                    fontSize: 60,
                    color: '#000000',
                    fontFamily: "'urw-din',sans-serif",
                    marginTop:"20px",
                    marginBottom:"20px"
                }}>Top Contributors
                </Typography>
            </Grid>
            <Grid  container justifyContent="center" sx={{
                marginTop:"40px",
                marginBottom:"40px",
               '@media (max-width: 1200px)': {
                display:"flex",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                },
                '@media (max-width: 900px)': {
                    display:"flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    },
                '@media (max-width: 700px)': {
                        display:"flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        },
                
         
            }}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            </Grid>
        </Grid>

    )
}


