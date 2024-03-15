import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../features/postsSlice';

const PostForm = ({ postId, initialTitle = '', initialDescription = '', initialImage = '', onCancel }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [image, setImage] = useState(initialImage);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (postId) {
            dispatch(updatePost({ id: postId, title, description, image }));
        } else {
            dispatch(addPost({ title, description, image }));
        }
        onCancel();
    };

    return (
        <div className="flex flex-col space-y-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="input input-bordered w-full"
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                className="input input-bordered w-full"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
            />
            <div className="flex justify-end space-x-2">
                <button onClick={handleSave} className="btn btn-primary">Save</button>
                <button onClick={onCancel} className="btn btn-ghost">Cancel</button>
            </div>
        </div>
    );
};

export default PostForm;
