import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, deletePost } from '../features/postsSlice';
import PostForm from './PostForm';

const PostsDisplay = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const [editPostId, setEditPostId] = useState(null);

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    };

    const handleEdit = (post) => {
        setEditPostId(post.id);
    };

    return (
        <div className="posts-container">
            {posts.map(post => (
                <div key={post.id} className="post">
                    {editPostId === post.id ? (
                        <PostForm
                            postId={post.id}
                            initialTitle={post.title}
                            initialDescription={post.description}
                            initialImage={post.image}
                            onCancel={() => setEditPostId(null)}
                        />
                    ) : (
                        <>
                            <img src={post.image} alt={post.title} style={{ maxWidth: '200px' }} />
                            <h3>Post #{post.id} {post.title}</h3>
                            <p>{post.description}</p>
                            <button onClick={() => handleEdit(post)}>Edit</button>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostsDisplay;
