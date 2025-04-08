import React, { useState } from 'react';
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';



function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);

    return (
        <Card className={classes.card}>

            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title}
            > </CardMedia>

            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body'>{moment(post.createdAt).fromNow()}</Typography>

            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => { setCurrentId(post._id) }} >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography></div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

            <CardContent>

                <div
                    style={{
                        maxHeight: expanded ? 'none' : '50px',
                        overflowY: expanded ? 'visible' : 'auto', // Scrollbar when collapsed
                        transition: 'max-height 0.3s ease',
                        paddingRight: '10px',
                    }}
                >
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </div>

                <Button
                    onClick={handleToggle}
                    size="small"
                    sx={{ marginTop: 1 }}
                >
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
            </CardContent>

            <CardActions className={classes.cardActions}>

                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>

                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>

            </CardActions>


        </Card>
    )
}

export default Post
