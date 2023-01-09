import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "../../../common";

type formProps = {
    count: string;
    setCount: Function;
    digit: number;
    setDigit: Function;
    type: string;
    setType: Function;
    onSubmit: Function;
};
const CreateQuest = ( props: formProps ): JSX.Element => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} keyboardType="decimal-pad" value={props.count} onChangeText={( val ) => props.setCount( val )} />
            <SelectCount value={props.digit} setValue={props.setDigit} />
            <SelectType value={props.type} setValue={props.setType} />
            <Button buttonStyle={styles.buttonStyle} textStyle={styles.buttonTextStyle} onPress={() => props.onSubmit( parseFloat( props.count ), props.digit, props.type )}>作成</Button>
        </View>
    );
};

type selectTypeProps = {
    value: string;
    setValue: Function
};
const SelectType = ( props: selectTypeProps ):JSX.Element => {
    const [ open, setOpen ] = useState(false);
    const [ items, setItems ] = useState([
        { label: '+', value: '+' },
        { label: '-', value: '-' },
        { label: 'x', value: 'x' },
        { label: '÷', value: '÷' },
        { label: '+,-', value: '+,-' },
        { label: '+,x', value: '+,x' },
        { label: '+,÷', value: '+,÷' },
        { label: '-,x', value: '-,x' },
        { label: '-,÷', value: '-,÷' },
        { label: 'x,÷', value: 'x,÷' },
        { label: '+,-,x,÷', value: '+,-,x,÷' },
    ]);
    return <DropDownPicker
        containerStyle={styles.selectStyle}
        maxHeight={225}
        open={open}
        value={props.value}
        items={items}
        setOpen={setOpen}
        setValue={( val ) => props.setValue( val )}
        setItems={setItems}
    />;
};

type selectCountProps = {
    value: number;
    setValue: Function
};
const SelectCount = ( props: selectCountProps ):JSX.Element => {
    const [ open, setOpen ] = useState(false);
    const [ items, setItems ] = useState([
        { label: '1桁', value: 10 },
        { label: '2桁', value: 100 },
        { label: '3桁', value: 1000 },
        { label: '4桁', value: 10000 },
        { label: '5桁', value: 100000 },
    ]);
    return <DropDownPicker
        containerStyle={{...styles.selectStyle, marginRight: 5 }}
        open={open}
        value={props.value}
        items={items}
        setOpen={setOpen}
        setValue={( val ) => props.setValue( val )}
        setItems={setItems}
    />;
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        zIndex: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginRight: 5,
        padding:10,
        height: 50,
        width: 70,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    selectStyle: {
        width: 100
    },
    buttonStyle: {
        marginLeft: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#049be1',
        borderRadius: 5
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center'
    }
});
export default CreateQuest;