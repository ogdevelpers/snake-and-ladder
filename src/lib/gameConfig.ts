export const starClimbs = [
  { start: 7, end: 14, drop: 3, type: 'star', number: 1 },
  { start: 12, end: 26, drop: 8, type: 'star', number: 2 },
  { start: 18, end: 38, drop: 14, type: 'star', number: 3 },
  { start: 37, end: 50, drop: 19, type: 'star', number: 4 },
  { start: 39, end: 50, drop: 16, type: 'star', number: 5 },
  { start: 51, end: 88, drop: 1, type: 'star', number: 6 },
  { start: 61, end: 73, drop: 53, type: 'star', number: 7 },
  { start: 69, end: 89, drop: 49, type: 'star', number: 8 },
  { start: 77, end: 88, drop: 72, type: 'star', number: 9 },
  { start: 79, end: 92, drop: 64, type: 'star', number: 10 },
  { start: 87, end: 97, drop: 80, type: 'star', number: 11 },
  { start: 99, end: 100, drop: 1, type: 'star', number: 12 },
];

// The cells that will trigger a question. These are the starting points of the stars.
export const questionCells = starClimbs.map(s => s.start);

// Sample questions.
export const hospitalQuestions = [
  {
    number: 1,
    start: 7,
    question: "What does MICE stand for in the hospitality industry?",
    options: [
      "Metrics, Improvements, Core, Events",
      "Management, Innovation, Customer, Experience",
      "Meetings, Incentives, Conferences, Exhibitions",
      "Marketing, Information, Communication, Entertainment"
    ],
    correctAnswer: "Meetings, Incentives, Conferences, Exhibitions"
  },
  {
    number: 2,
    start: 12,
    question: "Which department in a hotel is primarily responsible for managing guest room inventory and pricing?",
    options: [
      "Sales & Marketing",
      "Food & Beverage",
      "Revenue Management",
      "Housekeeping"
    ],
    correctAnswer: "Revenue Management"
  },
  {
    number: 3,
    start: 18,
    question: "How does Cvent's online venue sourcing tool help event planners?",
    options: [
      "Helps in finding and comparing venues for their events",
      "Provides automated venue decoration designs based on event themes",
      "Manages venue staff scheduling and task assignments",
      "Facilitates automated negotiation of venue rental contracts"
    ],
    correctAnswer: "Helps in finding and comparing venues for their events"
  },
  {
    number: 4,
    start: 37,
    question: "Beyond receiving RFPs, how can a hotel's Cvent Supplier Network profile attract more business?",
    options: [
      "Only lowest rates",
      "Weather updates",
      "High-quality photos, virtual tours, diagrams",
      "Staff directory"
    ],
    correctAnswer: "High-quality photos, virtual tours, diagrams"
  },
  {
    number: 5,
    start: 39,
    question: "How can event planners save time utilising Cvent's Event Diagramming Solution?",
    options: [
      "It's allows for invitees to register for an event",
      "It helps to eliminate hours of back-and-forth spent on seating layout",
      "It allows planners to communicate with speakers",
      "It helps planners to collaborate with attendees"
    ],
    correctAnswer: "It helps to eliminate hours of back-and-forth spent on seating layout"
  },
  {
    number: 6,
    start: 51,
    question: "How can a hotel leverage Cvent's Supplier Network beyond simply responding to RFPs?",
    options: [
      "By using it as an internal staff communication tool",
      "By actively marketing their event spaces and services to a global network of planners",
      "By tracking competitor pricing for individual guest rooms",
      "By assisting planners in diagramming their event venues"
    ],
    correctAnswer: "By actively marketing their event spaces and services to a global network of planners"
  },
  {
    number: 7,
    start: 61,
    question: "Which Cvent tool is best suited for managing hotel room blocks?",
    options: [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    correctAnswer: "Cvent Passkey"
  },
  {
    number: 8,
    start: 69,
    question: "Cvent's Response Automation or proposal tools assist hotel sales teams by …",
    options: [
      "Automatically rejecting RFPs below a certain budget",
      "Allowing phone-based RFP submissions",
      "Generating individual guest room reservations",
      "Centralising communication, pre-filling responses and streamlining proposal creation"
    ],
    correctAnswer: "Centralising communication, pre-filling responses and streamlining proposal creation"
  },
  {
    number: 9,
    start: 77,
    question: 'In hotel operations for a large conference, what does "attrition" refer to in a contract?',
    options: [
      "The rate at which hotel staff leave their jobs",
      "The wear and tear on meeting room equipment",
      "The discount offered for early booking of event space",
      "The penalty for unfulfilled room block or F&B minimums."
    ],
    correctAnswer: "The penalty for unfulfilled room block or F&B minimums."
  },
  {
    number: 10,
    start: 79,
    question: "Cvent Passkey helps hotels upsell during room booking. What's a common example?",
    options: [
      "Promoting room upgrades or packages",
      "Free airport shuttle",
      "Discounting future stays",
      "Free conference registration"
    ],
    correctAnswer: "Promoting room upgrades or packages"
  },
  {
    number: 11,
    start: 87,
    question: "What is Cvent Business Transient primarily designed to help hotels manage?",
    options: [
      "Weddings and social events",
      "Small meetings",
      "Corporate travel programs and transient RFPs",
      "Room block management"
    ],
    correctAnswer: "Corporate travel programs and transient RFPs"
  },
  {
    number: 12,
    start: 99,
    question: "To analyse MICE business performance via Cvent, which reporting is most valuable for a hotel?",
    options: [
      "Daily occupancy",
      "Advanced group sales analytics",
      "Accounting reports",
      "Individual guest surveys"
    ],
    correctAnswer: "Advanced group sales analytics"
  }
];

const extraQuestions = [
  {
    question: "Which of the following is a key service provided by a Convention and Visitors Bureau to hotels?",
    options: [
      "Providing free guest room upgrades",
      "Marketing the destination to attract events and visitors",
      "Managing hotel staff payroll",
      "Designing hotel websites"
    ],
    correctAnswer: "Marketing the destination to attract events and visitors"
  },
  {
    question: "Cvent provides solutions for which type of events?",
    options: [
      "Only in-person events",
      "Only virtual events",
      "Only hybrid events",
      "In-person, virtual, and hybrid events"
    ],
    correctAnswer: "In-person, virtual, and hybrid events"
  },
  {
    question: "Which Cvent tool is used for sourcing venues and managing RFPs (Requests for Proposals)?",
    options: [
      "Cvent Supplier Network",
      "Cvent CRM",
      "Cvent Analytics",
      "Cvent Social Media Suite"
    ],
    correctAnswer: "Cvent Supplier Network"
  },
  {
    question: "How does Cvent's Event Diagramming benefit hotel operations for events, even though it's for planners?",
    options: [
      "Staff uniform design",
      "Clear visual communication of setups & capacities",
      "Internal training",
      "External advertising"
    ],
    correctAnswer: "Clear visual communication of setups & capacities"
  }
]



export const otherQuestions = [
  {
    number: 1,
    start: 7,
    question: "Which of the following ranks in the Top 10 most stressful jobs according to a Forbes study?",
    options: ["Nuclear Scientist", "Marine Engineer", "Event Planner", "Orthodontist"],
    correctAnswer: "Event Planner"
  },
  {
    number: 2,
    start: 12,
    question: "What does RFP stand for?",
    options: ["Request for Pricing", "Requirements for Proposal", "Request for Proposal", "Request for Participation"],
    correctAnswer: "Request for Proposal"
  },
  {
    number: 3,
    start: 18,
    question: "How does Cvent's online venue sourcing tool help event planners?",
    options: [
      "Helps in finding and comparing venues for their events",
      "Provides automated venue decoration designs based on event themes",
      "Manages venue staff scheduling and task assignments",
      "Facilitates automated negotiation of venue rental contracts"
    ],
    correctAnswer: "Helps in finding and comparing venues for their events"
  },
  {
    number: 4,
    start: 37,
    question: "What are the main benefits of using Cvent's Event Budget Management Tool for planners?",
    options: [
      "Helps compare costs",
      "Enables tracking of all catering expenses",
      "Supports collaboration with vendors",
      "Provides spending estimates and monitors expenses throughout the event"
    ],
    correctAnswer: "Provides spending estimates and monitors expenses throughout the event"
  },
  {
    number: 5,
    start: 39,
    question: "How can event planners save time utilising Cvent's Event Diagramming Solution?",
    options: [
      "It's allows for invitees to register for an event",
      "It helps to eliminate hours of back-and-forth spent on seating layout",
      "It allows planners to communicate with speakers",
      "It helps planners to collaborate with attendees"
    ],
    correctAnswer: "It helps to eliminate hours of back-and-forth spent on seating layout"
  },
  {
    number: 6,
    start: 51,
    question: "iCapture is...",
    options: [
      "Apple's new solution for gathering data and insights",
      "used for AI-powered photography",
      "a solution for capturing leads",
      "a defence intelligence solution"
    ],
    correctAnswer: "a solution for capturing leads"
  },
  {
    number: 7,
    start: 61,
    question: "What is the primary function of an event website?",
    options: [
      "To facilitate event registration",
      "To provide comprehensive history of the event organisation",
      "To serve as a virtual venue for events",
      "To assist planners in diagramming their venues"
    ],
    correctAnswer: "To facilitate event registration"
  },
  {
    number: 8,
    start: 69,
    question: "Which Cvent tool is best suited for managing hotel room blocks?",
    options: [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    correctAnswer: "Cvent Passkey"
  },
  {
    number: 9,
    start: 77,
    question: "Event planners use venue diagramming tools to…",
    options: [
      "Streamline attendee registration",
      "Design and organise the layout of event spaces",
      "Facilitate event ticket sales",
      "Host virtual events"
    ],
    correctAnswer: "Design and organise the layout of event spaces"
  },
  {
    number: 10,
    start: 79,
    question: "Which of the following is the primary objective of an event mobile app?",
    options: [
      "Improving event networking",
      "Increasing attendee engagement",
      "Enhancing the onsite experience",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    number: 11,
    start: 87,
    question: "Which Cvent product allows you to print sustainable event badges?",
    options: [
      "Cvent Event Diagramming",
      "Cvent OnArrival",
      "Cvent Supplier Network",
      "Cvent Passkey"
    ],
    correctAnswer: "Cvent OnArrival"
  },
  {
    number: 12,
    start: 99,
    question: "Which of the following is a crucial element of effective event reporting?",
    options: [
      "Session insights, attendee tracking, and registration analysis for actionable feedback",
      "Compiling speaker profiles and audience demographics",
      "Reviewing catering preferences and vendor ratings",
      "Documenting event themes and entertainment quality"
    ],
    correctAnswer: "Session insights, attendee tracking, and registration analysis for actionable feedback"
  }
];


export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};