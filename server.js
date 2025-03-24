const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: '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', // Replace with your OpenAI API key
});

app.post('/ask', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Use GPT-4 or GPT-3.5
      messages: [{ role: 'user', content: message }],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});