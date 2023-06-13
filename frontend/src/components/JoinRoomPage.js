import React, { Component } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// class based component that displays room join page information
export default class JoinRoomPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomCode: "",
            error: ""
        }
    }

    handleTextFieldChange = (e) => {
        this.setState({
            roomCode: e.target.value
        });
    }

    roomButtonPressed = (e) => {
        // create options for Room join POST request
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: this.state.roomCode
            })
        };

        // send request to API and return response from API, moving user to Room page if valid
        fetch('/api/join-room', requestOptions)
            .then((response) => {
                if (response.ok) {
                    this.props.history.push(`/room/${this.state.roomCode}`);
                } else {
                    this.setState({error: "Room not found." });
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        return (
            <Grid container spacing= {1} align="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={this.state.error}
                        label="Code"
                        placeholder="Enter a Room Code"
                        value={this.state.roomCode}
                        helperText={this.state.error}
                        variant="outlined"
                        onChange={this.handleTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={this.roomButtonPressed}>
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}