import React, { ReactNode } from "react";
import { Text, Pressable, StyleSheet, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";
type buttonProps = {
    children: ReactNode,
    buttonStyle?: ViewStyle,
    textStyle?: TextStyle,
    onPress?: (event: GestureResponderEvent) => void,
    onPressIn?: (event: GestureResponderEvent) => void,
    onPressOut?: (event: GestureResponderEvent) => void,
};

export const Button = ( props: buttonProps ) => {
    return <Pressable style={props.buttonStyle} onPress={props.onPress} onPressIn={props.onPressIn} onPressOut={props.onPressOut}><Text style={props.textStyle}>{props.children}</Text></Pressable>;
};