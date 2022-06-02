import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#E26639',
    ...theme.typography.body2,
    padding: theme.spacing(1),
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

            <Stack direction="row">
                <Stack direction="column" spacing={2} sx={{
                    width: 500,
                    paddingLeft: 10,
                    paddingBottom: 10,
                }}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                    <Item>Item 5</Item>
                </Stack>

                <Stack direction="column" spacing={2} sx={{
                    width: 500,
                    paddingLeft: 10,
                    paddingBottom: 10,
                }}>
                    <Grid container justifyContent="center">
                        <Box
                            sx={{
                                width: 996,
                                height: 415,
                                backgroundColor: '#3C3938',
                                borderRadius: '30px'
                            }}
                        >
                                <Typography variant="h4" sx={{
                                    width: 500,
                                    paddingTop: 5,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>
                                    Demo Text
                                </Typography>
                        </Box>
                    </Grid>
                </Stack>
            </Stack>


        </div>
    )
}