import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIntroText, setImageUrl } from '../features/introductionSlice';

interface Props {
  onClose: () => void;
}

const IntroductionEdit: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    dispatch(setImageUrl(image));
    dispatch(setIntroText(description));
    onClose();
  };

  return (
    <div>
      <div>
        <label htmlFor="image-url">Enter image URL:</label>
        <input
          id="image-url"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Enter description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default IntroductionEdit;
