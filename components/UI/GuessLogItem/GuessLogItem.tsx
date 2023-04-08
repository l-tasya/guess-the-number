import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Colors from "../../../util/colors";


interface IProps {
    roundNumber: number
    guess: number
}

const GuessLogItem: React.FC<IProps> = ({roundNumber, guess}) => {
    return <View style={styles.listItem}>
        <Text style={styles.text}># {roundNumber}</Text>
        <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
}

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        marginRight: 10,

    },
    text: {
        fontFamily: 'my-font-title',
        fontSize:deviceWidth<380?12:18,
    }
})

export default  GuessLogItem;