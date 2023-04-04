import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
    const post = useLoaderData()
    //console.log(post);
    return (
        <div>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default SinglePost;