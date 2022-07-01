import axios from 'axios';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';

class notespyqs extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
        axios.post("api/uploadfile", formData);
    };
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h5>Choose before Pressing the Upload button</h5>
                </div>
            );
        }
    };

    render() {
        return (
            <Grid container justify='center'>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                    Upload!
                </button>
                {this.fileData()}
            </Grid>
        );
    }
}

export default notespyqs;