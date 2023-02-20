import React from 'react'
import Link from 'next/link'
function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>We couldn't find the page you were looking for.</h1>
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          marginTop: '60px',
          fontSize: '40px',
          color: '#339af0',
          textDecorationLine: 'underline',
        }}
      >
        <h1>Go back to home</h1>
      </Link>
    </div>
  );
}

export default NotFound