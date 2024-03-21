// pages/api/signout.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Clear any session cookies or tokens
      // For example, you can clear a session cookie named "session"
      res.setHeader('Set-Cookie', 'session=; Max-Age=0; Path=/; HttpOnly');
  
      // Respond with a success message
      res.status(200).json({ message: 'Sign-out successful' });
    } else {
      // Respond with method not allowed if request method is not POST
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  