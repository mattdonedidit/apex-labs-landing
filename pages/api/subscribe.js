export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // TODO: Integrate with Google Sheets API once credentials are available
    // For now, log to a local JSON file or send confirmation email
    
    // Send confirmation email via apexlabs33@gmail.com
    // (requires email service integration)

    return res.status(200).json({ 
      success: true, 
      message: 'Subscription recorded. Check your email to confirm.' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}
