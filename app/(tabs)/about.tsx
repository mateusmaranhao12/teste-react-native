import { View, Text, StyleSheet } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        About
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }

});
