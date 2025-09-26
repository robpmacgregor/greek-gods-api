import { GreekGodModel } from '../models/GreekGod';

const greekGods = [
  {
    name: "Zeus",
    role: "King of the gods, sky, thunder",
    myth: "Overthrew the Titans; ruled from Mount Olympus; punished Prometheus"
  },
  {
    name: "Hera",
    role: "Queen of the gods, marriage, family",
    myth: "Tormented Heracles (Zeus's son); helped the Argonauts indirectly"
  },
  {
    name: "Poseidon",
    role: "God of the sea, earthquakes, horses",
    myth: "Contested Athena for Athens; fathered the Cyclops Polyphemus"
  },
  {
    name: "Athena",
    role: "Goddess of wisdom, war, crafts",
    myth: "Born fully armed from Zeus's head; helped Odysseus return home"
  },
  {
    name: "Apollo",
    role: "God of the sun, prophecy, music, healing",
    myth: "Killed the Python at Delphi; pursued Daphne (who became a laurel tree)"
  },
  {
    name: "Artemis",
    role: "Goddess of the hunt, moon, wilderness",
    myth: "Punished Actaeon for seeing her bathing; aided hunters and maidens"
  },
  {
    name: "Ares",
    role: "God of war",
    myth: "Lover of Aphrodite; captured by giants Otus and Ephialtes"
  },
  {
    name: "Aphrodite",
    role: "Goddess of love, beauty, desire",
    myth: "Born from sea foam; involved in the Trojan War (Judgment of Paris)"
  },
  {
    name: "Hephaestus",
    role: "God of fire, metalworking, craftsmanship",
    myth: "Crafted weapons for gods; thrown from Olympus by Hera"
  },
  {
    name: "Hermes",
    role: "Messenger god, trade, travel, trickery",
    myth: "Stole Apollo's cattle as a baby; guided souls to the underworld"
  },
  {
    name: "Demeter",
    role: "Goddess of agriculture, harvest",
    myth: "Searched for daughter Persephone, causing the seasons"
  },
  {
    name: "Dionysus",
    role: "God of wine, ecstasy, theater",
    myth: "Spread his cult across Greece; punished Pentheus in The Bacchae"
  }
];

export async function seedGreekGods() {
  try {
    await GreekGodModel.deleteMany({});
    await GreekGodModel.insertMany(greekGods);
    console.log('Greek gods seeded successfully!');
  } catch (err) {
    console.error('Seeding error:', err);
    throw err;
  }
}