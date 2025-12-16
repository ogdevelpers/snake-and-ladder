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
  { start: 4, end: 27, drop: 1, type: 'star', number: 13 },
  { start: 25, end: 45, drop: 3, type: 'star', number: 14 },
  { start: 30, end: 45, drop: 6, type: 'star', number: 15 },
  { start: 44, end: 68, drop: 15, type: 'star', number: 16 },
  { start: 48, end: 65, drop: 21, type: 'star', number: 17 },
  { start: 57, end: 75, drop: 36, type: 'star', number: 18 },
  { start: 71, end: 97, drop: 21, type: 'star', number: 19 },
  { start: 85, end: 95, drop: 45, type: 'star', number: 20 },
  { start: 91, end: 98, drop: 41, type: 'star', number: 21 },
  { start: 96, end: 100, drop: 34, type: 'star', number: 22 },
  { start: 10, end: 40, drop: 1, type: 'star', number: 23 },
  { start: 31, end: 62, drop: 20, type: 'star', number: 24 },
  { start: 43, end: 67, drop: 16, type: 'star', number: 25 },
];


// The cells that will trigger a question. These are the starting points of the stars.
export const questionCells = starClimbs.map(s => s.start);

// Sample questions.
export const hospitalQuestions = [
  {
    "number": 1,
    "start": 4,
    "question": "What does MICE stand for in the hospitality industry?",
    "options": [
      "Metrics, Improvements, Core, Events",
      "Management, Innovation, Customer, Experience",
      "Meetings, Incentives, Conferences, Exhibitions",
      "Marketing, Information, Communication, Entertainment"
    ],
    "correctAnswer": "Meetings, Incentives, Conferences, Exhibitions"
  },
  {
    "number": 2,
    "start": 7,
    "question": "Which of the following is a key service provided by a Convention and Visitors Bureau to hotels?",
    "options": [
      "Providing free guest room upgrades",
      "Marketing the destination to attract events and visitors",
      "Managing hotel staff payroll",
      "Designing hotel websites"
    ],
    "correctAnswer": "Marketing the destination to attract events and visitors"
  },
  {
    "number": 3,
    "start": 10,
    "question": "Which of the following is a reason planners may reject an RFP response?",
    "options": [
      "Too many venue options",
      "Delayed or incomplete responses from hotels",
      "Unclear keynote speaker schedule",
      "Bad weather forecast"
    ],
    "correctAnswer": "Delayed or incomplete responses from hotels"
  },
  {
    "number": 4,
    "start": 12,
    "question": "Which department in a hotel is primarily responsible for managing guest room inventory and pricing?",
    "options": [
      "Sales & Marketing",
      "Food & Beverage",
      "Revenue Management",
      "Housekeeping"
    ],
    "correctAnswer": "Revenue Management"
  },
  {
    "number": 5,
    "start": 18,
    "question": "How does Cvent's online venue sourcing tool help event planners?",
    "options": [
      "Helps in finding and comparing venues for their events",
      "Provides automated venue decoration designs based on event themes",
      "Manages venue staff scheduling and task assignments",
      "Facilitates automated negotiation of venue rental contracts"
    ],
    "correctAnswer": "Helps in finding and comparing venues for their events"
  },
  {
    "number": 6,
    "start": 25,
    "question": "Which Cvent tool is used for sourcing venues and managing RFPs (Requests for Proposals)?",
    "options": [
      "Cvent Supplier Network",
      "Cvent CRM",
      "Cvent Analytics",
      "Cvent Social Media Suite"
    ],
    "correctAnswer": "Cvent Supplier Network"
  },
  {
    "number": 7,
    "start": 30,
    "question": "How does Cvent's Event Diagramming benefit hotel operations for events, even though it's for planners?",
    "options": [
      "Staff uniform design",
      "Clear visual communication of setups & capacities",
      "Internal training",
      "External advertising"
    ],
    "correctAnswer": "Clear visual communication of setups & capacities"
  },
  {
    "number": 8,
    "start": 31,
    "question": "What is a key reason planners prefer hotels that offer 3D diagrams or virtual tours?",
    "options": [
      "To reduce costs of booking",
      "To avoid contacting hotel sales teams",
      "To visualise setup and ensure space suitability before booking",
      "To select hotel furniture styles"
    ],
    "correctAnswer": "To visualise setup and ensure space suitability before booking"
  },
  {
    "number": 9,
    "start": 37,
    "question": "How can a hotel improve their Cvent Supplier Network profile to attract more business?",
    "options": [
      "Hire a team of dolphins to greet planners",
      "Provide weather updates",
      "Add high-quality photos, virtual tours, diagrams",
      "Offer free unicorn rides"
    ],
    "correctAnswer": "Add high-quality photos, virtual tours, diagrams"
  },
  {
    "number": 10,
    "start": 39,
    "question": "How can event planners save time utilising Cvent's Event Diagramming Solution?",
    "options": [
      "It's allows for invitees to register for an event",
      "It helps to eliminate hours of back-and-forth spent on seating layout",
      "It allows planners to communicate with speakers",
      "It helps planners to collaborate with attendees"
    ],
    "correctAnswer": "It helps to eliminate hours of back-and-forth spent on seating layout"
  },
  {
    "number": 11,
    "start": 43,
    "question": "How can hotels use Cvent to capture repeat MICE business?",
    "options": [
      "Offer discounted rates every time",
      "Only work with local planners",
      "Track planner behaviour and preferences via reporting tools",
      "Automatically book events annually"
    ],
    "correctAnswer": "Track planner behaviour and preferences via reporting tools"
  },
  {
    "number": 12,
    "start": 44,
    "question": "Which team typically owns responding to MICE RFPs in a hotel?",
    "options": [
      "Engineering",
      "Sales & Events",
      "Security",
      "Front Office"
    ],
    "correctAnswer": "Sales & Events"
  },
  {
    "number": 13,
    "start": 48,
    "question": "What’s a smart way for hotels to boost visibility with planners on Cvent?",
    "options": [
      "Limit availability to weekends only",
      "Turn off auto-response features",
      "Use Featured Listings or Spotlight Ads",
      "Only respond to international planners"
    ],
    "correctAnswer": "Use Featured Listings or Spotlight Ads"
  },
  {
    "number": 14,
    "start": 51,
    "question": "How can Cvent Supplier Network help hotels beyond responding to RFPs?",
    "options": [
      "By using it as an internal staff communication tool",
      "By actively marketing their event spaces and services to a global network of planners",
      "By tracking competitor pricing for individual guest rooms",
      "By assisting planners in diagramming their event venues"
    ],
    "correctAnswer": "By actively marketing their event spaces and services to a global network of planners"
  },
  {
    "number": 15,
    "start": 57,
    "question": "Why do planners often prefer hotels with flexible meeting spaces?",
    "options": [
      "To host social events during late hours",
      "To manage last-minute changes and multiple formats",
      "To reduce security costs",
      "To avoid hiring AV vendor"
    ],
    "correctAnswer": "To manage last-minute changes and multiple formats"
  },
  {
    "number": 16,
    "start": 61,
    "question": "Which Cvent tool is best suited for managing hotel room blocks?",
    "options": [
      "Cvent Attendee Hub",
      "Cvent Business Transient",
      "Cvent Event Diagramming",
      "Cvent Passkey"
    ],
    "correctAnswer": "Cvent Passkey"
  },
  {
    "number": 17,
    "start": 69,
    "question": "Cvent's Response Automation or proposal tools assist hotel sales teams by …",
    "options": [
      "Automatically rejecting RFPs below a certain budget",
      "Allowing phone-based RFP submissions",
      "Generating individual guest room reservations",
      "Centralising communication, pre-filling responses and streamlining proposal creation"
    ],
    "correctAnswer": "Centralising communication, pre-filling responses and streamlining proposal creation"
  },
  {
    "number": 18,
    "start": 71,
    "question": "What are \"shoulder nights\" in MICE bookings?",
    "options": [
      "The nights before or after the peak event dates",
      "A mid-week evening with higher F&B minimums",
      "A day reserved for keynote speakers",
      "A time slot with mandatory breakouts"
    ],
    "correctAnswer": "The nights before or after the peak event dates"
  },
  {
    "number": 19,
    "start": 77,
    "question": "In hotel operations for a large conference, what does \"attrition\" refer to in a contract?",
    "options": [
      "The rate at which hotel staff leave their jobs",
      "The wear and tear on meeting room equipment",
      "The discount offered for early booking of event space",
      "The penalty for unfulfilled room block or F&B minimums."
    ],
    "correctAnswer": "The penalty for unfulfilled room block or F&B minimums."
  },
  {
    "number": 20,
    "start": 79,
    "question": "What are the benefits of using Cvent Passkey?",
    "options": [
      "Generate incremental revenue from room upgrades or packages",
      "Provide free airport shuttle",
      "Offer passes to guests for concerts/sporting events",
      "To secure all keys within the hotel"
    ],
    "correctAnswer": "Generate incremental revenue from room upgrades or packages"
  },
  {
    "number": 21,
    "start": 85,
    "question": "Why are sustainability practices important for hotels targeting MICE events?",
    "options": [
      "They help reduce electricity bills",
      "To avoid heavy fines",
      "Planners and attendees value eco-conscious choices",
      "Beacuse it's mandatory"
    ],
    "correctAnswer": "Planners and attendees value eco-conscious choices"
  },
  {
    "number": 22,
    "start": 87,
    "question": "What is Cvent Business Transient primarily designed to help hotels manage?",
    "options": [
      "Weddings and social events",
      "Small meetings",
      "Corporate travel programmes and transient RFPs",
      "Room block management"
    ],
    "correctAnswer": "Corporate travel programmes and transient RFPs"
  },
  {
    "number": 23,
    "start": 91,
    "question": "What’s one way Cvent helps hotels reduce manual work in responding to RFPs?",
    "options": [
      "Offers an AI chatbot for guest check-in",
      "Fills out standard proposal fields automatically",
      "Generates music playlists for events",
      "Translates emails into different languages"
    ],
    "correctAnswer": "Fills out standard proposal fields automatically"
  },
  {
    "number": 24,
    "start": 96,
    "question": "What is the benefit of Cvent’s Competitive Set (Comp Set) dashboard for hoteliers?",
    "options": [
      "Compares event planner reviews",
      "Tracks average meeting room temperature",
      "Benchmarks your RFP activity against similar hotels",
      "Identifies trends in competitor response behaviour"
    ],
    "correctAnswer": "Benchmarks your RFP activity against similar hotels"
  },
  {
    "number": 25,
    "start": 99,
    "question": "To analyse MICE business performance via Cvent, which reporting is most valuable for a hotel?",
    "options": [
      "Google Analytics",
      "Advanced MICE sales analytics",
      "Accounting reports",
      "Guest surveys"
    ],
    "correctAnswer": "Advanced MICE sales analytics"
  }
];

  
export const otherQuestions = [
  {
    "number": 1,
    "start": 4,
    "question": "Which word means “difficult to understand due to extreme subtlety”?",
    "options": [
      "Lucid",
      "Recondite",
      "Tactile",
      "Verbose"
    ],
    "correctAnswer": "Recondite"
  },
  {
    "number": 2,
    "start": 7,
    "question": "Which is closest in meaning to 'perspicacious'?",
    "options": [
      "Careless",
      "Sharp-minded",
      "Tolerant",
      "Stubborn"
    ],
    "correctAnswer": "Sharp-minded"
  },
  {
    "number": 3,
    "start": 10,
    "question": "Which word means 'sparkling brilliantly'?",
    "options": [
      "Pellucid",
      "Scintillant",
      "Nebulous",
      "Arid"
    ],
    "correctAnswer": "Scintillant"
  },
  {
    "number": 4,
    "start": 12,
    "question": "“Extemporaneous” means—",
    "options": [
      "Performed without preparation",
      "Very timely",
      "Full of errors",
      "Difficult to explain"
    ],
    "correctAnswer": "Performed without preparation"
  },
  {
    "number": 5,
    "start": 18,
    "question": "Which describes 'extreme eagerness or enthusiasm'?",
    "options": [
      "Apathy",
      "Lassitude",
      "Ardour",
      "Ennui"
    ],
    "correctAnswer": "Ardour"
  },
  {
    "number": 6,
    "start": 25,
    "question": "Which word means 'excessive praise'?",
    "options": [
      "Adulation",
      "Derision",
      "Candour",
      "Tenacity"
    ],
    "correctAnswer": "Adulation"
  },
  {
    "number": 7,
    "start": 30,
    "question": "“Fastidious” means—",
    "options": [
      "Careless",
      "Hard to please",
      "Talkative",
      "Foolish"
    ],
    "correctAnswer": "Hard to please"
  },
  {
    "number": 8,
    "start": 31,
    "question": "Which word means 'short-lived'?",
    "options": [
      "Ephemeral",
      "Indelible",
      "Feral",
      "Arcane"
    ],
    "correctAnswer": "Ephemeral"
  },
  {
    "number": 9,
    "start": 37,
    "question": "Which word means 'impossible to reform'?",
    "options": [
      "Irascible",
      "Incorrigible",
      "Incendiary",
      "Inveterate"
    ],
    "correctAnswer": "Incorrigible"
  },
  {
    "number": 10,
    "start": 39,
    "question": "Which word means 'showing deep respect'?",
    "options": [
      "Reverent",
      "Repugnant",
      "Redundant",
      "Recalcitrant"
    ],
    "correctAnswer": "Reverent"
  },
  {
    "number": 11,
    "start": 43,
    "question": "Origin of 'philanthropy'?",
    "options": [
      "Greek",
      "Latin",
      "Old French",
      "Arabic"
    ],
    "correctAnswer": "Greek"
  },
  {
    "number": 12,
    "start": 44,
    "question": "Root 'phil' means—",
    "options": [
      "Fear",
      "Breath",
      "Love",
      "Flesh"
    ],
    "correctAnswer": "Love"
  },
  {
    "number": 13,
    "start": 48,
    "question": "Root 'spir' relates to—",
    "options": [
      "Water",
      "Earth",
      "Breath",
      "Movement"
    ],
    "correctAnswer": "Breath"
  },
  {
    "number": 14,
    "start": 51,
    "question": "Literal meaning of 'nostalgia'?",
    "options": [
      "Return to pain",
      "Homecoming pain",
      "Light longing",
      "Childhood longing"
    ],
    "correctAnswer": "Homecoming pain"
  },
  {
    "number": 15,
    "start": 57,
    "question": "Prefix 'proto-' means—",
    "options": [
      "First",
      "Last",
      "Middle",
      "Beyond"
    ],
    "correctAnswer": "First"
  },
  {
    "number": 16,
    "start": 61,
    "question": "Root meaning of 'ubiquitous'—",
    "options": [
      "Scattered",
      "Everywhere",
      "Rare",
      "Distant"
    ],
    "correctAnswer": "Everywhere"
  },
  {
    "number": 17,
    "start": 69,
    "question": "Correct Oxford spelling—",
    "options": [
      "Realize",
      "Realise",
      "Realiese",
      "Reallise"
    ],
    "correctAnswer": "Realise"
  },
  {
    "number": 18,
    "start": 71,
    "question": "Plural of 'phenomenon'?",
    "options": [
      "Phenomenons",
      "Phenomenaes",
      "Phenomena",
      "Phenomeni"
    ],
    "correctAnswer": "Phenomena"
  },
  {
    "number": 19,
    "start": 77,
    "question": "Correct double-l form—",
    "options": [
      "Traveller",
      "Traveler",
      "Travellor",
      "Travellar"
    ],
    "correctAnswer": "Traveller"
  },
  {
    "number": 20,
    "start": 79,
    "question": "Cacophony' means—",
    "options": [
      "Pleasant melody",
      "Loud discordant noise",
      "Whispers",
      "Repetition"
    ],
    "correctAnswer": "Loud discordant noise"
  },
  {
    "number": 21,
    "start": 85,
    "question": "Correct derived form of 'provoke'—",
    "options": [
      "Provokation",
      "Provocation",
      "Provecation",
      "Provvacation"
    ],
    "correctAnswer": "Provocation"
  },
  {
    "number": 22,
    "start": 87,
    "question": "Correct plural of 'criterion'?",
    "options": [
      "Criteria",
      "Criterias",
      "Criterions",
      "Criteriae"
    ],
    "correctAnswer": "Criteria"
  },
  {
    "number": 23,
    "start": 91,
    "question": "Plural of 'alumnus'?",
    "options": [
      "Alumnae",
      "Alumni",
      "Alumnis",
      "Alumnuses"
    ],
    "correctAnswer": "Alumni"
  },
  {
    "number": 24,
    "start": 96,
    "question": "Correct spelling—",
    "options": [
      "Conscientious",
      "Concientious",
      "Conscentious",
      "Consciencious"
    ],
    "correctAnswer": "Conscientious"
  },
  {
    "number": 25,
    "start": 99,
    "question": "Identify the subjunctive—",
    "options": [
      "If I was taller…",
      "If I were taller…",
      "If I am taller…",
      "If I would be taller…"
    ],
    "correctAnswer": "If I were taller…"
  }
];



export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};