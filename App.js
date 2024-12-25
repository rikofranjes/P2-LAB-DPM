import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak teks dari kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Menentukan lebar area FlexBox
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#ff6347', // Warna bebas (Tomato)
  },
  box2: {
    backgroundColor: '#4682b4', // Warna bebas (SteelBlue)
  },
});

export default App;
