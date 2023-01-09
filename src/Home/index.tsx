import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../type";
import { SafeAreaView, Text, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={{...styles.button, ...styles.question}} onPress={() => navigation.navigate( 'Question' )}>
                <Icon name="pencil" size={50} />
                <Text style={styles.text}>科目選択</Text>
            </Pressable>
            <Pressable style={{...styles.button, ...styles.setting}} onPress={() => navigation.navigate( 'Setting' )}>
                <Icon name="cog" size={50} />
                <Text style={styles.text}>設定</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    button: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 50,
        marginLeft: 15
    },
    question: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000'
    },
    setting: {
        
    }
});

export default Home;