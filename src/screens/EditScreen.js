import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = React.useContext(BlogContext);

  const blogPost = state.find(blogPost => (
    blogPost.id === navigation.getParam('id')
  ));

  const [ title, setTitle ] = React.useState(blogPost.title);

  return (
    <View>
      <Text>Edit Screen</Text>
      <TextInput
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default EditScreen;