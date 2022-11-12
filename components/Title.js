import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 16,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FF9B42',
    borderWidth: 2,
    borderColor: '#FF9B42',
  },
});

export default Title;
