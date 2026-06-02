export const quest = [
  // --- AGENT QUESTIONS ---
  {
    type: 'agent',
    question: 'Which agent has the ability to teleport?',
    option: ['Omen', 'Brimstone', 'Viper', 'Astra'],
    correctIndex: 0
  },
  {
    type: 'agent',
    question: {
      text: 'Guess the agent based on their signature ability:',
      image: 'images/ability/breachability.png'
    },
    option: [
      'images/agents/1.png',
      'images/agents/breach.png',
      'images/agents/brimstone.png',
      'images/agents/chamber.png'
    ],
    correctIndex: 1
  },
  {
    type: 'agent',
    question: 'Which agent has smoke of the highest duration?',
    option: ['Omen', 'Brimstone', 'Viper', 'Astra'],
    correctIndex: 1
  },

  // --- MAP QUESTIONS ---
  {
    type: 'map',
    question: {
      text: 'Guess the map based on this view:',
      image: 'images/maps/question.png'
    },
    option: [
      'images/maps/Ascent.png',
      'images/maps/bind.png',
      'images/maps/corrode.png',
      'images/maps/heaven.png'
    ],
    correctIndex: 0
  },
  {
    type: 'map',
    question: 'Which map features a teleportation portal?',
    option: ['Ascent', 'Bind', 'Haven', 'Split'],
    correctIndex: 1
  },
  {
    type: 'map',
    question: 'Which map features three spike sites instead of two?',
    option: ['Ascent', 'Bind', 'Haven', 'Split'],
    correctIndex: 2
  },

  // --- WEAPON QUESTIONS ---
  {
    type: 'weapon',
    question: {
      text: 'Guess the weapon based on this skin:',
      image: 'images/guns/classicskin.png'
    },
    option: [
      'images/guns/bulldog.png',
      'images/guns/classic.png',
      'images/guns/phantom.png',
      'images/guns/vandel.png'
    ],
    correctIndex: 1
  },
  {
    type: 'weapon',
    question: 'Which rifle is known for its one-tap headshot at all ranges?',
    option: ['Bulldog', 'Classic', 'Phantom', 'Vandal'],
    correctIndex: 3
  },
  {
    type: 'weapon',
    question: 'Which weapon is a high-damage revolver costing 800 credits?',
    option: ['Sheriff', 'Classic', 'Phantom', 'Bulldog'],
    correctIndex: 0
  }
];