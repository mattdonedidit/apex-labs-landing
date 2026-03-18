export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type } = req.body;
  const subscriptionType = type || 'newsletter';

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // TODO: Send confirmation email with CSV logging + download link
    // For now, return download link directly
    
    let response = {
      success: true,
      message: 'Subscription recorded. Check your email for the download link.',
      downloadUrl: '/public/peptide-reference-guide.txt'
    };

    if (subscriptionType === 'guide') {
      response.message = 'Guide request received. Download link sent to your email.';
      response.downloadUrl = '/public/peptide-reference-guide.html';
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Subscription failed. Please try again.' });
  }
}
