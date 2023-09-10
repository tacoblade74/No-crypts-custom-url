import React from 'react';

const Row = ({ children }) => {
  const rowContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto', // Enable horizontal scrolling
    whiteSpace: 'nowrap',
    padding: '10px'
  };

  const rowItemStyle = {
    flex: '0 0 200px', // Fixed width of 200px
    // height: 'px', // Fixed height of 400px
    marginRight: '20px', // Add some space between items
  };

  return (
    <div className="row-container" style={rowContainerStyle}>
      {React.Children.map(children, (child) => (
        <div className="row-item" style={rowItemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Row;
