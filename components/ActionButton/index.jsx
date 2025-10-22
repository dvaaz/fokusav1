import {Pressable, StyleSheet, Text} from 'react-native';

// function que poderá ser reaproveitada em todo projeto
export const ActionButton = ({ active, onPress, display}) => {
    return(
        <Pressable
        style= { active ? styles.contextButtonActive: null} /* booleano para representacao do botao ativo.*/
        onPress={onPress} 
        >
            <Text style={styles.contextButtonText}>{display}</Text> {/*recebe o texto par ao display no botão*/}
        </Pressable>
        )
}

const styles = StyleSheet.create({

    contextButtonActive: {
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText: {
      color: '#FFF',
      fontSize: 12.5,
      padding: 8,
    }
  })