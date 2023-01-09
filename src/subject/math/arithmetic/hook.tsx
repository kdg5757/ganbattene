import type { QuestionListType } from "./type";

export const useAutoNumberIssue = ( digit: number = 11, type: string = '+' ): Array<number> => {
    return [...Array( type.split( ',' ).length + 1 )].map(() => {
        const number = Math.floor( Math.random() * digit );
        if ( number === 0 ) {
            return 1;
        }
        return number;
    });
};

export const useAutoSignIssue = ( numbers:number[], type: string = '+' ): Array<number|string> => {
    const sign: string[] = type.split( ',' );
    return numbers.reduce(( data: Array<number|string>, n, i ) => {
        if ( sign[ i - 1 ] ) {
            data.push( sign[ i - 1 ] );
        }
        data.push( n );
        return data;
    }, []);
};

export const useAutoQuestionList = ( questionCount: number = 10, digit: number = 11, type: string = '+' ): QuestionListType[] => {
    return [...Array(questionCount)].reduce(( data: QuestionListType[], _, id ) => {
        const numbers = useAutoNumberIssue( digit, type );
        const quest = useAutoSignIssue( numbers, type );
        const questText = quest.join( ' ' );
        const formula = questText.replace( /x/g, '*' ).replace( /÷/g, '/' );
        const answer = Function(`return (${formula});`)();
        const decimalPoint = 1;
        const safeAnswer = Math.floor( answer * Math.pow( 10, decimalPoint ) ) / Math.pow( 10, decimalPoint );
        data.push({
            id,
            quest: questText,
            answer: safeAnswer,
            input: '',
            error: false
        });
        return data;
    }, []);
};