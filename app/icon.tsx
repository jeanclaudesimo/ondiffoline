import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00467b 0%, #6c0c1c 100%)',
          borderRadius: '6px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.4 5.4 11 5.7V7C8.2 7 6 9.2 6 12V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V12C18 9.2 15.8 7 13 7V5.7C13.6 5.4 14 4.7 14 4C14 2.9 13.1 2 12 2ZM8 19V12C8 10.3 9.3 9 11 9H13C14.7 9 16 10.3 16 12V19H8Z"
            fill="white"
          />
          <circle cx="12" cy="14" r="1.5" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
