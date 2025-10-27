import { StyleSheet, TextInput } from "react-native";

export const InputTimer = ({mesage}) => {
    return (
        <TextInput placeholder={mesage}>

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

