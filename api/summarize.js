const summarizeText = require('../summarize.js');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const text = req.body.text_to_summarize;

    try {
      const summary = await summarizeText(text);
      res.status(200).json({ summary });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to summarize text' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
