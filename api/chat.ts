export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    console.error('No message provided');
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('No OpenAI API key found');
    return res.status(500).json({ error: 'OpenAI API key not set in environment' });
  }

  try {
    console.log('Sending message to OpenAI:', message);
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful padel coach assistant.' },
          { role: 'user', content: message },
        ],
        max_tokens: 256,
        temperature: 0.7,
      }),
    });
    const data = await openaiRes.json();
    console.log('OpenAI API response:', data);
    if (data.error) {
      console.error('OpenAI API error:', data.error);
      return res.status(500).json({ error: data.error.message });
    }
    return res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('API route error:', err);
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
} 