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
            fontSize: 22,
            letterSpacing: 3,
            color: '#007455',
            fontWeight: 700,
          }}
        >
          FREE SOFTWARE. REAL EXPERTISE.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            maxWidth: 920,
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 700,
            color: '#171E4B',
          }}
        >
          Free property management software. Powered by AI.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 28,
            color: '#3E4660',
          }}
        >
          crossub
        </div>
      </div>
    ),
    size,
  );
}
