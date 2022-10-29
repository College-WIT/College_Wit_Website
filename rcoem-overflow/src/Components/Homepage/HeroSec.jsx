import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import "../../index.css";
import * as animationData from '../../Assets/searchLottie.json'
import Lottie from 'react-lottie';
import axios from "axios";



export default function Boxes() {

const nulldata={};
localStorage.setItem("SearchData", nulldata);
var getSearchData = async () => {
  console.log("ASYNC FUNCTION");
  await axios
    .get("https://rcoem-overflow-backend.herokuapp.com/view_search_questions")
    .then((response) => {
      console.log(response.data);
      var sss = localStorage.getItem("SearchData");
      if (sss != null) {
        localStorage.removeItem("SearchData");
      }
      const strJSON = JSON.stringify(response);
      localStorage.setItem("SearchData", strJSON);
      //var SearchData = JSON.parse(localStorage.getItem("SearchData")).data;
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMsg: "Error retrieving data",
      });
    });
};
   getSearchData();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    return (
        
            <Grid container justifyContent="center"
                sx={{
                    padding: 8,
                    '@media (max-width:1000px)': {
                        padding: 5
                    }
                }}>
                <Box
                    sx={{
                        width: 1000,
                        height: 550,
                        // backgroundColor: '#3C3938',
                        backgroundColor: '#2b2a2a',
                        // background: "linear-gradient(to right, #2b2a2a, #141313)",
                        borderRadius: '20px',
                    }}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="h5" sx={{
                            width: 600,
                            paddingTop: 5,
                            color: 'white',
                            textAlign: 'center',
                            fontFamily: 'Raleway Dots'

                        }}>
                            Every RCOEMian has a Tab to Open RCOEM-Overflow
                        </Typography>

                    </Grid>
                    <Grid sx={{
                        padding: 5
                    }} container justifyContent="center">
                        <Box
                            sx={{
                                width: 600,
                                height: 350,
                                backgroundColor: '#E26639',
                                position: 'relative',
                                borderRadius: '30px',
                                alignItems: "center"

                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                justifyContent: "center"

                            }}>
                                <Lottie options={defaultOptions}
                                    height='127px'
                                    width='50%'
                                />
                                <br />

                            </div>
                            {/* <div className='imageDiv'>
                        <Image className='search' src={search} />
                    </div> */}
                            <Grid container justifyContent="center">
                               
                                <Typography  sx={{
                                    width: 500,
                                    paddingTop: 4,
                                    color: 'white',
                                    fontFamily: "'urw-din',sans-serif",
                                }}>
                                    Find the best Answers to your Teachnical Questions, Help Others answer their's!
                                </Typography>

                            </Grid>
                            <Grid container justifyContent="center" sx={{
                               paddingTop:3
                            }}>
                                <Button className='exploreButton' variant='contained' startIcon={<ExploreIcon />} sx={{
                                    backgroundColor: '#20D867',
                                    "&:hover": {
                                        backgroundColor: "#41D450",
                                        opacity: 10,
                                    }

                                }}>Explore</Button>
                            </Grid>

                        </Box>
                    </Grid>

                </Box>
            </Grid>

      



    );
}