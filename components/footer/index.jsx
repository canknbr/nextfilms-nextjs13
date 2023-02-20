import React from 'react'
import styled from './styles.module.css'
import Link from 'next/link'
function Footer() {
  return (
    <footer className={styled.footer}>
      Made with ❤️ by &nbsp; <Link href="https://github.com/canknbr">Can Kanbur</Link>
    </footer>
  );
}

export default Footer