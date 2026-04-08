import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  console.log('Fetching access token...');
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
    cache: 'no-store',
  });

  const data = await response.json();
  if (data.error) {
    console.error('Spotify Token Error:', data);
  }
  return data;
};

export async function GET() {
  if (!client_id || !client_secret || !refresh_token) {
    console.log('Missing Spotify credentials in .env.local');
    return NextResponse.json({ isPlaying: false, message: "No credentials" });
  }

  try {
    const { access_token, error } = await getAccessToken();
    if (error || !access_token) {
      return NextResponse.json({ isPlaying: false, error: 'Auth failed' });
    }

    console.log('Fetching currently playing...');
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    let song = null;
    if (response.status === 200) {
      song = await response.json();
    }

    if (response.status === 204 || response.status > 400 || !song || song.item === null) {
      console.log('Not playing or error, fetching recently played...');
      const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-store',
      });

      console.log('Recently played response status:', recentResponse.status);
      if (recentResponse.status === 204 || recentResponse.status > 400) {
        return NextResponse.json({ isPlaying: false });
      }

      const recentData = await recentResponse.json();
      if (!recentData.items || recentData.items.length === 0) {
        return NextResponse.json({ isPlaying: false });
      }

      const track = recentData.items[0].track;
      console.log('Found recently played:', track.name);

      return NextResponse.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((_artist: any) => _artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
      });
    }

    console.log('Found currently playing:', song?.item?.name);
    
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (err) {
    console.error('Spotify API Route Error:', err);
    return NextResponse.json({ isPlaying: false, error: 'Internal error' });
  }
}
