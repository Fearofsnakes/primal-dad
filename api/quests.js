import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const data = await kv.get('primal-dad-quests');
    return res.status(200).json(data || null);
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (!body || !body.week) {
      return res.status(400).json({ error: 'Invalid quest data' });
    }
    body.synced_at = new Date().toISOString();
    await kv.set('primal-dad-quests', body);
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
