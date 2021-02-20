import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [ title, setTitle ] = React.useState('');
  const [ content, setContent ] = React.useState('');
  const { addBlogPost } = React.useContext(BlogContext);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput 
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginLeft: 5,

  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    marginBottom: 15,
    height: 40
  }
});

export default CreateScreen;