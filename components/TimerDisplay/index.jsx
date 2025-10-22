import { StyleSheet } from "react-native";

// inicio do component
export const TimerDisplay=({ totalSeconds }) =>{
    const time = new Date(totalSeconds * 1000) // ao receber os segundos que serão trabalhados como nanosegundos será feita a correção
    const options= {minute:'2-digit', second:'2-digit'}
    return (
        <Text style={styles.timer}>
            {time.toLocaleTimeString("pt-Br", options)}
        </Text>
    );
}

const styles = StyleSheet.create({
    timer:{
        fontSize: 54,
        color: '#FFFF',
        fontWeight: "bold",
        textAlign:"center",
    }
})