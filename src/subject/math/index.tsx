import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../../type";
import { SafeAreaView, Pressable, Text, StyleSheet, View } from "react-native";

const MathList = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MathList'>>();
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.item} onPress={() => navigation.navigate( 'SaveQuestList', { name: '算数', slug: 'Arithmetic' } )}>
                <View style={styles.icon}>
                    <Text>+-</Text><Text>×÷</Text>
                </View>
                <Text style={styles.text}>算数</Text>
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
    icon: {
        display: 'flex'
    },
    text: {
        fontSize: 26,
        marginLeft: 10
    }
});
export default MathList;