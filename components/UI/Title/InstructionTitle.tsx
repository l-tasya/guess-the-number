import {Dimensions, StyleSheet, Text} from "react-native";
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
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    title: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380?24:36,
        fontFamily: 'my-font-title',
        textAlign: 'center',
        marginBottom: 12,
    },
})

export default InstructionTitle