import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 100,
                    background: 'linear-gradient(to bottom right, #2563EB, #F97316)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '20%', // iOS style curve
                }}
            >
                PH
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
