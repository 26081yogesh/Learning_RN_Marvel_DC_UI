import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function FlatCard() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingText1}>Marvel And DC</Text>
        <Text style={styles.headingText2}>Superheroes</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText1: {
    fontSize: 40,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  headingText2: {
    fontSize: 25,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 110,
    borderRadius: 4,
    margin: 8,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  red: {backgroundColor: 'red'},
  green: {backgroundColor: 'green'},
  black: {backgroundColor: 'black'},
});

export default FlatCard;
