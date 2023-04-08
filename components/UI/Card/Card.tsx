import {Dimensions, StyleSheet, View} from "react-native";
import React from "react";
import Colors from "../../../util/colors";

interface IProps {
    children: React.ReactNode
}
const Card: React.FC<IProps> = ({children}) =>{
    return <View style={styles.card} >
        {children}
    </View>
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    card: {
        width: 400,
        maxWidth: '90%',
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.25,
        alignItems: 'center',
        textAlign: 'center',
        margin: deviceWidth < 380?16:24,
    },
})

export default  Card