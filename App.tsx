import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import FlatCard from './components/FlatCards';
import ScrollableCard from './components/ScrollableCards';
import FancyCard from './components/FancyCards';
import ActionCard from './components/ActionCards';
import LoopingThrough from './components/LoopingThrough';

function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.bg}>
        <FlatCard />
        {/* <ScrollableCard /> */}
        <ActionCard />
        <LoopingThrough />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({bg: {backgroundColor: '#000'}});

export default App;
