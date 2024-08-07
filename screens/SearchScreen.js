import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Items</Text>
      <Button title="Best Fit" onPress={() => {}} />
      <Button title="Borrow Cost" onPress={() => {}} />
      <Button title="Tools" onPress={() => navigation.navigate('Listings', { category: 'Tools' })} />
      <Button title="Party Supplies" onPress={() => navigation.navigate('Listings', { category: 'Party Supplies' })} />
      <Button title="Sports" onPress={() => navigation.navigate('Listings', { category: 'Sports' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default SearchScreen;
