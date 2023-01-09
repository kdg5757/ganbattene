import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/Home';

// メインメニュー
import QuestionList from './src/menu/question/QuestionList';
import SaveQuestList from './src/menu/question/SaveQuestList';
import Setting from './src/menu/setting/Setting';

// 科目メニュー
import MathList from './src/subject/math/index';
import Arithmetic from './src/subject/math/arithmetic';

// 採点結果
import ScoringResult from './src/scoring-result';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'メニュー' }} />
                <Stack.Screen name="Question" component={QuestionList} options={{ title: '科目選択' }} />
                <Stack.Screen name="Setting" component={Setting} options={{ title: '設定' }} />
                <Stack.Screen name="MathList" component={MathList} options={{ title: '数学' }} />
                <Stack.Screen name="Arithmetic" component={Arithmetic} options={{ title: '算数' }} />
                <Stack.Screen name="ScoringResult" component={ScoringResult} options={{ title: '採点結果', headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name="SaveQuestList" component={SaveQuestList} options={{ title: '問題リスト' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}