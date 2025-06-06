import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/image1.webp')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>
        Amsterdam
      </Text>

      <Text style={styles.paragraph}>
        Amsterdam is the capital and largest city of the Netherlands
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
  },

  image: {
    width: 400,
    height: 200,
    borderRadius: 16,
  },

  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  }

});
