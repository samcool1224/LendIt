import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListingsScreen = ({ route }) => {
  const { category } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Listings</Text>
      <View style={styles.item}>
        <Image source={{ uri: 'https://example.com/spikeball.jpg' }} style={styles.image} />
        <Text style={styles.itemTitle}>SpikeBall Set - $5 Per Day</Text>
        <Text style={styles.itemDescription}>Play this fun SpikeBall game anywhere you want.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  item: { marginVertical: 10 },
  image: { width: '100%', height: 200 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 16 },
});

export default ListingsScreen;
