class Question {
    constructor(obj) {
        this.question = decodeURIComponent(obj.question);
        this.category = decodeURIComponent(obj.category);
        this.difficulty = decodeURIComponent(obj.difficulty);
        this.correctAnswer = decodeURIComponent(obj["correct_answer"]);
        this.incorrectAnswers = obj["incorrect_answers"].map(value => decodeURIComponent(value))
    }
}

export const decodeQuestions = (arr) => {
    const decodedArray = []
    for (let q of arr) {
        decodedArray.push(new Question(q));
    }
    return decodedArray
}