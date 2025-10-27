import { StyleSheet, Text, View } from "react-native-web";

export const Footer = () => {
    return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. . .
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por mim com o auxilio do professor Will. 
        </Text>
      </View>
)};

const styles = StyleSheet.create({
    footer: {
        width: '80%',
      },
      footerText: {
        textAlign: 'center',
        color: '#98A0A8',
        fontSize: 12.5
      }
    });