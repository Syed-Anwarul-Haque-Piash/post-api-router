import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {body,id,title}=post;
    return (
        <div className='post'>
            <h3>TItle: {title}</h3>
            <p>Body: {body}</p>
            <p><Link to={`/post/${id}`}>Show single data</Link></p>
        </div>
    );
};

export default Post;