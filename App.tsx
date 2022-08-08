import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FabButton } from './src/components/FabButton';

export function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>

      <FabButton style={{ bottom: 80, right: 60 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
