import { Pressable, StyleSheet, Text } from "react-native";

// Inicio do component
export const FokusButton = ({press, title}) =>{
    return(
    <Pressable style={styles.button} onPress= {press}> {/* corpo do botao */}
        <Text style={styles.buttonText}> {title} </Text> {/* texto do botao */}
    </Pressable>
    );
}; // fim do component

// estilos presentes no component
const styles = StyleSheet.create({
  
    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      textAlign: "center",
      color: '#021123',
      fontSize: 18,
    }
  })