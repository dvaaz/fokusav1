import { StyleSheet, TextInput } from "react-native";
import React, { useState } from React;

export const InputTimer = ({mesage}) => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
        <TextInput placeholder={mesage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

