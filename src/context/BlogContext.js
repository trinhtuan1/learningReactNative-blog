import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={56}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;