import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { 
    Button,
    Grid, 
    Typography, 
    TextField, 
    FormHelperText, 
    FormControl, 
    Radio, 
    RadioGroup, 
    FormControlLabel
} from "@mui/material";

// class based component that displays create room page information
export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);

        // create initial state for component
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        };
    }

    // function to handle user changing votesToSkip value in form
    handleVotesChange = (e) => {
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    // function to handle user changing guestCanPause value in form
    handlePauseChange = (e) => {
        this.setState({
            guestCanPause: e.target.value === "true" ? true: false,
        });
    }

    // function to handle the Create a Room button being pressed
    handleRoomButtonPressed = () => {
        // create options for Room creation POST request
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause,
            }),
        };

        // send request to API and return response from API
        fetch("/api/create-room", requestOptions)
        .then((response) => response.json())
        .then((data) => this.props.history.push('/room/' + data.code));
    }

    render() {
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create a Room!
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText component="div">
                        <div align="center">Guest Control of Playback</div>
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={this.handlePauseChange}>
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary"/>}
                            label="Play/Pause"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="secondary"/>}
                            label="No Control"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                        required={true}
                        type="number" 
                        onChange={this.handleVotesChange}
                        defaultValue={this.defaultVotes}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center"},
                        }}
                    />
                    <FormHelperText component="div">
                        <div align="center">
                            Votes Required to Skip a Song
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                color="primary"
                variant="contained"
                onClick={this.handleRoomButtonPressed}
                >
                    Create a Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>Back</Button>
            </Grid>
        </Grid>;
    }
}