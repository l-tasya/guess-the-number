import React from "react";
import {StyleSheet, Text} from "react-native";

interface IProps {
    children: string
}

export const Title: React.FC<IProps> = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}


const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontFamily: 'my-font',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        margin: 16,
        textAlign: 'center',
    }
})