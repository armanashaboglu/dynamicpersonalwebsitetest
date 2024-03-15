import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';

const AddPostModal = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addPost({ title, description, image }));
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white p-5 rounded-lg shadow-lg w-full max-w-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">New Post</h3>
                <input
                    type="text"
                    placeholder="Title of the post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Image URL of the post"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="input input-bordered w-full mb-2"
                />
                <textarea
                    placeholder="Description of the post"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea textarea-bordered w-full mb-2"
                />
                <div className="flex justify-end mt-4 space-x-2">
                    <button onClick={onClose} className="btn btn-ghost">Cancel</button>
                    <button onClick={handleSave} className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddPostModal;
