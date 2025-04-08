
export function postsFetchAll(postsState, action) {
    postsState.posts = action.payload
}

export function postsCreate(postsState, action) {
    postsState.posts = [...postsState.posts, action.payload]
}

export function updatePost(postsState, action) {
    postsState.posts = postsState.posts.map((post) => post._id === action.payload._id ? action.payload : post);
}

export function deletePost(postsState, action) {
    postsState.posts = postsState.posts.filter((post) => post._id !== action.payload);
}

export function likecountPost(postsState, action) {
    postsState.posts = postsState.posts.map((post) => post._id === action.payload._id ? action.payload : post);
}
