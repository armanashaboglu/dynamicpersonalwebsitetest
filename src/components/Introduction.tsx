import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIntroduction, setIntroText, setImageUrl } from '../features/introductionSlice';

const Introduction = () => {
    const { introText, imageUrl } = useSelector(selectIntroduction);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [image, setImage] = useState(imageUrl);
    const [description, setDescription] = useState(introText);

    const handleSave = () => {
        dispatch(setImageUrl(image));
        dispatch(setIntroText(description));
        setEditMode(false);
    };

    return (
        <div className="my-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Arman Ashaboglu
                <button 
                        onClick={() => setEditMode(true)} 
                        className="edit-intro bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                </h1>
            </div>
            {editMode ? (
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="input input-bordered w-full max-w-xs my-2"
                    />
                    <textarea
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea textarea-bordered w-full max-w-xs my-2"
                    />
                    <div className="flex justify-start">
                        <button onClick={handleSave} className="btn-save bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
                        <button onClick={() => setEditMode(false)} className="btn-cancel bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    {imageUrl && <img src={imageUrl} alt="Introduction" className="my-2 max-w-xs" />}
                    <p className="my-2">{introText}</p>
                </div>
            )}
        </div>
    );
};

export default Introduction;
