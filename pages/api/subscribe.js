import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type } = req.body;
  const subscriptionType = type || 'newsletter'; // Default to newsletter if not specified

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // Get client IP address
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

    // Log to CSV file
    const csvDir = path.join(process.cwd(), '..', '..', 'scripts', 'email');
    const csvFile = path.join(csvDir, 'lead-magnet-subscribers.csv');

    // Create directory if it doesn't exist
    if (!fs.existsSync(csvDir)) {
      fs.mkdirSync(csvDir, { recursive: true });
    }

    // Prepare CSV row
    const timestamp = new Date().toISOString();
    const csvRow = `${email},${timestamp},${subscriptionType},${ip}\n`;

    // Check if file exists and add header if not
    if (!fs.existsSync(csvFile)) {
      fs.writeFileSync(csvFile, 'email,timestamp,type,ip_address\n', 'utf8');
    }

    // Append to CSV file
    fs.appendFileSync(csvFile, csvRow, 'utf8');

    // Determine response based on type
    let response = {
      success: true,
      message: 'Subscription recorded.',
      downloadUrl: '/public/peptide-reference-guide.txt'
    };

    if (subscriptionType === 'guide') {
      response.message = 'Guide request received. The PDF is ready for download.';
      response.downloadUrl = '/public/peptide-reference-guide.html';
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Subscription failed. Please try again.' });
  }
}
