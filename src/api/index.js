import { decodeQuestions } from "../utils/decodeQuestions";


export const getApiQuestions = async () => {
    Promise.all([
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=url3986'),
        fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&encode=url3986'),
        fetch('https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple&encode=url3986')
    ]).then((responses) => {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }).then((data) => {
        const questions = [];
        data.forEach((result) => {
            const { results } = result;
            questions.push(...results)
        })
        return decodeQuestions(questions)
    }).catch((error) => {
        console.log(error);
    });
}