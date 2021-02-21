import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = React.useContext(BlogContext);

  const blogPost = state.find(blogPost => (
    blogPost.id === navigation.getParam('id')
  ));

  const [ title, setTitle ] = React.useState(blogPost.title);

  return (
    <BlogPostForm /> 
  );
};

const styles = StyleSheet.create({

});

export default EditScreen;