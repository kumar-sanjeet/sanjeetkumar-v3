import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  // Hardcode or determine base URL. In edge, process.env is available.
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000';
  const baseUrl = `${protocol}://${domain}`;

  const imageUrl = `${baseUrl}/assets/images/sanjeet-photo.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // slate-900
        }}
      >
        {/* Left Side: Image */}
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e293b', // slate-800
          }}
        >
          <img
            src={imageUrl}
            alt="Sanjeet Kumar"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #334155',
            }}
          />
        </div>

        {/* Right Side: Text */}
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '60%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              marginBottom: 20,
              background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Sanjeet Kumar
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#94a3b8', // slate-400
              lineHeight: 1.4,
            }}
          >
            Director of Enterprise Architecture | Sovereign AI
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
