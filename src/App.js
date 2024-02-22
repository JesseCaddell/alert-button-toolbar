import React from 'react';

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
};

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="First message">Click 1</AlertButton>
      <AlertButton message="Second message">Click 2</AlertButton>
    </div>
  );
};

export default Toolbar;