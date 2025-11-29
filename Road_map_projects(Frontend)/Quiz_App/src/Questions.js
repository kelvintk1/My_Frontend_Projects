const quizQuestions = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    explanation: "Mars appears red due to the iron oxide (rust) on its surface."
  },
  {
    id: 2,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
    answer: "Blue Whale",
    explanation: "The blue whale can grow over 30 meters long, making it the largest mammal."
  },
  {
    id: 3,
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
    explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis."
  },
  {
    id: 4,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
    explanation: "Although Sydney and Melbourne are bigger, Canberra is the capital."
  },
  {
    id: 5,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
  },
  {
    id: 6,
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    answer: "1945",
    explanation: "World War II ended in 1945 when Japan surrendered after the atomic bombings."
  },
  {
    id: 7,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Ozone", "Oxide"],
    answer: "Oxygen",
    explanation: "The symbol 'O' stands for oxygen on the periodic table."
  },
  {
    id: 8,
    question: "Which country invented paper?",
    options: ["Egypt", "Greece", "China", "India"],
    answer: "China",
    explanation: "Paper was invented in China during the Han Dynasty around 105 AD."
  },
  {
    id: 9,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation: "2 is the only even prime number and the smallest prime."
  },
  {
    id: 10,
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    explanation: "The Pacific Ocean covers more area than all land combined."
  },
  {
    id: 11,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
    explanation: "Japan uses the Yen as its currency."
  },
  {
    id: 12,
    question: "Which planet has the most moons?",
    options: ["Saturn", "Jupiter", "Mars", "Uranus"],
    answer: "Saturn",
    explanation: "Saturn has over 80 confirmed moons, more than any other planet."
  },
  {
    id: 13,
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    answer: "100°C",
    explanation: "At standard pressure, water boils at 100°C."
  },
  {
    id: 14,
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Heart"],
    answer: "Pancreas",
    explanation: "The pancreas regulates blood sugar by producing insulin."
  },
  {
    id: 15,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci",
    explanation: "The Mona Lisa was painted by Leonardo da Vinci during the Renaissance."
  },
  {
    id: 16,
    question: "Which is the smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Pluto"],
    answer: "Mercury",
    explanation: "Mercury is the smallest planet since Pluto is classified as a dwarf planet."
  },
  {
    id: 17,
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Aluminum", "Lead", "Zinc"],
    answer: "Mercury",
    explanation: "Mercury is the only metal that is liquid at room temperature."
  },
  {
    id: 18,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: "Japan",
    explanation: "Japan is called the Land of the Rising Sun because it lies east of China."
  },
  {
    id: 19,
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Quartz", "Iron"],
    answer: "Diamond",
    explanation: "Diamond is the hardest naturally occurring material."
  },
  {
    id: 20,
    question: "Which instrument measures atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    answer: "Barometer",
    explanation: "A barometer measures atmospheric pressure, useful in weather forecasting."
  },
  {
    id: 21,
    question: "How many teeth does a normal adult human have?",
    options: ["28", "30", "32", "34"],
    answer: "32",
    explanation: "A full adult set has 32 teeth including wisdom teeth."
  },
  {
    id: 22,
    question: "Which is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Tiger"],
    answer: "Cheetah",
    explanation: "Cheetahs can reach speeds of up to 120 km/h."
  },
  {
    id: 23,
    question: "What is H2O more commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Hydrogen"],
    answer: "Water",
    explanation: "H2O is the chemical formula for water."
  },
  {
    id: 24,
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "UK", "Germany", "Italy"],
    answer: "France",
    explanation: "France gifted the Statue of Liberty in 1886 to symbolize friendship."
  },
  {
    id: 25,
    question: "Which blood type is known as the universal donor?",
    options: ["A", "B", "O Negative", "AB Positive"],
    answer: "O Negative",
    explanation: "O Negative blood can be given to patients of any blood type."
  },
  {
    id: 26,
    question: "Which is the largest internal organ in the human body?",
    options: ["Liver", "Lungs", "Heart", "Kidneys"],
    answer: "Liver",
    explanation: "The liver is the largest internal organ and has many functions."
  },
  {
    id: 27,
    question: "What is the main gas found in the air we breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
    explanation: "About 78% of Earth's atmosphere is nitrogen."
  },
  {
    id: 28,
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    answer: "Mandarin Chinese",
    explanation: "Mandarin has over a billion native speakers."
  },
  {
    id: 29,
    question: "Which is the only planet that spins clockwise?",
    options: ["Earth", "Venus", "Mars", "Uranus"],
    answer: "Venus",
    explanation: "Venus rotates in the opposite direction to most planets."
  },
  {
    id: 30,
    question: "Which country has the most islands?",
    options: ["Norway", "Canada", "Sweden", "Indonesia"],
    answer: "Sweden",
    explanation: "Sweden has over 260,000 islands, the most in the world."
  },
  {
    id: 31,
    question: "What is the rarest blood type?",
    options: ["A", "B", "O Negative", "AB Negative"],
    answer: "AB Negative",
    explanation: "AB Negative is the rarest blood type, found in less than 1% of people."
  },
  {
    id: 32,
    question: "What does DNA stand for?",
    options: ["Deoxyribonucleic Acid", "Dioxynucleic Acid", "Deoxynuclear Acid", "Dinucleic Acid"],
    answer: "Deoxyribonucleic Acid",
    explanation: "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic info."
  },
  {
    id: 33,
    question: "Which is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
    explanation: "Venus has a thick atmosphere that traps heat, making it hotter than Mercury."
  },
  {
    id: 34,
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Albert Einstein",
    explanation: "Einstein developed the special and general theories of relativity."
  },
  {
    id: 35,
    question: "Which natural disaster is measured with the Richter scale?",
    options: ["Hurricanes", "Tornadoes", "Earthquakes", "Floods"],
    answer: "Earthquakes",
    explanation: "The Richter scale measures earthquake magnitude."
  },
  {
    id: 36,
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
    explanation: "Ottawa is the political capital, not the larger cities like Toronto."
  },
  {
    id: 37,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury",
    explanation: "Mercury is the closest planet to the Sun."
  },
  {
    id: 38,
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    answer: "Antarctic",
    explanation: "Although icy, Antarctica is the largest desert by area."
  },
  {
    id: 39,
    question: "What is the chemical symbol for gold?",
    options: ["Gd", "Go", "Au", "Ag"],
    answer: "Au",
    explanation: "The symbol Au comes from the Latin word 'Aurum'."
  },
  {
    id: 40,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
    answer: "Mount Everest",
    explanation: "Mount Everest is about 8,848 meters tall."
  },
  {
    id: 41,
    question: "Which country is famous for the maple leaf symbol?",
    options: ["USA", "Canada", "UK", "Australia"],
    answer: "Canada",
    explanation: "The maple leaf is a national symbol of Canada."
  },
  {
    id: 42,
    question: "How many players are there in a standard football (soccer) team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
    explanation: "A football team has 11 players on the field."
  },
  {
    id: 43,
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["0°F", "32°F", "100°F", "212°F"],
    answer: "32°F",
    explanation: "Water freezes at 0°C, which is 32°F."
  },
  {
    id: 44,
    question: "Which ocean is on the east coast of the United States?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Atlantic Ocean",
    explanation: "The Atlantic Ocean borders the eastern coast of the US."
  },
  {
    id: 45,
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Horse", "Camel", "Donkey", "Elephant"],
    answer: "Camel",
    explanation: "Camels are called the 'Ship of the Desert' because of their ability to travel long distances in deserts."
  },
  {
    id: 46,
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366",
    explanation: "Leap years have 366 days due to February 29."
  },
  {
    id: 47,
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: "Nile River",
    explanation: "The Nile is traditionally considered the longest, though the Amazon is close."
  },
  {
    id: 48,
    question: "Which is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Jupiter",
    explanation: "Jupiter is the largest planet, over 11 times Earth's diameter."
  }
];

export default quizQuestions