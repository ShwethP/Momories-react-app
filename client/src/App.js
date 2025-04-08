import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import { useDispatch } from "react-redux";
import { getPostsDispatch } from "./actions/posts";
import memories from './images/memories.png'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import useStyles from "./styles";

const App = () => {
    const [currentId, setCurrentId] = useState(null);//here we keep track of current id of selected post in post morehoriz button so app->posts->post->form

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsDispatch());
    }, [currentId, dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            {/* <Grid2 container justify="space-between" alignItems="stretch" spacing={3} columns={2}>
            </Grid2> */}
            <Grow in timeout={1000}>
                <Container>
                    <Grid2 container spacing={2}>
                        {/* Left Column: Posts */}
                        <Grid2 xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid2>

                        {/* Right Column: Form */}
                        <Grid2 xs={12} sm={5}>
                            <Typography variant="h4" gutterBottom>
                                Form
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Container>
            </Grow>
        </Container>

    );
}

export default App;
