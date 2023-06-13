import React, { Component } from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import { Button, Grid, Typography, ButtonGroup } from "@mui/material";
import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link, 
    Redirect,
} from 'react-router-dom';



// class based component that displays home page information
export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            roomCode: null,
        };
    }

    // retrieve the user's code from Django session to move them to their previous Room
    async componentDidMount() {
        fetch('/api/user-in-room')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    roomCode: data.code
                });
            });
    }

    // function to render the UI for the Home Page
    renderHomePage() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        Music with Friends!
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to='/join' component={ Link }>
                            Join a Room
                        </Button>
                        <Button color="secondary" to='/create' component={ Link }>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>

            </Grid>
        );
    }

    // returns the proper component based on path received from browser
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={() => {
                        return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`}/>) : this.renderHomePage()
                    }}>
                    </Route>
                    <Route path='/join' component={JoinRoomPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path="/room/:roomCode" component={Room}/>
                </Switch>
            </Router>
        );
    }
}
