import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from "./features/Start/Start";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from 'react';
import Game from './features/Game/Game';
import GameOver from "./features/GameOver/GameOver";
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null)
    const [gameIsOver, setGameIsOver] = useState<boolean>(false)
    const [guessRound, setGuessRound] = useState<number>(0)
    const [fontsLoading] = useFonts({
        'my-font': require('./assets/fonts/digital-dream.regular.ttf'),
        'my-font-bold': require('./assets/fonts/digital-dream.fat.ttf'),
        'my-font-title': require('./assets/fonts/BALLSONTHERAMPAGE.ttf')
    })

    if (!fontsLoading) {
        return <AppLoading/>
    }

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    const restart = () => {
        setGameIsOver(false)
        setUserNumber(null)
        setGuessRound(0)
    }
    let screen = <StartGameScreen c1={pickedNumberHandler}/>
    const increment = () => {
        setGuessRound(prevState => prevState + 1)
    }
    if (userNumber) {
        screen = <Game userNumber={userNumber} win={() => setGameIsOver(true)} inc={increment}/>
    }
    if (gameIsOver && userNumber) {
        screen = <GameOver userNumber={userNumber} rounds={guessRound} restart={restart}/>
    }


    return <LinearGradient colors={['#033F63', '#28666E', '#7c9885', '#B5B682', '#FEDC97']} style={styles.rootScreen}>
        <ImageBackground
            style={styles.rootScreen}
            resizeMode={'cover'}
            source={require('./assets/E-City.jpg')}
            imageStyle={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                {screen}
            </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
}
const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,


    },
    container: {
        // paddingTop:deviceHeight<400?0:'10%',
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.2,
    }
});
