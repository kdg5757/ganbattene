import React, { ReactNode } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

type lineProps = {
    id: number,
    value: string,
    onChangeText: Function,
    children: ReactNode,
    error?: boolean,
};

const QuestionLine = ( props: lineProps ) => {
    return(
        <View style={styles.line}>
            <Text style={{...styles.text }}>{props.children}</Text>
            <TextInput
                style={[ styles.input, props.error ? { borderColor: '#d20505', backgroundColor: '#ffd6d6' } : {} ]}
                keyboardType="numeric"
                value={props.value}
                onChangeText={( text: any ) => props.onChangeText( props.id, text )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        flexDirection: 'row',
        padding:10,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
    },
    input: {
        marginLeft: 10,
        padding: 10,
        width: 100,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#fff',
        fontSize: 20,
    }
});

export default QuestionLine;