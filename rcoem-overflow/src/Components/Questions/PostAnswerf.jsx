// import React, { useRef } from "react";
// import { styled } from "@mui/material/styles";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Modal,
//   Box,
//   Link,
// } from "@mui/material";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import getCookie from "../../hooks/getCookie";
// import Leftbar from "./Leftbar";
// import Rightbar from "./Rightbar";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Chip from "@mui/material/Chip";
// import { useTheme } from "@mui/material/styles";

// const buttons = {
//   height: 40,
//   margin: "5px",
//   backgroundColor: "#E26639",
//   fontSize: 15,
// };
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const tags = ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
// const paperStyle = { padding: 40 };

// var modalText;

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const PostAnswerf = (props) => {
//   const theme = useTheme();
//   const [tag, setTag] = React.useState([]);
//   const navigate = useNavigate();
//   const form = useRef();
//   const qq=props.qq;

//   const PostAns = async (e) => {
//     //navigate('/Answered');
//     e.preventDefault();
//     console.log("FORM DATA");
//     // var form_data = {
//     //   email: JSON.parse(getCookie("login")).email,
//     //   password: JSON.parse(getCookie("login")).password,
//     //   question: qq,
//     //   answer: form.current.answer.value,
//     // }

//     var form_data = {
//       username: "check_boy",
//       password: "123",
//       question: qq,
//       answer: form.current.answer.value,
//     }
//     console.log(form_data);
//     await axios
//       .post("https://rcoem-overflow-backend.herokuapp.com/add_answer",form_data)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.data);
//       });
//       navigate('/Answered');
//   };

//   const PostAnsAno = async (e) => {
//     // const navigate = useNavigate();
//     e.preventDefault();
//     console.log("FORM DATA");
//     console.log(form.current);
//     var form_data = {
//       email: JSON.parse(getCookie("login")).email,
//       password: JSON.parse(getCookie("login")).password,
//       answer: form.current.answer.value,
//       anonymous: "True",
//     }
//     console.log(form_data);
//     // await axios
//     //   .post("https://rcoem-overflow-backend.herokuapp.com/add_question",form_data)
//     //   .then((response) => {
//     //     console.log(response.data);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error.data);
//     //   });
//       navigate('/Answered');
//   };

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setTag(typeof value === "string" ? value.split(",") : value);
//   };
//   return (
//     <div>
//       <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
//         <Grid container spacing={2}>
//           {/* ----------------------------QUICK ACCESS------------------------------ */}

//           <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
//             <Leftbar />
//           </Grid>
//           {/* ------------------------------------Questions------------------------------------- */}

//           <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
//             <Grid>
//               <Paper style={paperStyle}>
//                 <Grid align="center">
//                   <h2>Post Your Answer</h2>
//                 </Grid>
//                 <form ref={form} onSubmit={PostAns}
//                 // onSubmit={this.submitHandler}
//                 >
//                   <TextField
//                     multiline
//                     rows={6}
//                     label="Answer"
//                     type="text"
//                     name="answer"
//                     // value={question}
//                     placeholder="Write Your Answer"
//                     // onChange={this.changeHandler}
//                     fullWidth
//                     required
//                   />
//                   <Grid>
//                     <Button
//                       name="button1"
//                       id="1"
//                       style={buttons}
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       //   onClick={this.onClick}
//                     >
//                       Post
//                     </Button>
//                     <Button
//                       name="button2"
//                       id="2"
//                       style={buttons}
//                       // type="submit"
//                       variant="contained"
//                       color="primary"
//                       onClick={PostAnsAno}
//                     >
//                       Post Anonymously
//                     </Button>
//                   </Grid>
//                 </form>
//               </Paper>
//               <Modal
//                 // open={this.state.openModal}
//                 // onClose={this.onCloseModal}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Box sx={style}>
//                   <Typography
//                     id="modal-modal-title"
//                     variant="h6"
//                     component="h2"
//                   >
//                     {modalText}
//                   </Typography>
//                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <Link
//                       style={{ textDecoration: "None", color: "white" }}
//                       //   href={this.state.lastpage}
//                     >
//                       <Button
//                         style={buttons}
//                         variant="contained"
//                         color="primary"
//                       >
//                         {/* {this.state.message} */}
//                       </Button>
//                     </Link>
//                   </Typography>
//                 </Box>
//               </Modal>
//             </Grid>
//           </Grid>
//           <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
//             <Rightbar />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default PostAnswerf;
