import {Pressable, StyleSheet, Text, View,} from "react-native";
import React from "react";
import Colors from "../../../util/colors";


interface IProps {
    onClick: () => void,
    children: React.ReactNode
}


const PrimaryButton: React.FC<IProps> = ({onClick, children}) => {
    return <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onClick}
                   style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                   android_ripple={{color: Colors.primary600}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>

}

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'my-font',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})

export default PrimaryButton;