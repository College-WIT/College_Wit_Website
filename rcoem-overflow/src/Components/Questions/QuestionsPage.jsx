import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 1000,
}));

export default function QuestionsPage() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
            <Grid container justifyContent="center" sx={{
                paddingBottom: 1
            }}>
                <h3>Questions Page</h3>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Quick Access
                       <Grid sx={{  padding: 2 }}><Button sx={{ fontSize: 15,backgroundColor:"#E26639",width:150,height:40,height:40,borderRadius:10}} variant="contained" disableElevation> Home</Button></Grid>
                        <Grid sx={{  padding: 2 }}><Button sx={{ fontSize: 15, backgroundColor:"#E26639",width:150,height:40,borderRadius:10}} variant="contained" disableElevation> Questions</Button></Grid>
                        <Grid sx={{  padding: 2 }}><Button sx={{ fontSize: 15, backgroundColor:"#E26639",width:150,height:40,borderRadius:10}} variant="contained" disableElevation> Tags</Button></Grid>
                    </Item>
                </Grid>
                
                <Grid item xs={7}>
                    <Item>Questions Section</Item>
                </Grid>
                <Grid item xs={2}>
                <Item>Tags
                       <Grid sx={{  padding: 1 }}><Button sx={{ backgroundColor:"#E26639",width:100,height:25,borderRadius:10}} variant="contained" disableElevation>Tags</Button></Grid>
                        <Grid sx={{  padding: 1 }}><Button sx={{ backgroundColor:"#E26639",width:100,height:25,borderRadius:10}} variant="contained" disableElevation> Tags</Button></Grid>
                        <Grid sx={{  padding: 1 }}><Button sx={{ backgroundColor:"#E26639",width:100,height:25,borderRadius:10}} variant="contained" disableElevation> Tags</Button></Grid>

                        <Grid sx={{  paddingTop: 10 }}><Button sx={{ backgroundColor:"#20D867",width:180,height:40,borderRadius:10, fontSize: 15}} variant="contained" disableElevation>Post a Question</Button></Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
