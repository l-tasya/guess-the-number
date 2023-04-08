import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../../util/colors";

interface IProps {
    children: React.ReactNode
}
const NumberContainer: React.FC<IProps> =({children})=> {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'my-font'
    }
})


export default NumberContainer