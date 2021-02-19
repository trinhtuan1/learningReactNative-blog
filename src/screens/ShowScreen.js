import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = React.useContext(BlogContext);
  const blogPost = state.find(blogPost => (
    blogPost.id === navigation.getParam('id')
  ));

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blogPost.title} - {blogPost.id}</Text>
    </View>
  );
};

export default ShowScreen;