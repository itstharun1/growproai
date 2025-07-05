const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why {{name}} is {{location}}'s Sweetest Spot in 2025",
  "Discover Top Reasons to Visit {{name}} in {{location}}",
  "{{name}} in {{location}} is Revolutionizing Local Business!",
  "5 Reasons {{name}} is Loved in {{location}}",
  "{{name}}: The Hidden Gem of {{location}} You’ll Love",
  "What Makes {{name}} the Talk of {{location}} in 2025",
  "Locals Say: {{name}} is the Best in {{location}}!",
  "{{name}} is Changing the Game for {{location}}",
  "Step Inside {{name}} — A Favorite Spot in {{location}}",
  "{{name}} Brings Big City Vibes to {{location}}",
  "Why {{location}} Residents Can’t Get Enough of {{name}}",
  "{{name}} Sets the Bar High in {{location}}",
  "{{name}} Is the Heart of the Community in {{location}}",
  "{{name}} Ranked #1 in {{location}} by Locals",
  "Experience Excellence at {{name}}, {{location}}"
];


const generateHeadline = (name, location) => {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace(/{{name}}/g, name).replace(/{{location}}/g, location);
};

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const data = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 50),
    headline: generateHeadline(name, location),
  };
  res.json(data);
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const headline = generateHeadline(name, location);
  res.json({ headline });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
