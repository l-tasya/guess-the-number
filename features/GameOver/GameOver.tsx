import React from "react";
import {Dimensions, Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {Title} from "../../components/UI/Title/Title";
import Colors from "../../util/colors";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";

interface IProps {
    userNumber: number,
    rounds: number,
    restart: () => void,
}

const GameOver: React.FC<IProps> = ({userNumber, rounds, restart}) => {
    const {width, height} = useWindowDimensions()
    let content = <>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
            Your phone need <Text style={styles.highlight}>{rounds}</Text> round to guess the
            number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
    </>

    if (width > 500) {
        content = <>
            <View style={styles.imageContainerWide}>
                <Image style={styles.image} source={require('../../assets/success.png')}/>
            </View>
            <Text style={[styles.summaryText,{marginVertical: 8}]}>
                Your phone need <Text style={styles.highlight}>{rounds}</Text> round to guess the
                number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
        </>
    }
    const marginTopValue = height < 400 ? 0 : height / 10;
    return <View style={[styles.container, {marginTop: marginTopValue}]}>
        <Title>Game Over</Title>
        {content}
        <PrimaryButton onClick={() => restart()}>Start New Game</PrimaryButton>
    </View>
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        borderRadius: deviceWidth < 380 ? 75 : 150,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 5,
        borderColor: Colors.accent500,
        overflow: "hidden",
        margin: 36,
    },
    imageContainerWide: {
        borderWidth: 5,
        borderColor: Colors.accent500,
        borderRadius: deviceWidth < 380 ? 50 : 100,
        overflow: 'hidden',
        width: deviceWidth < 380 ? 100 : 150,
        height: deviceWidth < 380 ? 100 : 150,
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
