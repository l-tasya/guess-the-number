import React from "react";
import {Dimensions, StyleSheet, Text, Platform} from "react-native";

interface IProps {
    children: string
}

export const Title: React.FC<IProps> = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    title: {
        fontSize: deviceWidth < 380?18:20,
        fontFamily: 'my-font',
        color: 'white',
        // borderWidth: Platform.OS === 'android' ? 2: 0,
        borderWidth: Platform.select({ios:0,android:2}),
        borderColor: 'white',
        padding: 16,
        margin: deviceWidth < 380?16:24,
        textAlign: 'center',
        width: 300,
        maxWidth: '80%',
    }
})