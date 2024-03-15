import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../features/postsSlice';
import PostsDisplay from './PostsDisplay';
import AddPostModal from './AddPostModal';

const Posts = () => {
    const posts = useSelector(selectPosts);
    const [showAddPostModal, setShowAddPostModal] = useState(false);

    return (
        <div className="posts-section">
            {!showAddPostModal && (
                <h2>
                    Blog Posts 
                    <button 
                        onClick={() => setShowAddPostModal(true)} 
                        className="add-post">
                        Add Post
                    </button>
                </h2>
            )}
            {showAddPostModal ? (
                <AddPostModal 
                    onClose={() => setShowAddPostModal(false)}
                />
            ) : (
                <PostsDisplay />
            )}
        </div>
    );
};

export default Posts;
