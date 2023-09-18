import postModel from "./post-model.js";

export const findPost = (query = {}) => postModel.find(query);
export const createPost = (p) => postModel.create(p);
export const deletePost = (pid) => postModel.deleteOne({_id: pid});
