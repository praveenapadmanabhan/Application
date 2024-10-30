import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Latexcollect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 30,
    color: '#333',
  },
});

// Register the main component
registerRootComponent(App);

export default App;
