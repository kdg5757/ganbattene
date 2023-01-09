import React, { useState, ReactNode, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../../../type";
import type { QuestionListType } from "./type";
import { Text, SafeAreaView, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import QuestionLine from "./QuestLine";
import CreateQuest from "./CreateQuest";
import { Button } from "../../../common";
import { useAutoQuestionList } from "./hook";

const Arithmetic = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Arithmetic'>>();
    const init: QuestionListType[] = [];
    const [ count, setCount ] = useState( '10' );
    const [ digit, setDigit ] = useState( 10 );
    const [ type, setType ] = useState( '+' );
    const [ questArr, setQuests ] = useState( init );
    const [ btnColor, setBtnColor ] = useState( '#049be1' );
    const newQuestList = ( count:number, digit: number, type: string ): void => setQuests( useAutoQuestionList( count, digit, type ) );
    useEffect(() =>{
        newQuestList( parseFloat( count ), digit, type );
    }, []);

    const onChangeText = ( id: number, input: number ) => {
        setQuests( questArr.map(( text ) => {
            if ( text.id === id ) {
                return { ...text, input: input.toLocaleString() };
            } else {
                return text;
            }
        }));
    };
    const getText = ( id: number ): string => {
        const answer: Array<QuestionListType> = questArr.filter(( text ) => text.id === id );
        const minus = ( answer[ 0 ].answer < 0 ? '-' : '' );
        return answer[ 0 ] && answer[ 0 ].input ? minus + answer[ 0 ].input.replace( '-', '' ) : minus + '';
    };

    const onScoring = (): void => {
        const newData = questArr.map(( text ) => {
            if ( !text.input ) {
                return { ...text, error: true };
            } else {
                return { ...text, error: false };
            }
        });
        setQuests( newData );
        if ( newData.filter(( quest ) => quest.error === true ).length ) {
            return;
        }
        const questCnt = newData.length;
        const point = 100 / questCnt;
        const score = newData.reduce(( score, quest ) => {
            if ( quest.answer === parseFloat( quest.input ) ) {
                score += point;
            }
            return score;
        }, 0 );
        setQuests( newData.map(( quest ) => {
            if ( quest.answer !== parseFloat( quest.input ) ) {
                return { ...quest, error: true };
            } else {
                return { ...quest, error: false };
            }
        }) );
        navigation.navigate( 'ScoringResult', { score: Math.ceil( score ), goal: 80, medal: 100 } );
    };
    if ( !questArr.length ) {
        return <SafeAreaView><Text>問題がありません。</Text></SafeAreaView>;
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <CreateQuest count={count} digit={digit} type={type} setCount={setCount} setDigit={setDigit} setType={setType} onSubmit={newQuestList} />
                <ScrollView>
                    {questArr.map(( quest, i ) => <QuestionLine key={i} id={i} value={getText( i )} error={quest.error} onChangeText={onChangeText}>{quest.quest}</QuestionLine>)}
                </ScrollView>
                <Button buttonStyle={{ ...styles.scoringBtn, backgroundColor: btnColor }} textStyle={styles.scoringBtnText} onPress={onScoring} onPressIn={() => setBtnColor( 'rgba(4,155,225,0.5)' )} onPressOut={() => setBtnColor( '#049be1' )}>採点</Button>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scoringBtn: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        padding: 10,
        height: 60,
        backgroundColor: '#049be1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scoringBtnText: {
        fontSize: 30,
        color: '#fff',
    }
});

export default Arithmetic;