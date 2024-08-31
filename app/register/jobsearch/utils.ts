const jobPool = [
  'Construction', 'Swim Teacher', 'Lawyer', 'Flight Attendant',
  'Pirate', 'Professional Snuggler', 'Intergalactic Ambassador', 'Bubble Wrap Popping Specialist',
  'Robot Whisperer', 'Disco Dancer', 'Time Traveler', 'Quantum Physicist',
  'Cloud Engineer', 'Cyborg Mechanic', 'Virtual Reality Experience Designer', 'Alien Linguist',
  'Professional Line-Stander', 'Underwater Basketweaver', 'Chicken Whisperer', 'Furry Fashion Designer',
  'Sandcastle Architect', 'Competitive Eater', 'Professional Cuddler', 'Digital Gardener',
  'Virtual Event Planner', 'Social Media Influencer for Pets', 'Professional Line-Dancer',
  'Amusement Park Mechanic', 'Haunted House Scream Actor', 'Pet Food Taster',
  'Dog Surfing Trainer', 'Professional Balloon Twister', 'Feline Fashion Model', 'Underwater Welder',
  'Personalized Meal Planner', 'Professional Line-Stander', 'Treehouse Builder', 'Virtual Reality Game Developer',
  'Professional Mermaid/Merman', 'Haunted House Sound Engineer', 'Fireworks Technician', 'Animal Costume Designer',
  'Stunt Driver', 'Caramel Apple Dippers', 'Balloon Pop Musician', 'Bubble Artist',
  'Pizza Dough Tosser', 'Pinata Maker', 'Hamster Trainer', 'Clown',
  'Face Painter', 'Balloon Animal Twister', 'Bubble Wrap Popping Expert', 'Jump Scare Artist',
  'Hula Hooper', 'Unicyclist', 'Juggler', 'Yo-Yoer',
  'Skateboarder', 'BMX Rider', 'Roller Coaster Designer', 'Carousel Operator',
  'Ferris Wheel Operator', 'Haunted House Actor', 'Scarecrow', 'Crop Duster',
  'Crop Circle Maker', 'Cloud Sculptor', 'Fog Machine Operator', 'Bubble Machine Operator',
  'Smoke Machine Operator', 'Strobe Light Operator', 'Laser Light Show Operator', 'Confetti Cannon Operator',
  'Pyrotechnician', 'Fire Breather', 'Snake Milker', 'Insect Tamer', 'Animal Whisperer', 'Animal Translator'
]

export function getJobsFromJobPool(): string[] {
const shuffled = Array.from(new Set(jobPool)).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
}
