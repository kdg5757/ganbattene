import React from "react";
import { Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../../type";

const QuestionList = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Question'>>();
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.item} onPress={() => navigation.navigate( 'MathList' )}>
                <Icon name="calculator" size={26} />
                <Text style={styles.text}>数学</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    item: {
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 26,
        marginLeft: 10
    }
});
export default QuestionList;