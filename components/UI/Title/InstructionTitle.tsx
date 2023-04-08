import {StyleSheet, Text} from "react-native";
import React from "react";
import Colors from "../../../util/colors";

interface IProps {
    children: React.ReactNode
    style?: any
}

const InstructionTitle: React.FC<IProps> = ({children, style}) => {
    return <Text style={[styles.title, style]}>
        {children}
    </Text>
}

const styles = StyleSheet.create({
    title: {
        color: Colors.accent500,
        fontSize: 12,
        fontFamily: 'my-font',
        textAlign: 'center',
        marginBottom: 12,
    },
})

export default InstructionTitle