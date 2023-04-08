import {Falsy, Pressable, RecursiveArray, RegisteredStyle, StyleSheet, Text, View, ViewStyle,} from "react-native";
import React from "react";
import Colors from "../../../util/colors";

interface IProps {
    onClick: () => void,
    children: React.ReactNode,
    style?: ViewStyle | Falsy | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>,
}


const PrimaryButton: React.FC<IProps> = ({onClick, children,style}) => {
    return <View style={[styles.buttonOuterContainer, style]}>
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonOuterContainer: {
        height: 44,
        borderRadius: 20,
        margin: 8,
        overflow: 'hidden',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'my-font-bold',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75,
    }
})

export default PrimaryButton;