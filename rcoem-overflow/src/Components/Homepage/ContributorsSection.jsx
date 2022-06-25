import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { CardHeader } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#E26639',
    ...theme.typography.body2,
    margin: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    height: 70,
}));

export default function Contributors() {
    return (
        <div>
            <Grid container justifyContent="center" sx={{
                paddingBottom: 5
            }}>
                <h1>Top Contributors</h1>
            </Grid>


            <Box sx={{
                flexGrow: 1,
                px: 5,
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <Item><CardHeader sx={{
                            alignItems: 'left',
                            textAlign: 'left',
                        }}
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn0.iconfinder.com/data/icons/education-and-school-filled-outline-1/128/Primary_school_student_study_school_girl_avatar_child-1024.png"
                                />
                            }
                            title="Item"
                        />``
                        </Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>Demo description</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}