import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.points}>29 Points</Text>
      <Text style={styles.description}>+150 points each time something is borrowed or rented</Text>
      <Text style={styles.badge}>Green Thumb</Text>
      <Text style={styles.badge}>Sports Lover</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  points: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, marginVertical: 10 },
  badge: { fontSize: 18, marginVertical: 5 },
});

export default ProfileScreen;
