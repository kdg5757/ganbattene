import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../../type";

type RootParamList = {
    Screen1: undefined;
    Screen2: { name: string, slug: string };
};
const SaveQuestList = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'SaveQuestList'>>();
    const route = useRoute<RouteProp<RootParamList, 'Screen2'>>();
    const name: string = route.params.name;
    const slug: string = route.params.slug;
    // navigation.navigate( slug );
    navigation.setOptions({
        title: `問題リスト(${name})`,
    });
    return (
        <SafeAreaView><Text>{name}{slug}</Text></SafeAreaView>
    );
};

export default SaveQuestList;