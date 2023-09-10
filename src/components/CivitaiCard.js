import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLink, removeLink } from '../redux/links';
function CivitaiCard({ modelName, modelLink, image, downloadUrl }) {
  
  const generatedLinks = useSelector((state) => state.selectedLinks.selectedLinks);

  const [isSelected, setIsSelected] = useState(generatedLinks.includes(downloadUrl));
  const dispatch = useDispatch();

  const cardStyle = {
    width: '200px',
    height: '400px',
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: isSelected ? '2px solid green' : '2px solid black',
    transition: 'border-color 0.3s',
    position: 'relative',
    transform: isSelected ? 'translateY(-5px)' : 'none', // Card stays up when selected
    boxShadow: isSelected ? '0px 8px 12px rgba(0, 128, 0, 0.4)' : 'none', // Green shadow when selected
  };

  const bannerStyle = {
    backgroundColor: isSelected ? 'green' : 'black',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
    transition: 'background-color 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  };

  const toggleSelect = () => {
    if (isSelected) {
      dispatch(removeLink(downloadUrl));
      setIsSelected(!isSelected);
      console.log(generatedLinks);
      console.log(downloadUrl);
    }
    else {
      dispatch(addLink(downloadUrl));
      setIsSelected(!isSelected);
      console.log(generatedLinks);
    }
  };

  return (
    <div style={cardStyle} onClick={toggleSelect}>
      <a href={modelLink} style={{ textDecoration: 'none', color: 'white' }}>
        <div style={bannerStyle}>
          {modelName}
        </div>
      </a>
      <img src={image} alt={modelName} style={imageStyle} />
    </div>
  );
}

export default CivitaiCard;
