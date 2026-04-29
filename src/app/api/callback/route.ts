import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = 'http://127.0.0.1:3000/api/callback';
  // we have to fix the spotify thing to replace guitar string

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: 'No code provided', received: Array.from(searchParams.keys()) }, { status: 400 });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    }),
  });

  const data = await response.json();

  if (data.error) {
    return NextResponse.json(data, { status: 400 });
  }

  // Display the refresh token to the user
  return new Response(`
    <html>
      <body style="font-family: sans-serif; padding: 40px; background: #121212; color: white;">
        <h1>Spotify Refresh Token!</h1>
        <p>Copy this token and add it to your <strong>.env.local</strong> as <strong>SPOTIFY_REFRESH_TOKEN</strong>:</p>
        <div style="background: #1DB954; color: black; padding: 20px; border-radius: 8px; font-family: monospace; word-break: break-all; margin: 20px 0;">
          ${data.refresh_token}
        </div>
        <p>After adding it, restart your server and the Spotify bar will be live!</p>
      </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } });
}
