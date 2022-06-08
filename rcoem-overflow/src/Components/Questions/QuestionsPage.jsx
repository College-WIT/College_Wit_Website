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

const quickAccBar = ["Home", "Questions", "Tags"];
const queTags = ["Tags", "Tags", "Tags", "Tags", "Tags"];

export default function QuestionsPage() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
            <Grid container justifyContent="center" sx={{
                paddingBottom: 1
            }}>
                <h3>Questions Page</h3>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xl={3} lg={2} md={2} sm={2} xs={12}>
                    <Item>Quick Access
                        {quickAccBar.map((content) => (
                            <Grid sx={{ padding: 2 }}>
                                <Button sx={{
                                    fontSize: 15,
                                    backgroundColor: "#E26639",
                                    width: 130,
                                    height: 35,
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "#41D450",
                                        opacity: 10,
                                    }
                                }}
                                    variant="contained" disableElevation>
                                    {content}
                                </Button>
                            </Grid>
                        ))}
                    </Item>
                </Grid>

                <Grid item xl={7} lg={8} md={8} sm={8} xs={12}>
                    <Item>Questions Section</Item>
                </Grid>
                <Grid item xl={3} lg={2} md={2} sm={2} xs={12}>

                    <Item>Tags
                        {queTags.map((content) => (
                            <Grid sx={{ padding: 1 }}>
                                <Button sx={{
                                    backgroundColor: "#E26639",
                                    width: 100,
                                    height: 25,
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "#41D450",
                                        opacity: 10,
                                    }
                                }}
                                    variant="contained" disableElevation>
                                    {content}
                                </Button>
                            </Grid>
                        ))}

                        <Grid sx={{ paddingTop: 10 }}>
                            <Button sx={{
                                backgroundColor: "#20D867",
                                width: 150,
                                height: 60,
                                borderRadius: 10,
                                fontSize: 15,
                                "&:hover": {
                                    backgroundColor: "#E26639",
                                    opacity: 10,
                                }
                            }} variant="contained" disableElevation>
                                Post a Question
                            </Button>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}