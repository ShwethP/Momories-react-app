import axios from 'axios';
//here we are going to use redux as it;ll increase the scalability as the project grows

const url = 'http://localhost:5000/posts';

export const fetchPostsAPI = () => axios.get(url);
// for redux implementation we created actions and reducer file under src
//let's create a function to update our db when someon submits the form in form.js

export const createPostAPI = (newPost) => axios.post(url, newPost);
//for updation function we are calling action from Form component updatepostdispatch fro which we need api to call here

export const updatePostAPI = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//for delete a post we have to call action from delete
export const deletePostAPI = (id) => axios.delete(`${url}/${id}`);

//to update the likes on everysingle post as the like button clicks
export const likePostAPI = (id) => axios.patch(`${url}/${id}/likePost`);
