export const starClimbs = [
    { start: 9, end: 34, drop: 5, type: 'star' },
    { start: 21, end: 42, drop: 12, type: 'star' },
    { start: 28, end: 77, drop: 15, type: 'star' },
    { start: 40, end: 59, drop: 24, type: 'star' },
    { start: 51, end: 67, drop: 11, type: 'star' },
    { start: 63, end: 81, drop: 45, type: 'star' },
    { start: 71, end: 91, drop: 34, type: 'star' },
];

// The cells that will trigger a question. These are the starting points of the stars.
export const questionCells = starClimbs.map(s => s.start);

// Sample questions.
export const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2 * 2?",
        options: ["8", "6", "4", "10"],
        correctAnswer: "6"
    }
];

export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};