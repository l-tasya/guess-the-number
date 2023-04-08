import {Dimensions, StyleSheet, Text, View} from "react-native";
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
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth< 380?12:24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        fontSize: deviceWidth< 380? 24:36,
        fontFamily: 'my-font'
    }
})


export default NumberContainer