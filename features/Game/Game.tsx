import React, {useCallback, useEffect, useState} from "react";
import {Alert, FlatList, StyleSheet, useWindowDimensions, View} from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import {Title} from "../../components/UI/Title/Title";
import NumberContainer from "../../components/Game/NumberContainer";
import Card from "../../components/UI/Card/Card";
import InstructionTitle from "../../components/UI/Title/InstructionTitle";
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from "../../components/UI/GuessLogItem/GuessLogItem";

interface IProps {
    userNumber: number
    win: () => void
    inc: () => void
}

function generateRandomBetween(min: number, max: number, exclude: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;


    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const Game: React.FC<IProps> = ({userNumber, win, inc}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [current, setCurrent] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState<Array<number>>([initialGuess])
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])
    useEffect(() => {
        if (current === userNumber) {
            win()
        }
    }, [current])
    const nextGuessHandler = useCallback((direction: 'lower' | 'higher') => {
        if ((direction === 'lower' && current < userNumber) || (direction === 'higher' && current > userNumber)) {
            Alert.alert("Don't lie", "You know this is wrong", [
                {text: "Sorry", style: 'cancel'}
            ])
            return;
        }
        if (direction === "lower") {
            maxBoundary = current;
            inc()
        } else {
            minBoundary = current + 1;
            inc()
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, current)
        setCurrent(newRndNumber)
        setGuessRounds(prevState => [...prevState, newRndNumber])
    }, [current, maxBoundary, minBoundary, generateRandomBetween])

    const guessRoundListLength = guessRounds.length
    const {width, height} = useWindowDimensions()
    const marginTopValue = (height < 400) ? 0 : height / 10;


    let content = <><NumberContainer>
        {current}
    </NumberContainer>
        <Card>
            <InstructionTitle>Higher or lower?</InstructionTitle>
            <View style={styles.buttonsContainer}>
                <View style={{flex: 1}}><PrimaryButton onClick={() => nextGuessHandler('lower')}>
                    <Ionicons name={'md-remove'} size={24} color={'#FFF'}/>
                </PrimaryButton></View>
                <View style={{flex: 1}}><PrimaryButton onClick={() => nextGuessHandler('higher')}>
                    <Ionicons name={'md-add'} size={24} color={'#FFF'}/>
                </PrimaryButton></View>
            </View>
        </Card>
    </>


    if (width > 500) {
        content = <>
            <InstructionTitle>Higher or lower?</InstructionTitle>
            <View style={styles.buttonsContainerWide}>
                <PrimaryButton style={styles.wideButton} onClick={() => nextGuessHandler('higher')}>
                    <Ionicons name={'md-add'} size={24} color={'#FFF'}/>
                </PrimaryButton>

                <NumberContainer>{current}</NumberContainer>

                <PrimaryButton style={styles.wideButton} onClick={() => nextGuessHandler('lower')}>
                    <Ionicons name={'md-remove'} size={24} color={'#FFF'}/>
                </PrimaryButton>
            </View>
        </>
    }

    return <View style={[styles.screen, {marginTop: marginTopValue}]}>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.log}>
            <FlatList data={guessRounds}
                      alwaysBounceHorizontal={false}
                      renderItem={(r) => {
                          return <GuessLogItem guess={r.item} roundNumber={guessRoundListLength - r.index}/>
                      }}

                      keyExtractor={item => item.toString()}
            />
        </View>
    </View>
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    log: {
        flex: 1,
        width: '80%',
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    wideButton: {
        width: 100,
        justifyContent: 'center',
    }

})


export default Game;