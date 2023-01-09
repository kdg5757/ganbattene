export type RootStackParamList = {
    Home: undefined;
    Question: undefined;
    Setting: undefined;
    MathList: undefined;
    Arithmetic: undefined;
    ScoringResult: {
        score: number;
        goal: number;
        medal: number;
        retry?: number;
    };
    SaveQuestList: {
        name: string;
        slug: string;
    };
};