import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LendIt</Text>
      <Text style={styles.tagline}>Connecting Neighbors, Sharing Resources</Text>
      <Button title="Start" onPress={() => navigation.navigate('Profile')} />
      <Button title="Open App" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold' },
  tagline: { fontSize: 16, marginVertical: 20 },
});

export default WelcomeScreen;
