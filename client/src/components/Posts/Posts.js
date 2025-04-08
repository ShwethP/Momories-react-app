import React from 'react'
import { Grid2, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from "./styles";
// import memories from '../../images/memories.png'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    // const posts = [{
    //     selectedFile: { memories },
    //     creator: 'react-react',
    //     message: 'firsttryofobject',
    //     createdAt: '2024/14/10T10:00:29',
    //     tags: ['say', 'hello'],
    //     likeCount: 3
    // }]

    console.log(posts);


    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid2 className={classes.container} container alignItems={'stretch'} spacing={3}>
                {posts.map(((post) =>
                    <Grid2 key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid2>
                ))}

            </Grid2>
        )
    )
}

export default Posts
