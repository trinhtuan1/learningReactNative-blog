import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = React.useContext(BlogContext);

  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => (
    blogPost.id === id
  ));

  return (
    <BlogPostForm 
      initialValues={blogPost}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    /> 
  );
};

const styles = StyleSheet.create({

});

export default EditScreen;