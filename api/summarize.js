const summarizeText = require('../summarize');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const text = req.body.text_to_summarize;

    if (!text) {
      return res.status(400).send('Text is required for summarization');
    }

    try {
      const summary = await summarizeText(text);
      res.status(200).send(summary);  // Send plain text response
    } catch (error) {
      console.error('Error summarizing text:', error);
      res.status(500).send('Failed to summarize text');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};
