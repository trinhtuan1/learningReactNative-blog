import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = React.useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>Hello guy</Text>
      <Text>{value}</Text>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default IndexScreen;