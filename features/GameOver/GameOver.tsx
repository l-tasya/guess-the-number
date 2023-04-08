import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Title} from "../../components/UI/Title/Title";
import Colors from "../../util/colors";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";

interface IProps {
    userNumber: number,
    rounds: number,
    restart: ()=>void,
}

const GameOver: React.FC<IProps> = ({userNumber,rounds, restart}) => {
    return <View style={styles.container}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
            Your phone need <Text style={styles.highlight}>{rounds}</Text> round to guess the
            number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onClick={() =>restart()}>Start New Game</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 24,
        flex: 1,
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 5,
        borderColor: Colors.accent500,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'my-font-bold',
    }
})


export default GameOver;
