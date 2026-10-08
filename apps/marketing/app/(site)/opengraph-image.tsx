import { ImageResponse } from 'next/og';

export const alt = 'CROSSUB — free property management software, powered by AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #E5FBF3 48%, #F3EEFF 100%)',
          padding: '72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#24C68D',
            fontWeight: 600,
          }}
        >
          Built for real estate agencies.
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 24,
            maxWidth: 920,
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 700,
            color: '#171E4B',
          }}
        >
          <div style={{ display: 'flex', color: '#24C68D' }}>Free</div>
          <div style={{ display: 'flex', color: '#24C68D' }}>property management software.</div>
          <div style={{ display: 'flex', marginTop: 8, fontSize: 44, fontWeight: 600 }}>
            Powered by AI.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 28,
            color: '#62697C',
          }}
        >
          CROSSUB
        </div>
      </div>
    ),
    size,
  );
}
