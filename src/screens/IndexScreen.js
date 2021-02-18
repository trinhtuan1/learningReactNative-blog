import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const blogPosts = React.useContext(BlogContext);
  
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            <Text>{item.title}</Text>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default IndexScreen;