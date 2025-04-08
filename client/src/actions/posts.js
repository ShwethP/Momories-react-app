//we need to import everything from api we'll be writing more code there so

import { createPostAPI, fetchPostsAPI, updatePostAPI, deletePostAPI, likePostAPI } from '../api';
import { postsCreateAction, postsFetchAllAction, updateCreateAction, deleteAction, likedAction } from '../reducers';
// import * as api from '../api/index.js';

//now create actions
//action creators are the fuctions that return action 
// actions will have an action type and payload where we save our posts
//since it's async action make sure to add redux dispath and return it


//here data is resolved from the responce that the fetching of api gave


//
// @param dispatch : Dispatch
//
export const getPostsDispatch = () => async (dispatch) => {
    try {
        console.log('HERE0')
        const { data } = await fetchPostsAPI();
        dispatch(postsFetchAllAction(data))
        console.log('HERE2')
    } catch (error) {
        console.log(error)
    }

}

export const createPostDispatch = (post) => async (dispatch) => {
    try {
        console.log('THERE0')
        console.log(post)
        const { data } = await createPostAPI(post);//it is actually comes as response after destructure we can get the data from that response... goes same for all
        console.log(data)
        dispatch(postsCreateAction(data))
        console.log('THERE2')
    } catch (error) {
        console.log(error)

    }
}

export const updatePostdispatch = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatePostAPI(id, post);
        dispatch(updateCreateAction(data))
    } catch (error) {
        console.log(error)

    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await deletePostAPI(id);

        dispatch(deleteAction(id));
        console.log(id)
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {

        const { data } = await likePostAPI(id);
        console.log(data);


        dispatch(likedAction(data));
    } catch (error) {
        console.log(error);
    }
};