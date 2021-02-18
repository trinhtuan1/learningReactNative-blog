import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = React.useContext(BlogContext);
  
  return (
    <View>
      <Text>Index Screen</Text>
      <Button
        title="Add Post"
        onPress={addBlogPost}
      />
      <FlatList
        data={data}
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