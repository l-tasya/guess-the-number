import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View} from 'react-native';
import React, {useState} from "react";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import Colors from '../../util/colors';
import {Title} from "../../components/UI/Title/Title";
import Card from '../../components/UI/Card/Card';
import InstructionTitle from "../../components/UI/Title/InstructionTitle";


interface IProps {
    c1: (value: number) => void
}

const StartGameScreen: React.FC<IProps> = ({c1}) => {
    const [number, setNumber] = useState('')
    const [error, setError] = useState<string | null>(null)

    function confirm() {
        const chosenNumber = parseInt(number)
        if (isNaN(chosenNumber)) {
            setError('Invalid Value')
            return;
        }
        if (chosenNumber <= 0 || chosenNumber > 99) {
            setError('Value must be in range(0<x<99)')
            return;
        }
        c1(chosenNumber)
    }

    function onChangeHandler(e: string) {
        if (error) {
            setError(null)
        }
        setNumber(e)
    }

    function reset() {
        if (error) {
            setError(null)
        }
        setNumber('')

    }

    const { height} = useWindowDimensions()

    const marginTopValue = (height < 400) ? 0 : height / 10;
    return <ScrollView style={styles.screen}><KeyboardAvoidingView style={styles.screen} behavior={'position'}>
        <View style={[styles.rootContainer, {marginTop: marginTopValue}]}>
            <Title>Guess my Number</Title>
            <Card>
                <InstructionTitle>Input a number</InstructionTitle>
                <View>
                    <TextInput
                        maxLength={2}
                        value={number}
                        onChangeText={onChangeHandler}
                        keyboardType={'number-pad'}
                        style={styles.numberInput}
                        autoCapitalize={'none'}
                        autoComplete={"off"}
                        placeholder={'0'}
                        placeholderTextColor={Colors.primary500}
                    />
                </View>
                {error && <Text style={styles.errorText}>{error}</Text>}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={reset}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={confirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    </KeyboardAvoidingView>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    screen: {
        flex: 1,
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 8,
        fontFamily: 'my-font',
        textAlign: 'center',
        width: 50,

    },
    errorText: {
        fontSize: 10,
        color: Colors.error,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1
    }
})


export default StartGameScreen;