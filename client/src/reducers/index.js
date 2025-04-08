// use main index.js file to start of redux

import { createSlice } from '@reduxjs/toolkit'

import { postsFetchAll, postsCreate, updatePost, deletePost, likecountPost } from './posts';

const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        postsFetchAll,
        postsCreate,
        updatePost,
        deletePost,
        likecountPost
    }
})

// export const { postsFetchAllAction, postsCreateAction } = slice.actions
export const postsFetchAllAction = slice.actions.postsFetchAll;
export const postsCreateAction = slice.actions.postsCreate;
export const updateCreateAction = slice.actions.updatePost;
export const deleteAction = slice.actions.deletePost;
export const likedAction = slice.actions.likecountPost;

export default slice

console.log(slice)
