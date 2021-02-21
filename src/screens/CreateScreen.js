import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = React.useContext(BlogContext);
  return (
    <BlogPostForm 
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />

  )
  
};

const styles = StyleSheet.create({
  
});

export default CreateScreen;