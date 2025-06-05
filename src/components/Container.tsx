import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      {children}
    </div>
  );
};

export default Container;