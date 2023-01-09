import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "../common";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../type";
type RootParamList = {
    Screen1: undefined;
    Screen2: { score: number, goal: number, medal: number };
};
const ScoringResult = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ScoringResult'>>();
    const route = useRoute<RouteProp<RootParamList, 'Screen2'>>();
    const score = route.params.score;
    const goal = route.params.goal;
    const medal = route.params.medal;
    let text = 'すばらしい！';
    if ( goal > score ) {
        text = '残念…';
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>採点結果</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.score}>{score}<Text style={styles.scoreText}>点</Text></Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.comment}>{text}</Text>
                </View>
                <View><Button buttonStyle={styles.backBtn} textStyle={styles.backBtnText} onPress={() => navigation.goBack()}>戻る</Button></View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 40
    },
    score: {
        fontSize: 100,
        textAlign: 'center'
    },
    scoreText: {
        fontSize: 60
    },
    comment: {
        textAlign: 'center',
        fontSize: 20
    },
    backBtn: {
        margin: 30,
        marginTop: 50,
        backgroundColor: '#049be1',
        padding: 20
    },
    backBtnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    }
});
export default ScoringResult;