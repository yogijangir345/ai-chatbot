const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  // Input Validation
  if (!message || message.trim() === "") {
    return res.status(400).json({
      reply: "Please enter a valid message.",
    });
  }

  const msg = message.toLowerCase().trim();
  let reply = "";

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    reply = "Hello! How can I help you today?";
  }

  else if (msg.includes("good morning")) {
    reply = "Good Morning! Hope you have a productive day.";
  }

  else if (msg.includes("good afternoon")) {
    reply = "Good Afternoon! Hope your day is going well.";
  }

  else if (msg.includes("good evening")) {
    reply = "Good Evening! How can I assist you?";
  }

  else if (msg.includes("good night")) {
    reply = "Good Night! Take care and sleep well.";
  }

  else if (msg.includes("how are you")) {
    reply = "I am doing great. Thanks for asking!";
  }

  else if (msg.includes("your name")) {
    reply = "I am an AI ChatBot built using Next.js and Node.js.";
  }

  else if (
    msg === "ok" ||
    msg === "okay" ||
    msg === "okk"
  ) {
    reply = "Great! Let me know if you need anything else.";
  }

  else if (
    msg.includes("thanks") ||
    msg.includes("thank you")
  ) {
    reply = "You're welcome! Happy to help.";
  }

  else if (msg.includes("bye")) {
    reply = "Goodbye! Have a wonderful day.";
  }

  else if (
    msg.includes("who made you") ||
    msg.includes("who created you")
  ) {
    reply =
      "I was created as a project using Next.js, Node.js, and JavaScript.";
  }

  else if (msg.includes("what can you do")) {
    reply =
      "I can answer basic questions about AI, programming, technology, time, date, and general topics.";
  }

  else if (msg.includes("ai")) {
    reply =
      "AI stands for Artificial Intelligence. It enables machines to perform tasks that normally require human intelligence.";
  }

  else if (msg.includes("machine learning")) {
    reply =
      "Machine Learning is a branch of AI that allows systems to learn patterns from data.";
  }

  else if (msg.includes("react")) {
    reply =
      "React is a popular JavaScript library used for building user interfaces.";
  }

  else if (msg.includes("javascript")) {
    reply =
      "JavaScript is one of the most popular programming languages for web development.";
  }

  else if (msg.includes("node")) {
    reply =
      "Node.js allows JavaScript code to run outside the browser on a server.";
  }

  else if (msg.includes("html")) {
    reply =
      "HTML is the standard markup language used to create web pages.";
  }

  else if (msg.includes("css")) {
    reply =
      "CSS is used to style and design web pages.";
  }

  else if (msg.includes("joke")) {
    reply =
      "Why do programmers prefer dark mode? Because light attracts bugs!";
  }

  else if (msg.includes("time")) {
    reply = `Current Time: ${new Date().toLocaleTimeString()}`;
  }

  else if (msg.includes("date")) {
    reply = `Today's Date: ${new Date().toLocaleDateString()}`;
  }

  else {
    const randomReplies = [
      "That's interesting. Can you tell me more?",
      "I understand. Could you explain further?",
      "Sorry, I don't have enough information about that.",
      "That's a good question. My knowledge is limited in this demo version.",
      "I am still learning. Try asking something related to AI, programming, or technology."
    ];

    reply =
      randomReplies[Math.floor(Math.random() * randomReplies.length)];
  }

  res.json({
    reply,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});