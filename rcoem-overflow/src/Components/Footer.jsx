import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Item from '@mui/material/ListItem'
import {BiLinkExternal} from "react-icons/bi"
import {IoIosPeople} from "react-icons/io"
import { BiMale ,BiFemale} from 'react-icons/bi'


export default function Footer() {
    return <footer>
        <Box
        px ={{ xs:3, sm: 10}} 
        py={{xs:5,sm:10}}
        bgcolor="black"
        color="white"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                        <Box ><IoIosPeople/> Rcoem Overflow</Box>
                        <Box >
                        <img src="./Assets/logo.png" alt="" />
                        <hr></hr>
                        </Box>
                    </Grid>
                  
                    <Grid item xs={10} sm={4}> 
                        <Box borderBottom={1}><BiLinkExternal/> Links</Box>
                        <Box>
                            <Item><Link href="/" color="inherit" >Contact us</Link></Item>
                        </Box>
                        <Box>
                            <Item><Link href="/" color="inherit" >Careers</Link></Item>
                        </Box>
                        <Box>
                            <Item><Link href="/" color="inherit" >FAQs</Link></Item>
                        </Box>
                        <Box>
                            <Item><Link href="/" color="inherit" >Teams</Link></Item>
                        </Box>
                        <Box>
                            <Item><Link href="/" color="inherit" >About us</Link></Item>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}><IoIosPeople/> Designed By</Box>
                        <Box >
                        <Item><BiMale/> Pratham Rajbhog</Item>
                        </Box>
                        <Box>
                        <Item><BiMale/> Bhusan Wanjari</Item>
                        </Box>
                        <Box>
                        <Item><BiMale/> Kush Munot</Item>
                        </Box>
                        <Box>
                        <Item><BiFemale/> Anjali Kushwaha</Item>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>


}