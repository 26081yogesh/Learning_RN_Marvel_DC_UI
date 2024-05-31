import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

function ScrollableCard() {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.red]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.black]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.purple]}>
          <Text style={styles.text}>Purple</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    backgroundColor: '#d3d3d3',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 110,
    borderRadius: 4,
    margin: 8,
    elevation: 4,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  red: {backgroundColor: 'red'},
  green: {backgroundColor: 'green'},
  black: {backgroundColor: 'black'},
  blue: {backgroundColor: 'blue'},
  purple: {backgroundColor: 'purple'},
});

export default ScrollableCard;
