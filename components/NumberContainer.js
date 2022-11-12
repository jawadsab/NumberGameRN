import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: "#F7A072",
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText:{
        color:"#F7A072",
        fontWeight: "bold",
        fontSize:36
    }
});

export default NumberContainer;
