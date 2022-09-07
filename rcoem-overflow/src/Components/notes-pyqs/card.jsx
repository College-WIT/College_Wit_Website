import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import folder from '../../Assets/folder3.svg'
import { Link } from '@mui/material';
class Folder extends Component {
    render() {
        return (
            <div>
                <Card sx={{
                    width: "150px",
                    height: "150px",
                    margin: "10px"

                }}>

                    <CardMedia
                        component="img"
                        height="100"
                        width="100"

                        image={folder}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{
                            alignItems: "center",
                            textAlign: "center",
                            fontFamily: "monospace"
                        }}>
                            Semester 1
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        )
    }
}
export default Folder;