import React from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import styled from './styles.module.css';
function Header() {
  return (
    <header className={`${styled.header} container fluid`}>
      <div className={styled.headerWrapper}>
        <Link href="/" className={styled.logo}>
          <FaPlayCircle />
          NEXTFILMS
        </Link>
        <nav className={styled.nav}>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
