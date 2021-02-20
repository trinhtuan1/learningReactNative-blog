import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = React.useContext(BlogContext);
  const blogPost = state.find(blogPost => (
    blogPost.id === navigation.getParam('id')
  ));

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blogPost.title} - {blogPost.id}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
        <FontAwesome name="pencil" size={30} />
      </TouchableOpacity>
    )
  };
};

export default ShowScreen;