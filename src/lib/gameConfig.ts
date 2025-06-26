export const snakesAndLadders = [
    // Ladders
    { start: 4, end: 14, type: 'ladder' },
    { start: 9, end: 31, type: 'ladder' },
    { start: 20, end: 38, type: 'ladder' },
    { start: 28, end: 84, type: 'ladder' },
    { start: 40, end: 59, type: 'ladder' },
    { start: 63, end: 81, type: 'ladder' },
    { start: 71, end: 91, type: 'ladder' },
    { start: 75, end: 94, type: 'ladder' },
    { start: 87, end: 99, type: 'ladder' },

    // Snakes
    { start: 17, end: 7, type: 'snake' },
    { start: 54, end: 34, type: 'snake' },
    { start: 62, end: 18, type: 'snake' },
    { start: 64, end: 60, type: 'snake' },
    { start: 89, end: 26, type: 'snake' },
    { start: 93, end: 73, type: 'snake' },
    { start: 95, end: 75, type: 'snake' },
    { start: 98, end: 79, type: 'snake' },
];

export const questionCells = [7, 25, 39, 42, 56, 61, 78, 88, 99];

export const questions = [
    {
        question: "Which of these is a popular Cvent product for event management?",
        options: ["Cvent Attendee Hub", "Cvent Connect", "Cvent Engage", "Cvent Insights"],
        correctAnswer: "Cvent Attendee Hub"
    },
    {
        question: "What does ROI stand for in event planning?",
        options: ["Return on Investment", "Revenue Optimization Index", "Registration Outcome Indicator", "Resource Operational Impact"],
        correctAnswer: "Return on Investment"
    },
    {
        question: "Which feature helps personalize attendee experiences?",
        options: ["Generic Agenda", "Custom Tracks", "Standard Surveys", "Mass Emails"],
        correctAnswer: "Custom Tracks"
    },
    {
        question: "What is the primary benefit of virtual events?",
        options: ["Limited Reach", "High Travel Costs", "Global Accessibility", "Complex Logistics"],
        correctAnswer: "Global Accessibility"
    },
    {
        question: "Which metric is crucial for event success measurement?",
        options: ["Total Attendees", "Speaker Count", "Engagement Rate", "Venue Size"],
        correctAnswer: "Engagement Rate"
    },
    {
        question: "What is a common challenge in hybrid events?",
        options: ["Lack of content", "Integrating virtual and in-person experiences", "Low registration", "No networking opportunities"],
        correctAnswer: "Integrating virtual and in-person experiences"
    },
    {
        question: "Which of the following is a key aspect of sustainable events?",
        options: ["Using single-use plastics", "Minimizing waste and energy consumption", "Printing all materials", "Encouraging long-distance travel"],
        correctAnswer: "Minimizing waste and energy consumption"
    },
    {
        question: "What is the purpose of an event app?",
        options: ["To replace physical interaction", "To facilitate communication and engagement", "To only show the agenda", "To track attendee location"],
        correctAnswer: "To facilitate communication and engagement"
    },
    {
        question: "Which of these is NOT a stage of event planning?",
        options: ["Pre-event", "On-site", "Post-event", "Pre-vacation"],
        correctAnswer: "Pre-vacation"
    }
];

export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};