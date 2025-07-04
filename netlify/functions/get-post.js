// netlify/functions/get-post.js

import { neon } from '@netlify/neon';

export default async (req, res) => {
  const sql = neon(); // uses NETLIFY_DATABASE_URL from environment
  const { id } = req.query; // or parse from body if POST

  try {
    const [post] = await sql`SELECT * FROM posts WHERE id = ${id}`;
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post', details: err.message });
  }
};
