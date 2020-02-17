import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressWheel from 'react-native-waiting-wheel';

const App = () => {
  return (
    <View
      style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ marginBottom: 20 }}>Default with 3000ms</Text>
        <ProgressWheel duration={10000} size={50} />
      </View>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
      }
  })
};
export default App;
